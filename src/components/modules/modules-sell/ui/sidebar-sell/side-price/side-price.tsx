import React, { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../../shared/store/index";
import { setPriceRange, setCurrentPage, fetchBarn } from "../../../shared/slice/slice-shop";
import debounce from "lodash.debounce"; // Импортируем debounce

import CustomSlider from "../../../../../../Ui/UiSlider/CustomSlider";
import "../../../style/slideprice.scss";

const PriceSlider: React.FC = () => {
  const dispatch = useAppDispatch();
  const { priceRange, floors, area, bedrooms } = useAppSelector((state) => state.barn);


  const handleSliderChange = useCallback(
    debounce((values: [number, number]) => {
      dispatch(setPriceRange(values));
      dispatch(setCurrentPage(1));

     
      dispatch(fetchBarn({
        page: 1,
        priceRange: values,
        floors,
        area,
        bedrooms,
      }));
    }),
    [dispatch, floors, area, bedrooms]
  );

  return (
    <>
      <div className="price_container">
        <p className="price_text">Выберите диапазон цен</p>
        <CustomSlider
          min={0}
          max={1000000}
          value={priceRange}
          onChange={handleSliderChange}
        />
        <div className="slider-output">
          <p>
            Цена : ${priceRange[0]} - ${priceRange[1]}
          </p>
        </div>
      </div>
    </>
  );
};

export default PriceSlider;