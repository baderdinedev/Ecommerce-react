import React from 'react';
import { motion } from 'framer-motion';

const Products = ({ products }) => {
  return (
    <div className="container">
      <div className="mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
          {products.map((product, index) => (
            <motion.div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="group aos-init aos-animate"
              initial={{ y: 50 }} 
              animate={{ y: 0 }}   
              transition={{ duration: 0.5, ease: "easeOut" }} 
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[180px] w-[260px] object-cover rounded-md"
                />
                <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md">
                  <button className="bg-primary text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10">
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="leading-7">
                <h2 className="font-semibold">{product.name}</h2>
                <h2 className="font-bold">${product.price}</h2>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
