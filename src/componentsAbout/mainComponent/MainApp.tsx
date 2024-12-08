import React from "react";
import InfoMain from "./AboutInfo/InfoMain";

import AdvantagesMain from "./AboutAdvantages/AdvantagesMain";
import GalleryMain from "./AboutGalleryHouses/GalleryMain";
import ConditionsMain from "./AboutConditions/ConditionsMain";

const MainApp: React.FC = () => {
  return (
    <>
      <main>
     <InfoMain/>
     <AdvantagesMain/>
     <GalleryMain />
     <ConditionsMain/>
      </main>
    </>
  );
};

export default MainApp;
