import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MackBook from '../../assets/category/macbook.png';
import Gaming from '../../assets/category/gaming.png';
import Smartwatch from '../../assets/category/smartwatch2-removebg-preview.png';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    adaptiveHeight: true,
    arrows: false, 
  };

  return (
    <div className='container'>
<div className='overflow-hidden bg-gradient-to-b from-gray-200 to-gray-100 dark:bg-gradient-to-b dark:from-gray-700 dark:to-gray-800 rounded-3xl min-h-[300px] hero-bg-color flex justify-center items-center'>
<div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {/* Slide 1 - MacBook */}
            <div className="overflow-hidden rounded-3xl min-h-[300px] hero-bg-color flex justify-center items-center">
              <div className="container pb-8 sm:pb-0">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration={500}
                      data-aos-once="true"
                      className="text-2xl sm:text-6xl lg:text-2xl font-bold aos-init aos-animate"
                    >
                      Beats Solo
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration={500}
                      data-aos-once="true"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold aos-init aos-animate"
                    >
                      Wireless
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration={500}
                      data-aos-once="true"
                      className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold aos-init aos-animate"
                    >
                      Mac
                    </h1>
                    <div
                      data-aos="fade-up"
                      data-aos-offset={0}
                      data-aos-duration={500}
                      data-aos-delay={300}
                      className="aos-init aos-animate"
                    >
                      <button className="bg-primary text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10">
                        Shop By Category
                      </button>
                    </div>
                  </div>
                  <div className="order-1 sm:order-2 flex justify-center">
                    <div
                      data-aos="zoom-in"
                      data-aos-once="true"
                      className="relative z-10 aos-init aos-animate"
                    >
                      <img
                        src={MackBook}
                        alt="MacBook"
                        className="w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40 ml-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 - Gaming */}
            <div className="overflow-hidden rounded-3xl min-h-[300px] hero-bg-color flex justify-center items-center">
              <div className="container pb-8 sm:pb-0">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration={500}
                      data-aos-once="true"
                      className="text-2xl sm:text-6xl lg:text-2xl font-bold aos-init aos-animate"
                    >
                      Gaming Console
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration={500}
                      data-aos-once="true"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold aos-init aos-animate"
                    >
                      Power Play
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration={500}
                      data-aos-once="true"
                      className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold aos-init aos-animate"
                    >
                      PS5
                    </h1>
                    <div
                      data-aos="fade-up"
                      data-aos-offset={0}
                      data-aos-duration={500}
                      data-aos-delay={300}
                      className="aos-init aos-animate"
                    >
                      <button className="bg-primary text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10">
                        Explore Gaming
                      </button>
                    </div>
                  </div>
                  <div className="order-1 sm:order-2 flex justify-center">
                    <div
                      data-aos="zoom-in"
                      data-aos-once="true"
                      className="relative z-10 aos-init aos-animate"
                    >
                      <img
                        src={Gaming}
                        alt="Gaming Console"
                        className="w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40 ml-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3 - Smartwatch */}
            <div className="overflow-hidden rounded-3xl min-h-[300px] hero-bg-color flex justify-center items-center">
              <div className="container pb-8 sm:pb-0">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration={500}
                      data-aos-once="true"
                      className="text-2xl sm:text-6xl lg:text-2xl font-bold aos-init aos-animate"
                    >
                      Smartwatch
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration={500}
                      data-aos-once="true"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold aos-init aos-animate"
                    >
                      Fitness Track
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration={500}
                      data-aos-once="true"
                      className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold aos-init aos-animate"
                    >
                      SW
                    </h1>
                    <div
                      data-aos="fade-up"
                      data-aos-offset={0}
                      data-aos-duration={500}
                      data-aos-delay={300}
                      className="aos-init aos-animate"
                    >
                      <button className="bg-primary text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10">
                        Discover Smartwear
                      </button>
                    </div>
                  </div>
                  <div className="order-1 sm:order-2 flex justify-center">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10 aos-init aos-animate"
                    >
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10 aos-init aos-animate"
                    >
                        <img
                        src={Smartwatch}
                        alt="Smartwatch"
                        className="w-[250px] sm:w-[450px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40 ml-4"
                        />
                    </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Hero;
