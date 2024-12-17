"use client";
import { products } from "@/app/data/products"; // Correct path to product data
import Image from "next/image";
import Link from "next/link";
import { SetStateAction, useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter} from "react-icons/fa";

import TopPicks from "@/app/components/Toppicks";



interface ProductPageProps {
  params: { id: string };
}

const ProductDetail = ({ params }: ProductPageProps) => {
  const { id } = params;

  const product = products.find((p) => p.id.toString() === id);
  const [quantity, setQuantity] = useState(1);


  const handleQuantityChange = (type: "increase" | "decrease") => {
    setQuantity((prev) => (type === "increase" ? prev + 1 : Math.max(prev - 1, 1)));
  };

  // Ratings stars logic
  const fullStars = Math.floor(product.rating);
  const partialStars = Math.round((product.rating - fullStars) * 2);
  const emptyStars = 5 - fullStars - (partialStars ? 1 : 0);

  const stars = [
    ...Array(fullStars).fill("full"),
    ...Array(partialStars).fill("partial"),
    ...Array(emptyStars).fill("empty"),
  ];


  const handleTabClick = (tab: SetStateAction<string>) => {
    setActiveTab(tab);
  };

  if (!product) {
    return <p className="text-center text-gray-600">Product not found</p>;
  }


  return (
    <>

    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="text-gray-600 mb-6">
        <Link href="/" className="hover:underline">Home</Link> {" > "}
        <Link href="/Shoppage" className="hover:underline">Shop</Link> {" > "}
        <span className="text-blue-600">{product.name}</span>
      </nav>

      {/* Product Section */}
      <div className="flex gap-8">
        {/* Left Section: Images */}
        <div className="flex w-1/2 gap-4">
          {/* Thumbnails */}
          <div className="flex flex-col gap-2">
            {product.additionalImages?.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                width={70}
                height={70}
                className="cursor-pointer border rounded"
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 bg-gray-100 flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.altText}
              width={500}
              height={500}
              className="object-cover rounded"
            />
          </div>
        </div>

        {/* Right Section: Content */}
        <div className="w-1/2 space-y-4">
         {/* Right Section: Content */}
<div className="flex-1 flex flex-col gap-6">
  {/* Product Name */}
  <h1 className="text-3xl font-semibold">{product.name}</h1>

  {/* Price */}
  <p className="text-2xl font-bold text-gray-700">{product.price}</p>

  {/* Ratings and Reviews */}
  <div className="flex items-center gap-2 text-gray-700">
    {/* Rating Stars */}
    <div className="flex">
      {stars.map((star, index) => (
        <span
          key={index}
          className={`text-${star === "full" ? "yellow-500" : star === "partial" ? "yellow-300" : "gray-300"}`}
        >
          ★
        </span>
      ))}
    </div>

    {/* Separator */}
    <span className="text-gray-400">|</span>

    {/* Customer Reviews */}
    <span className="text-sm">{product.reviews} Customer Reviews</span>
  </div>

    {/* Description */}
    <p className="text-gray-600 mb-4">{product.description}</p>

  {/* Sizes */}
  <div>
    <h3 className="text-lg font-medium mb-2">Size:</h3>
    <div className="flex gap-2">
      {product.sizes.map((size, index) => (
        <button
          key={index}
          className="px-4 py-2 border rounded hover:bg-gray-100"
        >
          {size}
        </button>
      ))}
    </div>
  </div>

  {/* Colors */}
  <div>
    <h3 className="text-lg font-medium mb-2">Color:</h3>
    <div className="flex gap-2">
      {product.colors.map((color, index) => (
        <div
          key={index}
          className="w-8 h-8 rounded-full border cursor-pointer"
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>
  </div>

  {/* Quantity Selector and Add to Cart */}
  {/* Quantity Selector and Add to Cart */}
<div className="flex items-center gap-4">
  {/* Quantity */}
  <div className="flex items-center">
    <button
      className="border px-4 py-2 bg-gray-200 hover:bg-gray-300 text-lg font-bold"
      onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
    >
      -
    </button>
    <span
      className="w-12 px-0 py-2 border-t border-b border-gray-300 text-center"
      style={{ minWidth: "3rem" }} // Fixed width to prevent shifting
    >
      {quantity}
    </span>
    <button
      className="border px-4 py-2 bg-gray-200 hover:bg-gray-300 text-lg font-bold"
      onClick={() => setQuantity((prev) => prev + 1)}
    >
      +
    </button>
  </div>

  {/* Add to Cart */}
  <button className="px-6 py-2 bg-transparent text-[#000000] border-2 border-[#000000] rounded hover:bg-blue-700">
    Add to Cart
  </button>
</div>











   
  {/* Divider */}
  <div className="border-t border-gray-300"> </div>

  {/* SKU */}
  <div className="text-gray-600 text-sm space-y-4">
    <p>SKU: {product.SKU}</p>
    <p>Category: {product.category}</p>
    <p>Tags: {product.tags?.join(", ")}</p>
   
    <div className="flex items-center space-x-2">
  <span>Share:</span>
  <FaFacebook />
  <FaLinkedin />
  <FaTwitter />
</div>

    




   

  </div>
</div>

        </div>
      </div>
    </div>



    <div className="border-t border-gray-300"> </div>


      {/* New Tab Section */}

      <div className="mt-16 relative">
  {/* Tab Headings - Centered */}
  <div className="flex justify-center gap-8 pb-2">
    <button
      className={`text-gray-700 font-medium hover:text-blue-600 py-2 px-4 rounded-full transition-all duration-300 ${
        activeTab === 'description' ? 'bg-gray-700 text-white' : ''
      }`}
      onClick={() => handleTabClick('description')}
    >
      Description
    </button>
    <button
      className={`text-gray-700 font-medium hover:text-blue-600 py-2 px-4 rounded-full transition-all duration-300 ${
        activeTab === 'additionalInfo' ? 'bg-gray-700 text-white' : ''
      }`}
      onClick={() => handleTabClick('additionalInfo')}
    >
      Additional Information
    </button>
    <button
      className={`text-gray-700 font-medium hover:text-blue-600 py-2 px-4 rounded-full transition-all duration-300 ${
        activeTab === 'reviews' ? 'bg-gray-700 text-white' : ''
      }`}
      onClick={() => handleTabClick('reviews')}
    >
      Reviews
    </button>
  </div>

  {/* Tab Content */}
  <div className="mt-8 relative">
    {activeTab === 'description' && (
      <>
        {/* Render Long Description Content - Centered */}
        {Array.isArray(product.details.longDescription) &&
        product.details.longDescription.length > 0 ? (
          product.details.longDescription.map((para, index) => (
            <p
              key={index}
              className="text-gray-600 text-center mb-8 mx-auto max-w-3xl"
            >
              {para}
            </p>
          ))
        ) : (
          <p className="text-gray-600 text-center mb-8 mx-auto max-w-3xl">
            No description available.
          </p>
        )}
      </>
    )}

    {activeTab === 'additionalInfo' && (
      <>
        {/* Additional Info Content - Centered */}
        <p className="text-gray-600 text-center mb-8 mx-auto max-w-3xl">
          {product.details.additionalInfo ||
            'No additional information available.'}
        </p>
      </>
    )}

    {activeTab === 'reviews' && (
      <>
        {/* Reviews Content - Centered */}
        <div className="text-gray-600 text-center mb-8 mx-auto max-w-3xl">
          {product.details.reviews.length > 0 ? (
            product.details.reviews.map((review, index) => (
              <div key={index} className="mb-4">
                <p>
                  <strong>{review.reviewer}:</strong> {review.comment}
                </p>
              </div>
            ))
          ) : (
            <p>No reviews available.</p>
          )}
        </div>
      </>
    )}
  </div>

  {/* Images Section - Always Positioned Below Content */}
  <div className="mt-16">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {product.details.tabImages?.map((img, index) => (
        <div key={index} className="bg-gray-100 p-4">
          <Image
            src={img}
            alt={`Tab image ${index + 1}`}
            width={400}
            height={300}
            className="object-cover w-full h-auto"
          />
        </div>
      ))}
    </div>
  </div>
</div>



 






    




      



      
<TopPicks heading="Related Products" />


    </>

      );
    };
  

export default ProductDetail;

























// // /app/product/[id]/page.tsx
// import { products } from "@/app/data/products"; // Correct path to product data
// import Image from "next/image";
// import Link from "next/link";

// interface ProductPageProps {
//   params: { id: string }; // Dynamic route parameter
// }

// const ProductDetail = ({ params }: ProductPageProps) => {
//   const { id } = params; // Extract product ID

//   // Find the product from the data array
//   const product = products.find((p) => p.id.toString() === id);

//   if (!product) {
//     return <p className="text-center text-gray-600">Product not found</p>;
//   }

//   // Calculate the star ratings
//   const fullStars = Math.floor(product.rating);
//   const partialStars = Math.round((product.rating - fullStars) * 2);
//   const emptyStars = 5 - fullStars - (partialStars ? 1 : 0);

//   const stars = [
//     ...Array(fullStars).fill("full"),
//     ...Array(partialStars).fill("partial"),
//     ...Array(emptyStars).fill("empty"),
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8">
//       {/* Breadcrumb Navigation */}
//       <nav className="text-gray-600 mb-4">
//         <Link href="/">Home</Link> {" > "}
//         <Link href="/Shoppage">Shop</Link> {" > "}
//         <span className="text-blue-600">{product.name}</span>
//       </nav>

//       {/* Product Section */}
//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* Left Section: Images */}
//         <div className="flex-1">
//           {/* Main Image */}
//           <div className="bg-gray-100 p-4">
//             <Image
//               src={product.image}
//               alt={product.altText}
//               width={500}
//               height={500}
//               className="object-cover w-full h-auto"
//             />
//           </div>

//           {/* Thumbnails */}
//           <div className="flex gap-4 mt-4">
//             {product.additionalImages?.map((img, index) => (
//               <div key={index} className="bg-gray-100 p-2">
//                 <Image
//                   src={img}
//                   alt={`Thumbnail ${index + 1}`}
//                   width={100}
//                   height={100}
//                   className="object-cover w-full h-auto cursor-pointer"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Section: Content */}
//         <div className="flex-1">
//           <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>
//           <div className="flex items-center gap-4 mb-2">
//             <p className="text-lg font-bold text-gray-700">{product.price}</p>

//             {/* Ratings with Stars */}
//             <div className="flex items-center gap-1">
//               {stars.map((star, index) => (
//                 <span
//                   key={index}
//                   className={`text-$
//                     {star === "full" ? "yellow-500" :
//                      star === "partial" ? "yellow-300" : "gray-300"}
//                   `}
//                 >
//                   ★
//                 </span>
//               ))}
//               <span className="text-sm text-gray-500 ml-2">
//                 ({product.reviews} Customer Reviews)
//               </span>
//             </div>
//           </div>

//           {/* Description */}
//           <p className="text-gray-600 mb-4">{product.description}</p>

//           {/* Size Options */}
//           <div className="mb-4">
//             <h3 className="text-lg font-medium mb-2">Size:</h3>
//             <div className="flex gap-2">
//               {product.sizes.map((size, index) => (
//                 <button
//                   key={index}
//                   className="px-4 py-2 border rounded hover:bg-gray-100"
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Color Options */}
//           <div className="mb-4">
//             <h3 className="text-lg font-medium mb-2">Color:</h3>
//             <div className="flex gap-2">
//               {product.colors.map((color, index) => (
//                 <div
//                   key={index}
//                   className="w-8 h-8 rounded-full border cursor-pointer"
//                   style={{ backgroundColor: color }}
//                 ></div>
//               ))}
//             </div>
//           </div>

//           {/* Quantity and Add to Cart */}
//           <div className="flex items-center gap-4 mb-4">
//             <input
//               type="number"
//               min="1"
//               defaultValue="1"
//               className="w-16 px-2 py-2 border rounded"
//             />
//             <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
//               Add to Cart
//             </button>
//           </div>

//           {/* Divider */}
//           <hr className="my-4" />

//           {/* Additional Info */}
//           <div className="text-gray-500">
//             <p>SKU: 12345</p>
//             <p className="mt-2">Category: Sofa</p>
//             <p className="mt-2">Tags: Furniture, Sofa, Home</p>
//           </div>

//           {/* Social Icons */}
//           <div className="flex gap-4 mt-4">
//             {product.socialIcons.map((icon, index) => (
//               <Image
//                 key={index}
//                 src={icon}
//                 alt="Social Icon"
//                 width={24}
//                 height={24}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
