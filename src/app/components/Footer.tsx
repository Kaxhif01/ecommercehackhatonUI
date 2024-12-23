import React from "react";

function Footer() {
  return (
    <footer className="bg-[#FFFFFF] mt-2 py-8 px-10 md:px-32">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Part: Address */}
        <div className="flex justify-center items-center px-4">
          <p className="font-poppins text-[#9F9F9F] text-base md:text-lg text-center md:text-left">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>

        {/* Links Section */}
        <div className="px-4">
          <h3 className="font-poppins text-[#9F9F9F] text-lg font-medium mb-4">
            Links
          </h3>
          <ul className="space-y-4">
            <li>
              <a href="/" className="text-[#000000] hover:text-[#9F9F9F]">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="text-[#000000] hover:text-[#9F9F9F]">
                Shop
              </a>
            </li>
            <li>
              <a href="/" className="text-[#000000] hover:text-[#9F9F9F]">
                About
              </a>
            </li>
            <li>
              <a href="/" className="text-[#000000] hover:text-[#9F9F9F]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="px-4">
          <h3 className="font-poppins text-[#9F9F9F] text-lg font-medium mb-4">
            Help
          </h3>
          <ul className="space-y-4">
            <li>
              <a href="/" className="text-[#000000] hover:text-[#9F9F9F]">
                Payments
              </a>
            </li>
            <li>
              <a href="/" className="text-[#000000] hover:text-[#9F9F9F]">
                Returns
              </a>
            </li>
            <li>
              <a href="/" className="text-[#000000] hover:text-[#9F9F9F]">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="px-4 border--2 border-red-500 relative w-auto flex flex-wrap flex-col">
          <h3 className="font-poppins text-[#9F9F9F] text-lg font-medium mb-4">
            Newsletter
          </h3>
          <div className="flex items-start space-x-4  max-sm:flex-col ">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2 border-b-2 border-[#000000] text-[#000000] font-poppins text-base focus:outline-none focus:border-gray-600"
            />
            <button className="text-lg mt-3 text-black font-semibold border-b-2 border-black hover:border-red-500 hover:text-red-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Divider line between footer content and the last section */}
      <div className="w-full border-t-2 border-[#E0E0E0] my-8"></div>

      {/* Last Section: Copyright Notice */}
      <div className="text-center py-4 md:text-start">
        <p className="font-poppins text-[#9F9F9F] text-sm">
          2022 Meubel House. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;



