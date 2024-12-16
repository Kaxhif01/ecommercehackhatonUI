import React from 'react'

function Arrivals () {
    
        return (
          <section className="bg-[#FFF9E5] py-16 px-4">
            <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-8">
              {/* Left Flex: Image */}
              <div className="flex-1 md:w-7/10 mb-8 md:mb-0">
                <img
                  src="./images/arrivals.png" // Image Path
                  alt="New Arrivals"
                  className="w-full h-auto object-cover " // Ensures the image covers the area
                />
              </div>
      
              {/* Right Flex: Content */}
              <div className="flex-1 md:w-3/10 text-center md:text-center">
                <h2 className="text-xl font-poppins font-medium text-[#000000]">
                  New Arrivals
                </h2>
      
                <h3 className="text-4xl font-poppins font-bold text-[#000000] my-4">
                  Asgaard sofa
                </h3>
      
                <button className="mt-4 text-lg text-black font-poppins font-normal border border-black py-2 px-6 hover:bg-gray-100">
                  Order Now
                </button>
              </div>
            </div>
          </section>
        );
      }
    

export default Arrivals;
