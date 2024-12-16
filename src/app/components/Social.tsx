import React from 'react'


function Social () {
  return (
    <section 
  className="relative bg-cover bg-center py-16"
  style={{
    backgroundImage: "url('./images/social.png')",
    // backgroundOpacity: "0.1", 
  }}
>
  <div className="container mx-auto text-center px-4">
    {/* Heading */}
    <h2 className="text-4xl md:text-6xl font-bold font-poppins text-black">
      Our Instagram
    </h2>

    {/* Paragraph */}
    <p className="text-lg md:text-2xl font-poppins text-black mt-4">
      Follow our store on Instagram
    </p>

    {/* Button */}
    <button 
  className="mt-6 px-8 py-3 bg-[#FAF4F4] text-[#000000] rounded-[50px] font-poppins text-lg shadow-lg hover:bg-gray-800 transition hover:text-[#FAF4F4]"
>
  Follow Us
</button>

  </div>
</section>

  )
}

export default Social
