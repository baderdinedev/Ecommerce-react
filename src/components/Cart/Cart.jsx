// Cart.jsx
import React from 'react';

const Cart = ({ isCartOpen, closeCart, cartCount }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
        isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={closeCart}
    >
      <div
        className={`fixed top-16 right-0 bg-white dark:bg-gray-800 p-6 w-80 h-full shadow-lg transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <button onClick={closeCart} className="text-gray-600 dark:text-gray-400">
            <span className="text-2xl">&times;</span>
          </button>
        </div>

        {/* Cart Items */}
        <div>
          <p>{cartCount} items in your cart</p>
          {/* Add cart item listing here later */}
        </div>
      </div>
    </div>
  );
};

export default Cart;
