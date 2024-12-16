import React from 'react';
import { FaRegClock, FaRegCalendarDays } from "react-icons/fa6";
import Link from 'next/link';

const Blogs = () => {
  return (
    <section className="bg-white py-16">
      {/* Heading and Paragraph */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-poppins font-medium text-black">Our Blogs</h2>
        <p className="mt-2 text-lg font-poppins text-gray-500">
          Find a bright ideal to suit your taste with our great selection
        </p>
      </div>

      {/* Grid Section for Blog Items */}
      <div className="container mx-auto px-6 sm:px-8">
        {/* Use Grid for responsive layout */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8">
          {/* Blog Item 1 */}
          <div className="flex flex-col items-center">
            {/* Image - Square shape */}
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="./images/blog1.png"
                alt="Blog 1"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* Content */}
            <h3 className="mt-4 text-lg font-poppins font-normal text-black">
              Going all-in with millennial design
            </h3>
            {/* Button */}
            <button className="mt-2 text-lg text-black font-medium border-b-2 border-black hover:border-red-500 hover:text-red-500">
              Read More
            </button>
            {/* Meta Info */}
            <div className="flex items-center mt-4 text-gray-500 space-x-6">
              {/* Time */}
              <div className="flex items-center space-x-2">
                <FaRegClock className="w-5 h-5 text-gray-500" />
                <span className="text-sm">5 min</span>
              </div>
              {/* Calendar */}
              <div className="flex items-center space-x-2">
                <FaRegCalendarDays className="w-5 h-5 text-gray-500" />
                <span className="text-sm">12th Oct 2022</span>
              </div>
            </div>
          </div>

          {/* Blog Item 2 */}
          <div className="flex flex-col items-center">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="./images/blog2.png"
                alt="Blog 2"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="mt-4 text-lg font-poppins font-normal text-black">
              Exploring modern furniture trends
            </h3>
            <button className="mt-2 text-lg text-black font-medium border-b-2 border-black hover:border-red-500 hover:text-red-500">
              Read More
            </button>
            <div className="flex items-center mt-4 text-gray-500 space-x-6">
              <div className="flex items-center space-x-2">
                <FaRegClock className="w-5 h-5 text-gray-500" />
                <span className="text-sm">5 min</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaRegCalendarDays className="w-5 h-5 text-gray-500" />
                <span className="text-sm">12th Oct 2022</span>
              </div>
            </div>
          </div>

          {/* Blog Item 3 */}
          <div className="flex flex-col items-center">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="./images/blog3.png"
                alt="Blog 3"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="mt-4 text-lg font-poppins font-normal text-black">
              Redefining space with smart decor
            </h3>
            <button className="mt-2 text-lg text-black font-medium border-b-2 border-black hover:border-red-500 hover:text-red-500">
              Read More
            </button>
            <div className="flex items-center mt-4 text-gray-500 space-x-6">
              <div className="flex items-center space-x-2">
                <FaRegClock className="w-5 h-5 text-gray-500" />
                <span className="text-sm">5 min</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaRegCalendarDays className="w-5 h-5 text-gray-500" />
                <span className="text-sm">12th Oct 2022</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* "View All" Button with Link */}
      <div className="text-center mt-8">
        <Link href="/Blog">
          <button className="mt-4 text-lg text-black font-semibold border-b-2 border-black hover:border-red-500 hover:text-red-500">
            View All Posts
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Blogs;








// import React from 'react'
// import { FaRegClock, FaRegCalendarDays } from "react-icons/fa6";

// const Blogs = () => {
    
  

   
//       return (
//         <section className="bg-white py-16">
//           {/* Heading and Paragraph */}
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-poppins font-medium text-black">Our Blogs</h2>
//             <p className="mt-2 text-lg font-poppins text-gray-500">
//               Find a bright ideal to suit your taste with our great selection
//             </p>
//           </div>
    
//           {/* Grid Section */}
//           <div className="container mx-auto px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//             {/* Blog Item 1 */}
//             <div className="flex flex-col items-center">
//               {/* Image */}
//               <div className="w-full h-56 bg-gray-100 rounded-lg overflow-hidden">
//                 <img
//                   src="./images/blog1.png"
//                   alt="Blog 1"
//                   className="w-full h-full object-cover rounded-lg"
//                 />
//               </div>
//               {/* Content */}
//               <h3 className="mt-4 text-lg font-poppins font-normal text-black">
//                 Going all-in with millennial design
//               </h3>
//               {/* Button */}
//               <button className="mt-2 text-lg text-black font-medium border-b-2 border-black hover:border-red-500 hover:text-red-500">
//                 Read More
//               </button>
//               {/* Meta Info */}
//               <div className="flex items-center mt-4 text-gray-500 space-x-6">
//                 {/* Time */}
//                 <div className="flex items-center space-x-2">
//                   <FaRegClock className="w-5 h-5 text-gray-500" />
//                   <span className="text-sm">5 min</span>
//                 </div>
//                 {/* Calendar */}
//                 <div className="flex items-center space-x-2">
//                   <FaRegCalendarDays className="w-5 h-5 text-gray-500" />
//                   <span className="text-sm">12th Oct 2022</span>
//                 </div>
//               </div>
//             </div>
    
//             {/* Blog Item 2 */}
//             <div className="flex flex-col items-center">
//               <div className="w-full h-56 bg-gray-100 rounded-lg overflow-hidden">
//                 <img
//                   src="./images/blog2.png"
//                   alt="Blog 2"
//                   className="w-full h-full object-cover rounded-lg"
//                 />
//               </div>
//               <h3 className="mt-4 text-lg font-poppins font-normal text-black">
//                 Exploring modern furniture trends
//               </h3>
//               <button className="mt-2 text-lg text-black font-medium border-b-2 border-black hover:border-red-500 hover:text-red-500">
//                 Read More
//               </button>
//               <div className="flex items-center mt-4 text-gray-500 space-x-6">
//                 <div className="flex items-center space-x-2">
//                   <FaRegClock  className="w-5 h-5 text-gray-500" />
//                   <span className="text-sm">5 min</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <FaRegCalendarDays className="w-5 h-5 text-gray-500" />
//                   <span className="text-sm">12th Oct 2022</span>
//                 </div>
//               </div>
//             </div>
    
//             {/* Blog Item 3 */}
//             <div className="flex flex-col items-center">
//               <div className="w-full h-56 bg-gray-100 rounded-lg overflow-hidden">
//                 <img
//                   src="./images/blog3.png"
//                   alt="Blog 3"
//                   className="w-full h-full object-cover rounded-lg"
//                 />
//               </div>
//               <h3 className="mt-4 text-lg font-poppins font-normal text-black">
//                 Redefining space with smart decor
//               </h3>
//               <button className="mt-2 text-lg text-black font-medium border-b-2 border-black hover:border-red-500 hover:text-red-500">
//                 Read More
//               </button>
//               <div className="flex items-center mt-4 text-gray-500 space-x-6">
//                 <div className="flex items-center space-x-2">
//                   <FaRegClock  className="w-5 h-5 text-gray-500" />
//                   <span className="text-sm">5 min</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <FaRegCalendarDays className="w-5 h-5 text-gray-500" />
//                   <span className="text-sm">12th Oct 2022</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="text-center mt-8">
//         {/* Heading */}
//         <button className="mt-4 text-lg text-black font-semibold border-b-2 border-black hover:border-red-500 hover:text-red-500">
//  View All Post
// </button>
//         </div>

//         </section>
//       );
//     }
    
      


// export default Blogs
