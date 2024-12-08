import React from "react";
import { useAppDispatch, useAppSelector } from "../../../index";
import { setArea, setCurrentPage } from "../../SliceShop";

import CustomSlider from "../../../Ui/UiSlider/CustomSlider";
import "../../StyleSell/area.scss";

const AreaSlider: React.FC = () => {
  const dispatch = useAppDispatch();
  const { area } = useAppSelector((state) => state.barn);

  const handleSliderChange = (values: [number, number]) => {
    dispatch(setArea(values));
    dispatch(setCurrentPage(1));
  };

  return (
    <>
      <div className="area_container">
        <p className="area_text">Выберите площадь дома</p>
        <CustomSlider
          min={0}
          max={170}
          value={area}
          onChange={handleSliderChange}
        />
        <div className="area_output">
          <p>
            Площадь: {area[0]}м² - {area[1]}м²
          </p>
        </div>
      </div>
    </>
  );
};

export default AreaSlider;
