import React from 'react';
import { FaHeadset, FaLock, FaMoneyCheckAlt, FaShippingFast } from 'react-icons/fa';

const Category2 = () => {
  return (
    <div>
      <div className="container my-14 md:my-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
          
          {/* Free Shipping */}
          <div className="flex flex-col items-start sm:flex-row gap-4">
            <FaShippingFast className="text-4xl md:text-5xl text-primary" />
            <div>
              <h1 className="lg:text-xl font-bold">Free Shipping</h1>
              <h1 className="text-gray-400 text-sm">Free Shipping On All Order</h1>
            </div>
          </div>

          {/* Safe Money */}
          <div className="flex flex-col items-start sm:flex-row gap-4">
            <FaMoneyCheckAlt className="text-4xl md:text-5xl text-primary" />
            <div>
              <h1 className="lg:text-xl font-bold">Safe Money</h1>
              <h1 className="text-gray-400 text-sm">30 Days Money Back</h1>
            </div>
          </div>

          {/* Secure Payment */}
          <div className="flex flex-col items-start sm:flex-row gap-4">
            <FaLock className="text-4xl md:text-5xl text-primary" />
            <div>
              <h1 className="lg:text-xl font-bold">Secure Payment</h1>
              <h1 className="text-gray-400 text-sm">All Payment Secure</h1>
            </div>
          </div>

          {/* Online Support */}
          <div className="flex flex-col items-start sm:flex-row gap-4">
            <FaHeadset className="text-4xl md:text-5xl text-primary" />
            <div>
              <h1 className="lg:text-xl font-bold">Online Support 24/7</h1>
              <h1 className="text-gray-400 text-sm">Technical Support 24/7</h1>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Category2;
