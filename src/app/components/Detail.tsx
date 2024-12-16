import React from "react";

function Detail() {
  return (
    <section className="bg-[#FAF4F4] mt-0 py-8 md:py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:space-x-8 space-y-4 md:space-y-0">
        
        {/* Left Side */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left px-4">
          {/* Image on top for mobile and left aligned for desktop */}
          <div className="flex justify-center md:justify-start mb-0 md:mb-0">
            <img
              src="./images/hero01.png" // Left Image
              alt="Left Image"
              className="max-w-xs md:max-w-md mx-auto md:ml-0"
            />
          </div>
          {/* Content below the image */}
          <h2 className="text-3xl font-semibold text-[#000000] mb-1">Side Table</h2>
          <button className="text-lg text-black font-semibold border-b-2 border-black hover:border-red-500 hover:text-red-500">
            View More
          </button>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left px-4 mt-4 md:mt-0">
          {/* Image on top for mobile and left aligned for desktop */}
          <div className="flex justify-center md:justify-start mb-0 md:mb-0">
            <img
              src="./images/hero02.png" // Right Image
              alt="Right Image"
              className="max-w-xs md:max-w-md mx-auto md:mr-0"
            />
          </div>
          {/* Content below the image */}
          <h2 className="text-3xl font-semibold text-[#000000] mb-1">Side Table</h2>
          <button className="text-lg text-black font-semibold border-b-2 border-black hover:border-red-500 hover:text-red-500">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Detail;











// import React from "react";
 
// function Detail() {
//    return (
//      <section className="bg-[#FAF4F4] mt-0 py-16">
//        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:space-x-8">
         
//          {/* Left Side */}
//          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left px-4">
//            {/* Image on the top on mobile and left aligned on desktop */}
//            <div className="flex justify-center md:justify-start mb-2">
//              <img
//                src="./images/hero01.png" // Left Image
//                alt="Left Image"
//                className="max-w-xs md:max-w-md mx-auto md:ml-0"
//              />
//            </div>
//            {/* Content directly below the image with minimal space */}
//            <h2 className="text-3xl font-semibold text-[#000000] mb-2">Side Table</h2>
//            <button className="text-lg text-black font-semibold border-b-2 border-black hover:border-red-500 hover:text-red-500">
//              View More
//            </button>
//          </div>
 
//          {/* Right Side */}
//          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left px-4 mt-8 md:mt-0">
//            {/* Image on the top on mobile and left aligned on desktop */}
//            <div className="flex justify-center md:justify-start mb-2">
//              <img
//                src="./images/hero02.png" // Right Image
//                alt="Right Image"
//                className="max-w-xs md:max-w-md mx-auto md:mr-0"
//              />
//            </div>
//            {/* Content directly below the image with minimal space */}
//            <h2 className="text-3xl font-semibold text-[#000000] mb-2">Side Table</h2>
//            <button className="text-lg text-black font-semibold border-b-2 border-black hover:border-red-500 hover:text-red-500">
//              View More
//            </button>
//          </div>
//        </div>
//      </section>
//    );
//  }
 

//  export default Detail