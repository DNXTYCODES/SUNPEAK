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
import { FaWhatsapp, FaPhone } from "react-icons/fa";

const App = () => {
  
  return (
    <div 
      className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)] transition-colors duration-300"
      itemScope 
      itemType="https://schema.org/WebSite"
    >
      {/* Structured Data for Website */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "SunPeak Solar Services",
          "url": "https://sunpeak.com.ng",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://sunpeak.com.ng/collection?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          "description": "Leading solar services provider in Benin, Nigeria offering solar installation, products, training and instant cost estimates",
          "inLanguage": "en-NG"
        })}
      </script>
      
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:bg-[var(--primary-neon)] focus:text-black focus:p-4 focus:z-50"
      >
        Skip to main content
      </a>
      
      <ToastContainer 
        position="top-center"
        toastClassName="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl backdrop-blur-sm"
        bodyClassName="text-[var(--text)]"
        progressClassName="bg-[var(--primary-neon)]"
      />
      
      <Navbar />
      
      <main id="main-content" className="flex-1">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
          <SearchBar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/solarpackages" 
              element={
                <div itemScope itemType="https://schema.org/OfferCatalog">
                  <SolarPackagesPage />
                </div>
              } 
            />
            <Route 
              path="/solarcalculator" 
              element={
                <div itemScope itemType="https://schema.org/WebApplication">
                  <SolarCalculatorPage />
                </div>
              } 
            />
            <Route 
              path="/training" 
              element={
                <div itemScope itemType="https://schema.org/EducationEvent">
                  <TrainingPrograms />
                </div>
              } 
            />
            <Route 
              path="/about" 
              element={
                <div itemScope itemType="https://schema.org/AboutPage">
                  <About />
                </div>
              } 
            />
            <Route 
              path="/contact" 
              element={
                <div itemScope itemType="https://schema.org/ContactPage">
                  <Contact />
                </div>
              } 
            />
            <Route path="/player/:playerId" element={<Player />} />
            <Route 
              path="/services" 
              element={
                <div itemScope itemType="https://schema.org/Service">
                  <Services />
                </div>
              } 
            />
            <Route 
              path="/collection" 
              element={
                <div itemScope itemType="https://schema.org/ItemList">
                  <Collection />
                </div>
              } 
            />
            <Route 
              path="/product/:productId" 
              element={
                <div itemScope itemType="https://schema.org/Product">
                  <Product />
                </div>
              } 
            />
          </Routes>
        </div>
      </main>

      <Footer />
      
      {/* Floating Contact Bubbles */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
        {/* WhatsApp Bubble */}
        <a 
          href="https://wa.me/2348134553751" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-all group animate-bounce-slow"
          aria-label="Chat with us on WhatsApp"
        >
          <FaWhatsapp className="text-white text-2xl" />
          <span className="absolute right-full top-1/2 transform -translate-y-1/2 mr-3 bg-[var(--card-bg)] text-[var(--text)] text-sm font-medium py-1 px-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Chat with us
          </span>
        </a>
        
        {/* Phone Call Bubble */}
        <a 
          href="tel:+2348134553751" 
          className="w-14 h-14 rounded-full bg-[var(--primary-neon)] flex items-center justify-center shadow-lg hover:shadow-xl transition-all group animate-bounce-slow"
          aria-label="Call us"
          style={{ animationDelay: "0.2s" }}
        >
          <FaPhone className="text-[var(--secondary-dark)] text-xl" />
          <span className="absolute right-full top-1/2 transform -translate-y-1/2 mr-3 bg-[var(--card-bg)] text-[var(--text)] text-sm font-medium py-1 px-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Call us now
          </span>
        </a>
      </div>
    </div>
  );
};

export default App;
















// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Collection from "./pages/Collection";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Product from "./pages/Product";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import SearchBar from "./components/SearchBar";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Player from "./pages/Player";
// import Services from "./pages/Services";
// import TrainingPrograms from "./pages/TrainingPrograms";
// import SolarPackagesPage from "./pages/SolarPackagesPage";
// import SolarCalculatorPage from "./pages/SolarCalculatorPage";

// const App = () => {
  
//   return (
//     <div 
//       className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)] transition-colors duration-300"
//       itemScope 
//       itemType="https://schema.org/WebSite"
//     >
//       {/* Structured Data for Website */}
//       <script type="application/ld+json">
//         {JSON.stringify({
//           "@context": "https://schema.org",
//           "@type": "WebSite",
//           "name": "SunPeak Solar Services",
//           "url": "https://sunpeak.com.ng",
//           "potentialAction": {
//             "@type": "SearchAction",
//             "target": "https://sunpeak.com.ng/collection?q={search_term_string}",
//             "query-input": "required name=search_term_string"
//           },
//           "description": "Leading solar services provider in Benin, Nigeria offering solar installation, products, training and instant cost estimates",
//           "inLanguage": "en-NG"
//         })}
//       </script>
      
//       <a 
//         href="#main-content" 
//         className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:bg-[var(--primary-neon)] focus:text-black focus:p-4 focus:z-50"
//       >
//         Skip to main content
//       </a>
      
//       <ToastContainer 
//         position="top-center"
//         toastClassName="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl backdrop-blur-sm"
//         bodyClassName="text-[var(--text)]"
//         progressClassName="bg-[var(--primary-neon)]"
//       />
      
//       <Navbar />
      
//       <main id="main-content" className="flex-1">
//         <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
//           <SearchBar />
          
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route 
//               path="/solarpackages" 
//               element={
//                 <div itemScope itemType="https://schema.org/OfferCatalog">
//                   <SolarPackagesPage />
//                 </div>
//               } 
//             />
//             <Route 
//               path="/solarcalculator" 
//               element={
//                 <div itemScope itemType="https://schema.org/WebApplication">
//                   <SolarCalculatorPage />
//                 </div>
//               } 
//             />
//             <Route 
//               path="/training" 
//               element={
//                 <div itemScope itemType="https://schema.org/EducationEvent">
//                   <TrainingPrograms />
//                 </div>
//               } 
//             />
//             <Route 
//               path="/about" 
//               element={
//                 <div itemScope itemType="https://schema.org/AboutPage">
//                   <About />
//                 </div>
//               } 
//             />
//             <Route 
//               path="/contact" 
//               element={
//                 <div itemScope itemType="https://schema.org/ContactPage">
//                   <Contact />
//                 </div>
//               } 
//             />
//             <Route path="/player/:playerId" element={<Player />} />
//             <Route 
//               path="/services" 
//               element={
//                 <div itemScope itemType="https://schema.org/Service">
//                   <Services />
//                 </div>
//               } 
//             />
//             <Route 
//               path="/collection" 
//               element={
//                 <div itemScope itemType="https://schema.org/ItemList">
//                   <Collection />
//                 </div>
//               } 
//             />
//             <Route 
//               path="/product/:productId" 
//               element={
//                 <div itemScope itemType="https://schema.org/Product">
//                   <Product />
//                 </div>
//               } 
//             />
//           </Routes>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default App;
