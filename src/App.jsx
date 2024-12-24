import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import { FiSun, FiMoon } from "react-icons/fi";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <Router>
      <div className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
        <Navbar cartCount={cartCount} />
        
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} />} />
        </Routes>
        
        <Footer />

        <div className="fixed bottom-4 right-4">
          <button
            onClick={toggleDarkMode}
            className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full shadow-lg transition-colors duration-300"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <FiSun className="text-xl text-yellow-500" /> : <FiMoon className="text-xl text-gray-600" />}
          </button>
        </div>
      </div>
    </Router>
  );
};

export default App;
