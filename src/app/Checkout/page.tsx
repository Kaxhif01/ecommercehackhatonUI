import React from "react";
import Banner from "../components/banner";
import Feature from "../components/Feature";

function page() {
  return (
    <div>
        <Banner pageTitle="Checkout" breadcrumb={['Home', 'Checkout']} />

      <section>
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
          {/* Container */}
          <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Flex Section */}
            <div className="bg-transparent p-8 ">
              <h1 className="font-poppins font-semibold text-3xl text-black mb-6">
                Billing details
              </h1>
              {/* Form */}
              <form className="space-y-6">
                {/* First Name & Last Name */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block font-poppins font-medium text-base text-black mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full border border-gray-400 rounded-lg p-3 focus:ring focus:ring-gray-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block font-poppins font-medium text-base text-black mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full border border-gray-400 rounded-lg p-3 focus:ring focus:ring-gray-300"
                    />
                  </div>
                </div>
                {/* Company Name */}
                <div>
                  <label
                    htmlFor="companyName"
                    className="block font-poppins font-medium text-base text-black mb-2"
                  >
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    className="w-full border border-gray-400 rounded-lg p-3 focus:ring focus:ring-gray-300"
                  />
                </div>
                {/* Country/Region */}
                <div>
                  <label
                    htmlFor="country"
                    className="block font-poppins font-medium text-base text-black mb-2"
                  >
                    Country/Region
                  </label>
                  <select
                    id="country"
                    className="w-full border border-gray-400 rounded-lg p-3 focus:ring focus:ring-gray-300"
                  >
                    <option value="USA">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="UK">United Kingdom</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                  </select>
                </div>

                {/* Address Fields */}
                <div>
                  <label
                    htmlFor="address"
                    className="block font-poppins font-medium text-base text-black mb-2"
                  >
                    Street Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="w-full border border-gray-400 rounded-lg p-3 focus:ring focus:ring-gray-300"
                  />
                </div>

                {/* Address Fields */}
                <div>
                  <label
                    htmlFor="address"
                    className="block font-poppins font-medium text-base text-black mb-2"
                  >
                    Town/City
                  </label>
                  <input
                    type="text"
                    id="town"
                    className="w-full border border-gray-400 rounded-lg p-3 focus:ring focus:ring-gray-300"
                  />
                </div>
                {/* Province */}
                <div>
                  <label
                    htmlFor="province"
                    className="block font-poppins font-medium text-base text-black mb-2"
                  >
                    Province
                  </label>
                  <select
                    id="province"
                    className="w-full border border-gray-400 rounded-lg p-3 focus:ring focus:ring-gray-300"
                  >
                    <option value="ON">Ontario</option>
                    <option value="BC">British Columbia</option>
                    <option value="QC">Quebec</option>
                    <option value="AB">Alberta</option>
                    <option value="NS">Nova Scotia</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block font-poppins font-medium text-base text-black mb-2"
                  >
                    Zip code
                  </label>
                  <input
                    type="text"
                    id="zip"
                    className="w-full border border-gray-400 rounded-lg p-3 focus:ring focus:ring-gray-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block font-poppins font-medium text-base text-black mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="number"
                    id="phone"
                    className="w-full border border-gray-400 rounded-lg p-3 focus:ring focus:ring-gray-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-poppins font-medium text-base text-black mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-400 rounded-lg p-3 focus:ring focus:ring-gray-300"
                  />
                </div>
              </form>
            </div>

            {/* Right Flex Section */}
            <div className="bg-transparent p-8">
              {/* Card */}
              <div className="space-y-4">
                <div className="flex justify-between items-start max-sm:gap-5">
                  <h2 className="font-poppins font-medium text-2xl text-[#000000]">
                    Product
                  </h2>
                  <h2 className="font-poppins font-medium text-2xl text-black  flex justify-start items-start ">
                    Subtotal
                  </h2>
                </div>
                <div className="flex justify-between">
                  <p className="font-poppins text-lg text-[#9F9F9F] max-sm:text-sm">
                    Asgaard sofa x 1
                  </p>
                  <p className="font-poppins text-lg text-[#000000] max-sm:text-sm">
                    Rs. 250,000.00
                  </p>
                </div>
                <div className="flex justify-between ">
                  <p className="font-poppins text-lg text-[#000000] max-sm:text-sm">
                    Subtotal
                  </p>
                  <p className="font-poppins text-lg text-[#000000] max-sm:text-sm" >
                    Rs. 250,000.00
                  </p>
                </div>

                <div className="flex justify-between">
                  <p className="font-poppins text-2xl font-semibold text-[#000000]">
                    Total
                  </p>
                  <p className="font-poppins text-lg font-bold text-[#B88E2F]">
                    Rs. 250,000.00
                  </p>
                </div>

                <div className="border-t border-[#D9D9D9] w-full my-4"></div>


                <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    className="w-4 h-4 bg-black rounded-full appearance-none checked:bg-black"
                    />
                  <span className="font-poppins text-base text-black">
                    Direct Bank Transfer
                  </span>
                </label>
                  <p className="font-poppins text-sm text-[#9F9F9F] mt-2">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </p>
                </div>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    className="w-4 h-4 text-black"
                  />
                  <span className="font-poppins text-base text-[#9F9F9F]">
                    Direct Bank Transfer
                  </span>
                </label>
                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      className="w-4 h-4 text-black"
                    />
                    <span className="font-poppins text-base text-[#9F9F9F]">
                      Cash on Delivery
                    </span>
                  </label>
                </div>
                <p className="font-poppins text-sm text-gray-600 mt-4">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our{" "}
                  <span className="font-poppins text-sm text-[#000000]">
                    privacy policy.
                  </span>
                </p>

                <button className="flex justify-center mx-auto bg-white text-[#000000] text-center font-poppins font-medium text-lg py-2 px-16 rounded-[15px] border border-[#000000] mt-8 mb-4">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Feature />
    </div>
  );
}

export default page;
