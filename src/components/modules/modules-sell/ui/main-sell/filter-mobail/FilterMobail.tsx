// components/Filters.tsx
import React from "react";
import { useAppDispatch } from "../../../../../../shared/store/index";
import {
  setPriceRange,
  setFloors,
  setArea,
  setBedrooms,
} from "../../../shared/slice/slice-shop";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

interface FiltersProps {
  priceRange: [number, number];
  floors: number | null;
  area: [number, number];
  bedrooms: number | null;
}

const Filters: React.FC<FiltersProps> = ({
  priceRange,
  floors,
  area,
  bedrooms,
}) => {
  const dispatch = useAppDispatch();

  const handlePriceRangeChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const target = event.target as HTMLInputElement;
    const newPriceRange = [...priceRange];
    newPriceRange[index] = Number(target.value);
    dispatch(setPriceRange(newPriceRange as [number, number]));
  };

  const handleFloorsChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = event.target as HTMLInputElement;
    dispatch(setFloors(Number(target.value)));
  };

  const handleAreaChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const target = event.target as HTMLInputElement;
    const newArea = [...area];
    newArea[index] = Number(target.value);
    dispatch(setArea(newArea as [number, number]));
  };

  const handleBedroomsChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = event.target as HTMLInputElement;
    dispatch(setBedrooms(Number(target.value)));
  };

  return (
    <List>
      <ListItem>
        <TextField
          label="Минимальная цена"
          type="number"
          value={priceRange[0]}
          onChange={(e) => handlePriceRangeChange(e, 0)}
        />
      </ListItem>
      <ListItem>
        <TextField
          label="Максимальная цена"
          type="number"
          value={priceRange[1]}
          onChange={(e) => handlePriceRangeChange(e, 1)}
        />
      </ListItem>
      <ListItem>
        <TextField
          label="Этажи"
          type="number"
          value={floors || ""}
          onChange={handleFloorsChange}
        />
      </ListItem>
      <ListItem>
        <TextField
          label="Минимальная площадь"
          type="number"
          value={area[0]}
          onChange={(e) => handleAreaChange(e, 0)}
        />
      </ListItem>
      <ListItem>
        <TextField
          label="Максимальная площадь"
          type="number"
          value={area[1]}
          onChange={(e) => handleAreaChange(e, 1)}
        />
      </ListItem>
      <ListItem>
        <TextField
          label="Спальни"
          type="number"
          value={bedrooms || ""}
          onChange={handleBedroomsChange}
        />
      </ListItem>
    </List>
  );
};

export default Filters;
