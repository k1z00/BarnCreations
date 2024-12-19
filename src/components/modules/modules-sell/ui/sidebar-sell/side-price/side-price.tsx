import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../../shared/store/index";
import { setPriceRange, setCurrentPage } from "../../../shared/slice/slice-shop";

import CustomSlider from "../../../../../../Ui/UiSlider/CustomSlider";
import "../../../style/slideprice.scss";

const PriceSlider: React.FC = () => {
  const dispatch = useAppDispatch();
  const { priceRange } = useAppSelector((state) => state.barn);

  const handleSliderChange = (values: [number, number]) => {
    dispatch(setPriceRange(values));
    dispatch(setCurrentPage(1));
  };

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
