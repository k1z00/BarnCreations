import React from "react";
import "../StyleSell/side.scss";
import PriceSlider from "./SliderPrice/PriceSlider";
import SideFloors from './SideFloors/SideFloors'
import AreaSlider from "./SlideArea/AreaSlider";
import SideBedrooms from "./SideBedrooms/SideBedrooms";
import useMediaQuery from '@mui/material/useMediaQuery';

const SideBar: React.FC = () => {
  
  const isMobile = useMediaQuery('(min-width: 970px)');
  return (
    <>
    {isMobile && (
      <div className="sidebar_container">
      <div className="sidebar_title">
        <h3>Фильтр</h3>
        </div>
      <PriceSlider />
      <SideFloors/>
      <AreaSlider/>
      <SideBedrooms/>
    </div>
       
    )}
    </>
  );
};

export default SideBar;
