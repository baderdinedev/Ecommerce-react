import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import watch from '../../assets/hero/watch.png';

const Services2 = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('services2-section');
      const rect = element.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: 100 });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <div className="min-h-[550px] flex justify-center items-center py-12">
      <div className="container">
         <div
        id="services2-section"
        className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center rounded-3xl"
        style={{ backgroundColor: '#2dcc6f' }}
        >

          {/* Left Text Section */}
          <motion.div
            className="p-6 sm:p-8 text-white"
            animate={controls}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm">30% OFF</p>
            <h1 className="uppercase text-4xl lg:text-7xl font-bold">Fine Smile</h1>
            <p className="text-sm">10 Jan to 28 Jan</p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="h-full flex items-center"
            animate={controls}
            initial={{ scale: 1.2 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={watch}
              alt=""
              className="w-[250px] md:w-[340px] mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,.6)] object-cover"
            />
          </motion.div>

          {/* Right Text Section - Fixed position like the left */}
          <motion.div
            className="flex flex-col justify-center gap-4 p-6 sm:p-8 text-white"
            animate={controls}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-bold text-xl">Air Solo Bass</p>
            <p className="text-3xl sm:text-5xl font-bold">Winter Sale</p>
            <p className="text-sm tracking-wide leading-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis
            </p>
            <button
              className="bg-white py-2 px-4 rounded-full"
              style={{ color: '#2dcc6f' }}
            >
              Shop Now
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Services2;
