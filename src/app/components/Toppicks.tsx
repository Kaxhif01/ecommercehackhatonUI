"use client"
import React, { useState } from "react";

interface Product {
  image: string;
  title: string;
  price: string;
}

interface TopPicksProps {
  heading: string;
}

const TopPicks: React.FC<TopPicksProps> = ({ heading }) => {
  // State to handle the visibility of more products
  const [showMoreProducts, setShowMoreProducts] = useState(false);

  // Function to toggle the visibility of the additional products
  const handleViewAllClick = () => {
    setShowMoreProducts(!showMoreProducts);
  };

  // Initial product data (for the first 4 products)
  const initialProducts: Product[] = [
    { image: "/images/top1.png", title: "Trenton modular sofa_1", price: "Rs. 25,000.00" },
    { image: "/images/top2.png", title: "Trenton modular sofa_2", price: "Rs. 28,000.00" },
    { image: "/images/top3.png", title: "Trenton modular sofa_3", price: "Rs. 14,000.00" },
    { image: "/images/top3.png", title: "Trenton modular sofa_4", price: "Rs. 15,000.00" },
  ];

  // Additional product data (for the 4 more products)
  const additionalProducts: Product[] = [
    { image: "/images/top1.png", title: "Trenton modular sofa_5", price: "Rs. 13,000.00" },
    { image: "/images/top2.png", title: "Trenton modular sofa_6", price: "Rs. 20,000.00" },
    { image: "/images/top3.png", title: "Trenton modular sofa_7", price: "Rs. 29,000.00" },
    { image: "/images/top3.png", title: "Trenton modular sofa_8", price: "Rs. 25,000.00" },
  ];

  // Combine the products into one list
  const displayedProducts = showMoreProducts ? [...initialProducts, ...additionalProducts] : initialProducts;

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-poppins text-black font-medium mb-4">{heading}</h2>

        {/* Paragraph */}
        <p className="text-sm text-[#9F9F9F] font-poppins mx-auto max-w-2xl text-center mb-8 sm:max-w-full sm:px-4 lg:px-0 leading-relaxed xs:px-6">
  Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
</p>


        

      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Mapping through the products */}
          {displayedProducts.map((product, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={product.image}
                alt={product.title}
                className="mb-4 max-w-full"
              />
              <h3 className="text-lg font-poppins text-black font-normal mb-2">
                {product.title}
              </h3>
              <p className="text-xl font-poppins text-black font-medium">
                {product.price}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        {/* View All Button */}
        <button
          onClick={handleViewAllClick}
          className="mt-4 text-lg text-black font-semibold border-b-2 border-black hover:border-red-500 hover:text-red-500"
        >
          {showMoreProducts ? "View Less" : "View All"}
        </button>
      </div>
    </section>
  );
};

export default TopPicks;



// import React from "react";

// interface TopPicksProps {
//   heading: string; 
// }

// const TopPicks: React.FC<TopPicksProps> = ({ heading }) => {
//     return (
//       <section className="bg-white py-16">
//         <div className="container mx-auto px-4 text-center">
          
//           <h2 className="text-3xl font-poppins text-black font-medium mb-4">
//             {heading}
//           </h2>
  
//           {/* Paragraph */}
//           <p className="text-sm text-[#9F9F9F] font-poppins mx-auto max-w-2xl mb-8">
//             Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
//           </p>
//         </div>
  
//         {/* Product Grid */}
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//             {/* Product 1 */}
//             <div className="flex flex-col items-center text-center">
//               <img
//                 src="/images/top1.png" // Replace with your actual image path
//                 alt="Trenton modular sofa_3"
//                 className="mb-4 max-w-full"
//               />
//               <h3 className="text-lg font-poppins text-black font-normal mb-2">
//                 Trenton modular sofa_3
//               </h3>
//               <p className="text-xl font-poppins text-black font-medium">
//                 Rs. 25,000.00
//               </p>
//             </div>
  
//             {/* Product 2 */}
//             <div className="flex flex-col items-center text-center">
//               <img
//                 src="/images/top2.png" // Replace with your actual image path
//                 alt="Trenton modular sofa_3"
//                 className="mb-4 max-w-full"
//               />
//               <h3 className="text-lg font-poppins text-black font-normal mb-2">
//                 Trenton modular sofa_3
//               </h3>
//               <p className="text-xl font-poppins text-black font-medium">
//                 Rs. 25,000.00
//               </p>
//             </div>
  
//             {/* Product 3 */}
//             <div className="flex flex-col items-center text-center">
//               <img
//                 src="/images/top3.png" // Replace with your actual image path
//                 alt="Trenton modular sofa_3"
//                 className="mb-4 max-w-full"
//               />
//               <h3 className="text-lg font-poppins text-black font-normal mb-2">
//                 Trenton modular sofa_3
//               </h3>
//               <p className="text-xl font-poppins text-black font-medium">
//                 Rs. 25,000.00
//               </p>
//             </div>
  
//             {/* Product 4 */}
//             <div className="flex flex-col items-center text-center ">
//               <img
//                 src="/images/top3.png" // Replace with your actual image path
//                 alt="Trenton modular sofa_3"
//                 className="mb-4 max-w-full"
//               />
//               <h3 className="text-lg font-poppins text-black font-normal mb-2">
//                 Trenton modular sofa_3
//               </h3>
//               <p className="text-xl font-poppins text-black font-medium">
//                 Rs. 25,000.00
//               </p>
//             </div>
//           </div>
//         </div>
  
//         <div className="text-center mt-8">
//           {/* Heading */}
//           <button className="mt-4 text-lg text-black font-semibold border-b-2 border-black hover:border-red-500 hover:text-red-500">
//    View All
//   </button>
//           </div>
//       </section>
//     );
//   }
  
//   export default TopPicks;
  