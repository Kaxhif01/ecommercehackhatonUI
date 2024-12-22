"use client";

import React, { useState } from "react";
import Filter from "../components/filter";
import Banner from "../components/banner";
import Feature from "../components/Feature";
import { products } from "../data/products";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

const ITEMS_PER_PAGE = 16; // Number of products to display per page

const Shoppage = () => {
  const router = useRouter(); // Initialize the router for navigation

  const [currentPage, setCurrentPage] = useState(1); // State to track the current page

  const handleProductClick = (id: number) => {
    router.push(`/Shoppage/product/${id}`); // Navigate to the dynamic product route
  };

  // Calculate the index of the first product for the current page
  const indexOfLastProduct = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - ITEMS_PER_PAGE;

  // Slice the products array to get only the products for the current page
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Calculate total number of pages
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  // Handle page number click
  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber); // Update current page
  };

  // Handle Next button click
  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1); // Move to the next page
    }
  };

  // Handle Previous button click
  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1); // Move to the previous page
    }
  };

  return (
    <div>
      <Banner pageTitle="Shop" breadcrumb={["Home", "Shop"]} />
      <Filter />

      <div className="container bg-[#FFFFFF] mx-auto px-4 py-8">
        {/* Product Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Dynamically render current products */}
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center text-center cursor-pointer"
              onClick={() => handleProductClick(product.id)} // Trigger navigation on click
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="mb-4 max-w-full"
              />

              <h3 className="text-lg font-poppins text-black font-normal mb-2">
                {product.name}
              </h3>
              <p className="text-xl font-poppins text-black font-medium">
                {product.price}
              </p>
            </div>
          ))}
        </div>

        {/* Pagination Section */}
        <div className="flex flex-wrap justify-center mt-12 space-x-2 sm:space-x-4">
          {/* Previous Button */}
          <button
            onClick={handlePrevClick}
            className={`px-3 py-1 sm:px-4 sm:py-2 rounded ${
              currentPage === 1
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-[#FFF9E5] text-[#000000] cursor-pointer"
            }`}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {/* Dynamically render page numbers */}
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageClick(pageNumber)}
                className={`px-3 py-1 sm:px-4 sm:py-2 rounded ${
                  currentPage === pageNumber
                    ? "bg-[#000000] text-[#FFF9E5]" // Active page styling
                    : "bg-[#FFF9E5] text-[#000000]"
                }`}
              >
                {pageNumber}
              </button>
            )
          )}

          {/* Next Button */}
          <button
            onClick={handleNextClick}
            className={`px-3 py-1 sm:px-4 sm:py-2 rounded ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-[#FFF9E5] text-[#000000] cursor-pointer"
            }`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

      <Feature />
    </div>
  );
};

export default Shoppage;
