import React from 'react';

function Feature() {
  return (
    <section className="bg-[#FAF4F4] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Left Part - Free Delivery */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-[#000000] text-2xl font-poppins font-semibold mb-4">
              Free Delivery
            </h3>
            <p className="text-[#9F9F9F] text-xl font-poppins font-normal ">
              For all orders over $50, consectetur adipim scing elit.
            </p>
          </div>

          {/* Middle Part - 90 Days Return */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-[#000000] text-2xl font-poppins font-semibold mb-4">
              90 Days Return
            </h3>
            <p className="text-[#9F9F9F] text-xl font-poppins font-normal">
              Return products within 90 days for a full refund, no questions asked.
            </p>
          </div>

          {/* Right Part - Secure Payments */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-[#000000] text-2xl font-poppins font-semibold mb-4">
              Secure Payments
            </h3>
            <p className="text-[#9F9F9F] text-xl font-poppins font-normal">
              Your data is protected by SSL encryption and secure checkout.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Feature;
