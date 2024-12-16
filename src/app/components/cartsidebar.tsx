"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface CartSidebarProps {
  isOpen: boolean; // Sidebar visibility
  onClose: () => void; // Function to close the sidebar
}

const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {

    const handleClose = () => {
        onClose(); // Call the parent close function
      };
  return (
    <>
      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleClose} // Close sidebar when clicking the background
        ></div>
      )}

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[400px] bg-white shadow-2xl z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="text-2xl hover:text-red-500"
            aria-label="Close Cart"
          >
            &times;
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 flex flex-col gap-6 overflow-y-auto h-[calc(100%-200px)]">
          {/* Single Cart Item */}
          <div className="flex items-center gap-4">
            <Image
              src="/images/thumbnail1.png" // Example image path
              alt="Cart Item"
              width={80}
              height={80}
              className="rounded-md"
            />
            <div className="flex-1">
              <h3 className="text-base font-medium text-gray-800">
                Asgaard Sofa
              </h3>
              <p className="text-sm text-gray-500">Qty: 1</p>
            </div>
            <p className="text-base font-medium text-gray-800">Rs. 25,000</p>
          </div>

          {/* Additional Items (Duplicate for more products) */}
          <div className="flex items-center gap-4">
            <Image
              src="/images/thumbnail2.png"
              alt="Cart Item"
              width={80}
              height={80}
              className="rounded-md"
            />
            <div className="flex-1">
              <h3 className="text-base font-medium text-gray-800">
                Asgaard Sofa
              </h3>
              <p className="text-sm text-gray-500">Qty: 1</p>
            </div>
            <p className="text-base font-medium text-gray-800">Rs. 25,000</p>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t"></div>

        {/* Footer */}
        <div className="p-4 flex flex-col gap-4">
          {/* Subtotal */}
          <div className="flex justify-between text-lg font-semibold">
            <span>Subtotal:</span>
            <span>Rs. 50,000</span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
          <div className="w-1/2">
            
          <Link href="/Cart">
   
      <button 
      className="w-full py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-100"
      onClick={handleClose}>
        View Cart
      </button>
   
    </Link>
    </div>
  

             <div className="w-1/2">
                <Link href="/Checkout">
                <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  onClick={handleClose}>
              Checkout
            </button>
                </Link>
             </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
