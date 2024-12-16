function Hero() {
  return (
    <section className="bg-[#FBEBB5] pt-[4.5rem] md:pt-[6rem]">
      {/* Top padding matches the header height */}
      <div className="container mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row items-center md:space-x-8">
        {/* Left Side */}
        <div className="flex-1 text-center md:text-start md:pl-16 px-4">
          <h1 className="text-4xl md:text-6xl font-semibold text-gray-800 font-poppins leading-snug md:leading-tight">
            Rocket single seater
          </h1>
          <button className="mt-4 text-lg text-black font-semibold border-b-2 border-black hover:border-red-500 hover:text-red-500">
            Shop Now
          </button>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center px-4">
          <img
            src="./images/hero.png"
            alt="Hero"
            className="max-w-full mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
