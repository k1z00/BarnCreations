import  React,{ useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainApp from "./componentsAbout/mainComponent/MainApp";
import HeaderApp from "./componentsAbout/headComponent/HeadApp";
import FooterMain from "./componentsAbout/footerComponent/FooterMain";
import SellApp from "./componentsSell/SellMain";

const App: React.FC = () => {

  const targetBlockRef = useRef<HTMLDivElement | null>(null);

  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <HeaderApp />
      <Routes>
        <Route path="/" element={<MainApp targetBlockRef={targetBlockRef} />}/>
        <Route path="/sell" element={<SellApp />} />
      </Routes>
      <FooterMain targetBlockRef={targetBlockRef}  />
    </Router>

  );
};

export default App;
