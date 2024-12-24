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
import Smartwatch from './assets/product/p-1.jpg';
import WirelessMouse from './assets/product/p-2.jpg';
import GamingLaptop from './assets/product/p-3.jpg';
import PortableCharger from './assets/product/p-4.jpg';
import BluetoothSpeaker from './assets/product/p-5.jpg';
import SmartWatch from './assets/product/p-7.jpg';
import Earbuds from './assets/product/p-9.jpg';
import Services2 from './components/Services/Service2';
import Blog from './components/Blog/Blog';
import Blog1 from "./assets/blogs/blog-1.jpg";
import Blog2 from "./assets/blogs/blog-2.jpg";
import Blog3 from "./assets/blogs/blog-3.jpg";
import Footer from './components/Footer/Footer';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");  
  };

  const productData = [
    { image: Smartwatch, name: 'Boat Headphone', price: 120 },
    { image: WirelessMouse, name: 'Wireless Mouse', price: 150 },
    { image: GamingLaptop, name: 'Gaming Laptop', price: 800 },
    { image: PortableCharger, name: 'Portable Charger', price: 60 },
    { image: BluetoothSpeaker, name: 'Bluetooth Speaker', price: 100 },
    { image: SmartWatch, name: 'Smart Watch', price: 280 },
    { image: Earbuds, name: 'Earbuds', price: 70 }
  ];
  
  const blogData = [
    {
      image: Blog1,
      title: 'How to choose perfect smartwatch',
      date: 'Jan 20, 2024',
      author: 'Dilshad',
      excerpt: 'minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?'
    },
    {
      image: Blog2,
      title: 'How to choose perfect gadget',
      date: 'Jan 20, 2024',
      author: 'Satya',
      excerpt: 'minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?'
    },
    {
      image: Blog3,
      title: 'How to choose perfect VR headset',
      date: 'Jan 20, 2024',
      author: 'Sabir',
      excerpt: 'minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?'
    }
  ];

  

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

     <Products products={productData} />
     <Services2 />
     <SectionHeader 
      title="Recent News" 
      subtitle="Explore Our Blogs" 
     />

    <Blog blogs={blogData} />
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
