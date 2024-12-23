import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { stat } from 'fs'

interface House {
  id: string
  title: string
  text: string
  src: string
  price: number
  floors: number
  area: number
  bedrooms: number
}

interface Pagination {
  first: number
  prev: number | null
  next: number | null
  last: number
  pages: number
  items: number
  data: House[]
}

interface BarnState {
  house: Pagination
  loading: boolean
  error: string | null
  currentPage: number
  totalHouses: number
  totalPages: number
  priceRange: [number, number]
  floors: number | null
  area: [number, number]
  bedrooms: number | null
}

const initialState: BarnState = {
  house: {
    first: 1,
    prev: null,
    next: null,
    last: 0,
    pages: 0,
    items: 0,
    data: [],
  },
  loading: false,
  error: null,
  currentPage: 1,
  totalHouses: 0,
  totalPages: 0,
  priceRange: [0, 10000000],
  floors: null,
  area: [0, 170],
  bedrooms: null,
}

function createFilters({
  priceRange,
  area,
  floors,
  bedrooms,
}: {
  priceRange: [number, number]
  area: [number, number]
  floors: number | null
  bedrooms: number | null
}) {
  const params = new URLSearchParams()

  params.append('price_gte', priceRange[0].toString())
  params.append('price_lte', priceRange[1].toString())
  params.append('area_gte', area[0].toString())
  params.append('area_lte', area[1].toString())

  if (floors !== null)
    params.append('floors', floors.toString())
  if (bedrooms !== null)
    params.append('bedrooms', bedrooms.toString())

  return params.toString()
}

async function fetchHouses(page: number, filters: string) {

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch(
    `http://localhost:3001/house?_page=${page}&_per_page=6&${filters}`
  );

  return await response.json();
}

async function fetchTotalHouses(filters: string) {
 const response = await fetch(`http://localhost:3001/house?${filters}`)
  const data = await response.json()
  return data.length
}

export const fetchBarn = createAsyncThunk(
  'barn/fetchBarn',
  async ({
    page,
    priceRange,
    floors,
    area,
    bedrooms,
  }: {
    page: number
    priceRange: [number, number]
    area: [number, number]
    floors: number | null
    bedrooms: number | null
  }) => {
    const filters = createFilters({ priceRange, area, floors, bedrooms })

    const data = await fetchHouses(page, filters)
    const totalHouses = await fetchTotalHouses(filters)
    const totalPages = Math.ceil(totalHouses / 6)

    return { data, items: totalHouses, pages: totalPages }
  },
)

const barnSlice = createSlice({
  name: 'barn',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
      localStorage.setItem('currentPage', action.payload.toString())
    },
    setPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.priceRange = action.payload
      localStorage.setItem('priceRange', JSON.stringify(action.payload))
    },
    setFloors: (state, action: PayloadAction<number | null>) => {
      state.floors = action.payload
      localStorage.setItem('floors', action.payload !== null ? action.payload.toString() : '')
    },
    setArea: (state, action: PayloadAction<[number, number]>) => {
      state.area = action.payload
      localStorage.setItem('area', JSON.stringify(action.payload))
    },
    setBedrooms: (state, action: PayloadAction<number | null>) => {
      state.bedrooms = action.payload
      localStorage.setItem('bedrooms', action.payload !== null ? action.payload.toString() : '')
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBarn.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(
        fetchBarn.fulfilled,
        (
          state,
          action: PayloadAction<{
            data: Pagination
            items: number
            pages: number
          }>,
        ) => {
          state.loading = false
          state.house = action.payload.data
          state.totalHouses = action.payload.items
          state.totalPages = action.payload.pages
        },
      )
      .addCase(fetchBarn.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Ошибка загрузки данных'
      })
  },
})

export const {
  setCurrentPage,
  setPriceRange,
  setFloors,
  setArea,
  setBedrooms,
} = barnSlice.actions

export default barnSlice.reducer
