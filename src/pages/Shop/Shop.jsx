import React, { useState } from 'react';
import { FiFilter, FiX } from 'react-icons/fi';
import Products from '../../components/Products/Products';
import productData from '../../data/products.json'; 
import assets from '../../assets/assets';

const Shop = ({ addToCart }) => { // Receive addToCart as a prop
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const mappedProductData = productData.map(product => ({
    ...product,
    image: assets.products[product.image] || product.image,
  }));

  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

  const handlePriceChange = (e) => {
    setPriceRange([0, parseInt(e.target.value)]);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white relative">
      <div className="container py-6">
        <h1 className="text-3xl font-bold mb-6">Shop</h1>

        {/* Filter Toggle */}
        <button
          onClick={toggleFilter}
          className="fixed top-4 right-4 p-3 rounded-full shadow-lg bg-primary dark:bg-gray-800 text-white hover:bg-primary-dark dark:hover:bg-gray-700 transition"
          aria-label="Toggle Filters"
        >
          {isFilterOpen ? <FiX size={24} /> : <FiFilter size={24} />}
        </button>

        {/* Filter Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full bg-white dark:bg-gray-800 shadow-lg z-50 transform ${
            isFilterOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out w-80 p-6`}
        >
          <h2 className="text-xl font-semibold mb-6">Filters</h2>

          {/* Price Range Filter */}
          <div>
            <label htmlFor="price" className="block mb-2 font-medium">Price Range</label>
            <div className="flex items-center space-x-4">
              <span className="text-sm">${priceRange[0]}</span>
              <input
                id="price"
                type="range"
                min="0"
                max="1000"
                value={priceRange[1]}
                onChange={handlePriceChange}
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-sm">${priceRange[1]}</span>
            </div>
            <div className="relative mt-4">
              <div
                className="absolute bg-primary h-2 rounded-lg"
                style={{
                  left: `${(priceRange[0] / 1000) * 100}%`,
                  width: `${((priceRange[1] - priceRange[0]) / 1000) * 100}%`,
                }}
              ></div>
              <div
                className="absolute w-4 h-4 bg-primary rounded-full -top-1 transform translate-x-[-50%]"
                style={{ left: `${(priceRange[1] / 1000) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Overlay for Filter Toggle */}
        {isFilterOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleFilter}
          ></div>
        )}

        {/* Products Section */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Products</h2>
          {/* Add Products Grid */}
          <Products products={mappedProductData} addToCart={addToCart} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
