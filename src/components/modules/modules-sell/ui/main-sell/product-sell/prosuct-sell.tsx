import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../../../shared/store/index";
import {
  fetchBarn,
  setCurrentPage,
  setPriceRange,
  setFloors,
  setArea,
  setBedrooms,
} from "../../../shared/slice/slice-shop"
import Spinner from "../spiner-sell/spiner-sell";
import ButtonCustom from "../../../../../../Ui/UiButton/CustomButton";
import Modal from "../modal-sell/ModalSell";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Filters from "../filter-mobail/FilterMobail"; // Импортируем новый компонент
import useMediaQuery from "@mui/material/useMediaQuery";
import { House } from "../../../shared/types/types";



const ProductSell: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    house,
    loading,
    error,
    currentPage,
    totalPages,
    priceRange,
    floors,
    area,
    bedrooms,
  } = useAppSelector((state) => state.barn);

  const [searchParams, setSearchParams] = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHouse, setSelectedHouse] = useState<House | null>();
  const [openDrawer, setOpenDrawer] = useState(false);

  const isMobile = useMediaQuery("(max-width: 970px)");

  useEffect(() => {
    const currentPage = localStorage.getItem("currentPage");
    const priceRange = localStorage.getItem("priceRange");
    const floors = localStorage.getItem("floors");
    const area = localStorage.getItem("area");
    const bedrooms = localStorage.getItem("bedrooms");

    if (currentPage) dispatch(setCurrentPage(Number(currentPage)));
    if (priceRange) dispatch(setPriceRange(JSON.parse(priceRange)));
    if (floors) dispatch(setFloors(Number(floors)));
    if (area) dispatch(setArea(JSON.parse(area)));
    if (bedrooms) dispatch(setBedrooms(Number(bedrooms)));
  }, [dispatch]);

  useEffect(() => {
 
    const page = Number(searchParams.get("page")) || 1;
    const priceRangeFromUrl: [number, number] = [
      Number(searchParams.get("price_gte")) || priceRange[0],
      Number(searchParams.get("price_lte")) || priceRange[1],
    ];
    const floorsFromUrl = Number(searchParams.get("floors")) || floors;
    const areaFromUrl: [number, number] = [
      Number(searchParams.get("area_gte")) || area[0],
      Number(searchParams.get("area_lte")) || area[1],
    ];
    const bedroomsFromUrl = Number(searchParams.get("bedrooms")) || bedrooms;

    
    dispatch(setCurrentPage(page));
    dispatch(setPriceRange(priceRangeFromUrl));
    dispatch(setFloors(floorsFromUrl));
    dispatch(setArea(areaFromUrl));
    dispatch(setBedrooms(bedroomsFromUrl));

  
    dispatch(
      fetchBarn({
        page,
        priceRange: priceRangeFromUrl,
        floors: floorsFromUrl,
        area: areaFromUrl,
        bedrooms: bedroomsFromUrl,
      })
    );
  }, [dispatch, searchParams]);

  useEffect(() => {
    setSearchParams({
      page: currentPage.toString(),
      price_gte: priceRange[0].toString(),
      price_lte: priceRange[1].toString(),
      floors: floors !== null ? floors.toString() : "",
      area_gte: area[0].toString(),
      area_lte: area[1].toString(),
      bedrooms: bedrooms !== null ? bedrooms.toString() : "",
    });
  }, [currentPage, priceRange, floors, area, bedrooms, setSearchParams]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const handleOpenModal = (house: House | null) => {
    setSelectedHouse(house);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedHouse(null);
  };

  const toggleDrawer = (isOpen: boolean) => () => {
    setOpenDrawer(isOpen);
  };

  const DrawerList = () => (
    <List>
      <ListItem>
        <Button onClick={toggleDrawer(false)}>Закрыть</Button>
      </ListItem>
      <Filters
        priceRange={priceRange}
        floors={floors}
        area={area}
        bedrooms={bedrooms}
      />
    </List>
  );

  return (
    <div className="productsell_container">
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Заявка на покупку"
        house={selectedHouse}
      />

      <div className="productsell_info">
        {isMobile && (
          <>
            <Button className="bntDraw" onClick={toggleDrawer(true)}>
              Открыть фильтры
            </Button>
            <Drawer
              anchor="left"
              open={openDrawer}
              onClose={toggleDrawer(false)}
              PaperProps={{
                style: {
                  width: "100%",
                  height: "100%",
                },
              }}
            >
              <DrawerList />
            </Drawer>
          </>
        )}
        <p className="productsell_text">
          Страница {currentPage} из {totalPages}
        </p>
      </div>
      {error && <p>{error}</p>}
      {loading ? <Spinner/> : (
    <>
    
    
         <div className="productsell_items">
        {house.data.map((h) => (
          <div className="productsell_item" key={h.id}>
            <div className="productsell_item_info">
              <img className="productsell_item_img" src={h.src} alt={h.title} />
              <h3>{h.title}</h3>
              <p>{h.text}</p>
              <p>Цена: {h.price}</p>
            </div>
            <ButtonCustom
              className="productsell_item_button"
              onClick={() => handleOpenModal(h)}
            >
              Оставить заявку
            </ButtonCustom>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          className="button_pag"
          onClick={handlePrevPage}
          disabled={loading || currentPage === 1}
        >
          Назад
        </button>
        <button
          className="button_pag"
          onClick={handleNextPage}
          disabled={loading || currentPage === totalPages}
        >
          Вперед
        </button>
      </div>
       
       </>
      ) }
      </div>
  );
};

export default ProductSell;
