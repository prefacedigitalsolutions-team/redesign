import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"; 


import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import CommonBanner from './components/Navbar/common';
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloder/Preloader";

import "./App.css";

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <CommonBanner />
      <Footer />
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

  // <BrowserRouter> wrap kar diya hai yahan
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;