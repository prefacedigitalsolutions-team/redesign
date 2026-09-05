import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About"; 
import Service from "./pages/Service"; 
import Contact from "./pages/Contact-us"; 
import Catalogue from "./pages/Catalogue-de"; 
import Photoshoot from "./pages/photoshoot-de"; 
import Web from "./pages/Web"; 

import CommonBanner from "./components/Navbar/common";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloder/Preloader";
import BottomToTop from "./components/bottom-to-top/BottomToTop";
import MouseRun from "./components/mouse-run/MouseRun";

import "./App.css";

function ScrollToTopOnRoute() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

function AppLayout() {
  return (
    <>
      <ScrollToTopOnRoute />
      <MouseRun />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Catalogue" element={<Catalogue />} />
        <Route path="/photoshoot" element={<Photoshoot />} />
        <Route path="/web" element={<Web />} />

        {/* Unknown route → Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <CommonBanner />
      <Footer />
      <BottomToTop />
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;