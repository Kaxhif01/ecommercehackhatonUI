"use client";
import { products } from "@/app/data/products"; // Correct path to product data
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import TopPicks from "@/app/components/Toppicks";

interface ProductPageProps {
  params: { id: string };
}

const ProductDetail = ({ params }: ProductPageProps) => {
  const { id } = params;

  const product = products.find((p) => p.id.toString() === id);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  if (!product) {
    return <p className="text-center text-gray-600">Product not found</p>;
  }

  const handleQuantityChange = (type: "increase" | "decrease") => {
    setQuantity((prev) => (type === "increase" ? prev + 1 : Math.max(prev - 1, 1)));
  };

  const handleTabClick = (tab: string) => setActiveTab(tab);

  const fullStars = Math.floor(product.rating);
  const partialStars = Math.round((product.rating - fullStars) * 2);
  const emptyStars = 5 - fullStars - (partialStars ? 1 : 0);

  const stars = [
    ...Array(fullStars).fill("full"),
    ...Array(partialStars).fill("partial"),
    ...Array(emptyStars).fill("empty"),
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="text-gray-600 mb-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        {">"}{" "}
        <Link href="/Shoppage" className="hover:underline">
          Shop
        </Link>{" "}
        {">"}{" "}
        <span className="text-blue-600">{product.name}</span>
      </nav>

      {/* Product Section */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section: Images */}
        <div className="flex flex-col w-full md:w-1/2 gap-4">
          <div className="flex gap-2">
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
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <p className="text-2xl font-bold text-gray-700">{product.price}</p>

          <div className="flex items-center gap-2 text-gray-700">
            <div className="flex">
              {stars.map((star, index) => (
                <span
                  key={index}
                  className={`text-${
                    star === "full"
                      ? "yellow-500"
                      : star === "partial"
                      ? "yellow-300"
                      : "gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-gray-400">|</span>
            <span className="text-sm">{product.reviews} Customer Reviews</span>
          </div>

          <p className="text-gray-600 mb-4">{product.description}</p>

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

          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <button
                className="border px-4 py-2 bg-gray-200 hover:bg-gray-300 text-lg font-bold"
                onClick={() => handleQuantityChange("decrease")}
              >
                -
              </button>
              <span className="w-12 px-0 py-2 border-t border-b border-gray-300 text-center">
                {quantity}
              </span>
              <button
                className="border px-4 py-2 bg-gray-200 hover:bg-gray-300 text-lg font-bold"
                onClick={() => handleQuantityChange("increase")}
              >
                +
              </button>
            </div>

            <button className="px-6 py-2 bg-transparent text-[#000000] border-2 border-[#000000] rounded hover:bg-blue-700">
              Add to Cart
            </button>
          </div>

          <div className="border-t border-gray-300"></div>
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

      <div className="border-t border-gray-300 my-2"></div>

      <div className="mt-16 ">
        <div className="flex  justify-center gap-8 pb-2  max-sm:flex flex-col">
          {[
            { label: "Description", key: "description" },
            { label: "Additional Information", key: "additionalInfo" },
            { label: "Reviews", key: "reviews" },
          ].map((tab) => (
            <button
              key={tab.key}
              className={`text-gray-700 font-medium hover:text-blue-600 py-2 px-4 rounded-full transition-all duration-300 ${
                activeTab === tab.key ? "bg-gray-700 text-white" : ""
              }`}
              onClick={() => handleTabClick(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-8">
          {activeTab === "description" && (
            <div className="text-gray-600 text-center mb-8 mx-auto max-w-3xl">
              {product.details.longDescription?.map((para, index) => (
                <p key={index}>{para}</p>
              )) || <p>No description available.</p>}
            </div>
          )}

          {activeTab === "additionalInfo" && (
            <p className="text-gray-600 text-center mb-8 mx-auto max-w-3xl">
              {product.details.additionalInfo || "No additional information available."}
            </p>
          )}

          {activeTab === "reviews" && (
            <div className="text-gray-600 text-center mb-8 mx-auto max-w-3xl">
              {product.details.reviews?.length > 0 ? (
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
          )}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
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

      <TopPicks heading="Related Products" />
    </div>
  );
};

export default ProductDetail;
