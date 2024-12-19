import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/about-page/about-page";
import HeaderApp from "./components/modules/moduels-about/ui/head-about/head-app";
import FooterMain from "./components/modules/moduels-about/ui/footer-about/footer-main";
import SellPage from "./pages/sell-page/sell-page";

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
        <Route
          path="/"
          element={<AboutPage targetBlockRef={targetBlockRef} />}
        />
        <Route path="/sell" element={<SellPage />} />
      </Routes>
      <FooterMain targetBlockRef={targetBlockRef} />
    </Router>
  );
};

export default App;
