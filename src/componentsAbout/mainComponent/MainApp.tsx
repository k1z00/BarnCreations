
import InfoMain from "./AboutInfo/InfoMain";
import React, { RefObject } from "react";
import AdvantagesMain from "./AboutAdvantages/AdvantagesMain";
import GalleryMain from "./AboutGalleryHouses/GalleryMain";
import ConditionsMain from "./AboutConditions/ConditionsMain";


interface MainAppProps {
  targetBlockRef: RefObject<HTMLDivElement>;
}

const MainApp: React.FC<MainAppProps> = ({ targetBlockRef }) => {
  return (
    <>
      <main>
     <InfoMain targetBlockRef={targetBlockRef}/>
     <AdvantagesMain/>
     <GalleryMain />
     <ConditionsMain/>
      </main>
    </>
  );
};

export default MainApp;
