import React from 'react'

function Filter () {
  return (
    <div>
      {/* Filter */}
      <section className="bg-[#FAF4F4] mt-8 py-8">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          {/* Left Flex: Filter Section */}
          <div className="flex flex-row items-center space-x-2 sm:space-x-4">
            {/* Filter Icon and Text */}
            <div className="flex items-center space-x-2">
              <img src="./images/filter.png" alt="Filter" className="w-6 h-6" />
              <span className="text-xs sm:text-sm">Filter</span>
            </div>
            
            {/* Dice Icon */}
            <img src="./images/dice.png" alt="Dice" className="w-6 h-6" />
            
            {/* Filtering Icon */}
            <img src="./images/filtering.png" alt="Filtering" className="w-6 h-6" />

            {/* Divider Line */}
            <div className="hidden md:block border-l border-gray-300 h-8 mx-4"></div>

            {/* Showing Results Text */}
            <div className="flex flex-row items-center space-x-2 sm:space-x-4">
              <span className="text-xs sm:text-sm">Showing 1–16 of 32 results</span>
            </div>
          </div>

          {/* Right Flex: Shop Section */}
          <div className="flex sm:space-x-2 md:space-x-4">
            {/* Show Text and Box */}
            <div className="flex items-center space-x-2">
              <span className="text-xs sm:text-sm">Show</span>
              <div className="flex items-center justify-center bg-white px-4 py-2 text-gray-600">
                <span>16</span>
              </div>
            </div>

            {/* Short By Text and Box */}
            <div className="flex items-center space-x-2">
              <span className="text-xs sm:text-sm">Short By</span>
              <div className="flex items-center justify-center bg-white px-4 py-2 text-gray-600">
                <span>Default</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Filter;
