import React from "react";
import "../../style/side.scss";
import PriceSlider from "./side-price/side-price";
import SideFloors from './side-floors/side-floors'
import AreaSlider from "./side-area/side-area";
import SideBedrooms from "./side-beedroms/side-beedroms";
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
