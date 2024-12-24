import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { FiSun, FiMoon } from "react-icons/fi";
import Hero from './components/Hero/Hero';
import Banner from './components/Banner/Banner';
import Category from './components/Category/Category';
import Category2 from './components/Category2/Category2';
import Services from './components/Services/Services';
import SectionHeader from './components/SectionHeader/SectionHeader';
import Products from './components/Products/Products';
import Services2 from './components/Services/Service2';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';

import productData from './data/products.json';  
import blogData from './data/blogs.json'; 
import assets from './assets/assets';  

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Map JSON data to include actual image imports
  const mappedProductData = productData.map(product => ({
    ...product,
    image: assets.products[product.image] || product.image
  }));

  const mappedBlogData = blogData.map(blog => ({
    ...blog,
    image: assets.blogs[blog.image] || blog.image
  }));

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <Navbar />
      <br />
      <Hero />
      <Banner />
      <Category />
      <Category2 />
      <Services />

      <SectionHeader
        title="Our Products"
        subtitle="Explore Our Products"
      />

      <Products products={mappedProductData} />
      <Services2 />

      <SectionHeader
        title="Recent News"
        subtitle="Explore Our Blogs"
      />

      <Blog blogs={mappedBlogData} />
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
  );
};

export default App;
