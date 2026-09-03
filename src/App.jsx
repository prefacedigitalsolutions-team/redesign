
import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";

import CommonBanner from "./components/Navbar/common";
import Footer from "./components/Footer/Footer";

import Preloader from "./components/Preloder/Preloader";
import BottomToTop from "./components/bottom-to-top/BottomToTop";

import MouseRun from "./components/mouse-run/MouseRun";

import "./App.css";

function AppLayout() {
  return (
    <>
    <MouseRun />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/services" element={<Home />} />
        <Route path="/contact" element={<Home />} />

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

