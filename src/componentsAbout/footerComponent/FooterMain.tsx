import React, { RefObject } from "react";
import FooterApp from "./FooterApp";
import '../StyleAbout/footer.scss';

interface FooterMainProps {
    targetBlockRef: RefObject<HTMLDivElement>;
  }

const FooterMain: React.FC<FooterMainProps> = ({ targetBlockRef }) => {
  return (
    <footer ref={targetBlockRef} className="footer_main">
      <FooterApp  />
    </footer>
  );
};

export default FooterMain;
