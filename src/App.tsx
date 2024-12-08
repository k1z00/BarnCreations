import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainApp from "./components/mainComponent/MainApp";
import HeaderApp from "./components/headComponent/HeadApp";
import FooterMain from "./components/footerComponent/FooterMain";
import SellApp from "./componentsSell/SellMain";

const App: React.FC = () => {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <HeaderApp />
      <Routes>
        <Route path="/" element={<MainApp />}/>
        <Route path="/sell" element={<SellApp />} />
      </Routes>
      <FooterMain />
    </Router>
  );
};

export default App;
