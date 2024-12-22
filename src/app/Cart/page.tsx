import React from 'react';
import Banner from '../components/banner';
import Feature from '../components/Feature';
const CartPage = () => {
  return (

    
    <div className="bg-white">

        

{/* Banner */}
<Banner pageTitle="Cart" breadcrumb={['Home', 'Cart']} />



      {/* Cart Page Container */}
      <div className="container mx-auto px-4 mt-8 mb-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section: Cart Items */}
        <div className="lg:col-span-2 bg-white p-4">
          {/* Header Row: Product, Type, Quantity, Subtotal */}
          <div className="flex justify-between text-lg font-poppins font-medium bg-[#FFF9E5] py-3 text-black mb-4">
            <div className="w-1/4 text-center max-sm:text-sm">Product</div>
            <div className="w-1/4 text-center max-sm:text-sm">Type</div>
            <div className="w-1/4 text-center max-sm:text-sm">Quantity</div>
            <div className="w-1/4 text-center max-sm:text-sm">Subtotal</div>
          </div>

          {/* Cart Item Details */}
          <div className="flex justify-between items-center mb-4 pt-8 o max-soverflow-x-scroll">
            {/* Product */}
            <div className="w-1/4 flex items-center justify-center">
              <img src="./images/Arrivals.png" alt="Asgaard sofa" className="w-16 h-16 mr-4" />
              <span className="text-black font-poppins font-medium max-sm:text-sm">Asgaard sofa</span>
            </div>

            {/* Price */}
            <div className="w-1/4 text-center">
              <span className="text-black font-poppins text-xl max-sm:text-sm">Rs. 250,000.00</span>
            </div>

            {/* Quantity */}
            <div className="w-1/4 ml-4 flex justify-center text-center max-sm:w-6">
              <div className="bg-white border border-gray-300 rounded-md w-12 py-1">
                <span className="text-black font-poppins">1</span>
              </div>
            </div>

            {/* Subtotal */}
            <div className="w-1/4 text-center">
              <span className="text-black font-poppins text-xl max-sm:text-sm">Rs. 250,000.00</span>
            </div>
          </div>
        </div>


        

        {/* Right Section: Cart Summary */}
        <div className="bg-[#FFF9E5] mx-auto p-6  rounded-md ">
  <div className="text-center text-3xl font-poppins font-semibold mb-6">Cart Totals</div>

  {/* Subtotal */}
  <div className="flex justify-between text-lg font-poppins text-black gap-6 mb-4 px-8">
    <span>Subtotal</span>
    <span>Rs. 250,000.00</span>
  </div>

  {/* Total */}
  <div className="flex justify-between text-xl font-poppins font-semibold text-black gap-6 mb-6 px-8">
    <span>Total</span>
    <span>Rs. 250,000.00</span>
  </div>

  {/* Checkout Button */}
  <div className="text-center">
    <button className="bg-transparent text-[#000000] border-2 border-black px-8 py-2 rounded-md inline-block">
      Checkout
    </button>
  </div>
</div>

      </div>
   

      <Feature />
      </div>
  );
};

export default CartPage;
