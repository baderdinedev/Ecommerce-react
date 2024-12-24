import React from 'react';
import Speaker from '../../assets/category/speaker.png';
import Vr from '../../assets/category/vr.png';
import gaming from '../../assets/category/gaming.png';

const Category = () => {
  return (
<div className="py-8">
  <div className="container">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end">
        <div>
          <div className="mb-4">
            <p className="mb-[2px] text-white">Enjoy</p>
            <p className="text-2xl font-semibold mb-[2px]">With</p>
            <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
              Laptop
            </p>
            <button className="bg-primary text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10">
              Browse
            </button>
          </div>
        </div>
        <img
          src={gaming}
          alt=""
          className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0"
        />
      </div>
      <div className="py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/90 text-white rounded-3xl relative h-[320px] flex items-start">
        <div>
          <div className="mb-4">
            <p className="mb-[2px] text-white">Enjoy</p>
            <p className="text-2xl font-semibold mb-[2px]">With</p>
            <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
              Earphone
            </p>
            <button className="bg-white text-brandGreen cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10">
              Browse
            </button>
          </div>
        </div>
        <img
          src={Vr}
          alt=""
          className="w-[320px] absolute bottom-0"
        />
      </div>
      <div className="py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex items-start">
        <div>
          <div className="mb-4">
            <p className="mb-[2px] text-white">Enjoy</p>
            <p className="text-2xl font-semibold mb-[2px]">With</p>
            <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
              Gadget
            </p>
            <button className="bg-white text-brandBlue cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10">
              Browse
            </button>
          </div>
        </div>
        <img
          src={Speaker}
          alt=""
          className="w-[200px] absolute bottom-0 right-0"
        />
      </div>
    </div>
  </div>
</div>

  );
}

export default Category;
