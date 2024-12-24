import React, { useState } from 'react';
import { FiSun, FiMoon } from "react-icons/fi";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex items-center justify-center">
      <button 
        onClick={toggleDarkMode} 
        className="p-2 rounded-full transition-colors duration-200 
                    dark:bg-gray-800 text-gray-800 dark:text-gray-200"
        aria-label="Toggle Dark Mode"
      >
        {isDarkMode ? (
          <FiSun className="text-xl" />  
        ) : (
          <FiMoon className="text-xl" />  
        )}
      </button>
    </div>
  );
};

export default DarkMode;
