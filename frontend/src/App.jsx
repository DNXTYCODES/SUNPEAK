import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Player from "./pages/Player";
import Services from "./pages/Services";
import TrainingPrograms from "./pages/TrainingPrograms";
import SolarPackagesPage from "./pages/SolarPackagesPage";
import SolarCalculatorPage from "./pages/SolarCalculatorPage";

const App = () => {
  
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      <ToastContainer 
        position="top-center"
        toastClassName="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl backdrop-blur-sm"
        bodyClassName="text-[var(--text)]"
        progressClassName="bg-[var(--primary-neon)]"
      />
      
      <Navbar />
      
      <div className="flex-1">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
          <SearchBar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solarpackages" element={<SolarPackagesPage />} />
            <Route path="/solarcalculator" element={<SolarCalculatorPage />} />
            <Route path="/training" element={<TrainingPrograms />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/player/:playerId" element={<Player />} />
            <Route path="/services" element={<Services />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/product/:productId" element={<Product />} />
            {/* Commented routes remain unchanged */}
          </Routes>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
