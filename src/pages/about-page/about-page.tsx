import InfoMain from "../../components/modules/moduels-about/ui/main-about/info/info-main";
import React, { RefObject } from "react";
import AdvantagesMain from "../../components/modules/moduels-about/ui/main-about/advanteges/advanteges-main";
import GalleryMain from "../../components/modules/moduels-about/ui/main-about/gallery/galery-main";
import ConditionsMain from "../../components/modules/moduels-about/ui/main-about/conditions/conditions-main";

interface MainAppProps {
  targetBlockRef: RefObject<HTMLDivElement>;
}

const AboutPage:React.FC<MainAppProps> = ({ targetBlockRef }) => {
  return (
    <>
      <main>
        <InfoMain targetBlockRef={targetBlockRef} />
        <AdvantagesMain />
        <GalleryMain />
        <ConditionsMain />
      </main>
    </>
  );
};

export default AboutPage;