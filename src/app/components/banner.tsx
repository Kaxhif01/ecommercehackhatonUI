import React from 'react'
import Link from 'next/link'

interface BannerProps {
  pageTitle: string; // Dynamic title for the banner
  breadcrumb: string[]; // Dynamic breadcrumb links
}

function Banner({ pageTitle, breadcrumb }: BannerProps) {
  return (
    <div>
           <section
  className="relative w-full h-[400px]  bg-no-repeat bg-center sm:h-[400px] md:h-[400px] max-sm:h-[200px]"
  style={{ backgroundImage: "url('/images/banner.png')",
    backgroundSize: '250%', // Stretches the image to cover the full width on small screens
    backgroundPosition: 'center',
    
   }} // Set banner bg image
>
  <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center flex-col">
    {/* Icon */}
    <img src="./images/icon.png" alt="Icon" className="mb-4" />
    {/* Shop Heading */}
    <h1 className="text-4xl font-poppins font-medium text-[#000000] mb-2">
      {pageTitle}
    </h1>

     {/* Breadcrumb: Dynamic Links */}
     <div className="flex items-center text-lg">
            {breadcrumb.map((crumb, index) => {
              const isLast = index === breadcrumb.length - 1; // Check if it's the last breadcrumb (active page)
              const isActive = !isLast; // We want the last breadcrumb to be the active one

              return (
                <React.Fragment key={index}>
                  {/* Handle Home page link explicitly */}
                  {crumb === 'Home' ? (
                    <Link
                      href="/"
                      className={`text-[16px] font-poppins font-medium ${isActive ? 'text-[#000000]' : ''}`}
                    >
                      {crumb}
                    </Link>
                  ) : (
                    <Link
                      href={isActive ? `/${crumb.toLowerCase()}` : '#'} // Set the link only for non-active breadcrumbs
                      className={`text-[16px] font-poppins font-light ${isActive ? 'text-[#000000]' : ''}`}
                    >
                      {crumb}
                    </Link>
                  )}

                  {/* Separator Icon */}
                  {index < breadcrumb.length - 1 && (
                    <span className="mx-2">
                      <img src="./images/sign.png" alt="Separator" className="w-3 h-3" />
                    </span>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;