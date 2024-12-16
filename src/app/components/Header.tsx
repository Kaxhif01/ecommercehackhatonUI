"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoClose, IoMenu } from "react-icons/io5";
import CartSidebar from "./cartsidebar"; // Import your CartSidebar

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false); // State for Cart Sidebar

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header className={`shadow-md ${isHomePage ? "bg-[#FBEBB5]  border-b border-[#CCCCCC]"  : "bg-white"}`}>
      
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Hamburger Menu for Small Screens */}
        <button
          className="text-2xl md:hidden focus:outline-none z-20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <IoClose /> : <IoMenu />}
        </button>

        {/* Left Part - Empty on Larger Screens */}
        <div className="hidden md:flex md:w-1/3"></div>

        {/* Navigation Links */}
        <nav
          className={`fixed inset-0 bg-white z-10 p-4 flex flex-col items-center justify-center space-y-4 transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 md:static md:flex md:flex-row md:space-x-8 md:space-y-0 md:transform-none md:w-1/3 md:justify-center md:bg-transparent`}
        >
          <Link
            href="/"
            className="text-lg font-medium hover:text-blue-500 transition"
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            href="/Shoppage"
            className="text-lg font-medium hover:text-blue-500 transition"
            onClick={handleLinkClick}
          >
            Shop
          </Link>
          <Link
            href="/Blog"
            className="text-lg font-medium hover:text-blue-500 transition"
            onClick={handleLinkClick}
          >
            Blog
          </Link>
          <Link
            href="/Contact"
            className="text-lg font-medium hover:text-blue-500 transition"
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </nav>

        {/* Right-side Icons */}
        <div className="flex space-x-4 items-center md:w-1/3 md:justify-end">
          <Link href="/Myaccount">
            <FaUser className="text-xl cursor-pointer hover:text-blue-500 transition" />
          </Link>

          
            <FaSearch className="text-xl cursor-pointer hover:text-blue-500 transition" />
        
          <FaHeart className="text-xl cursor-pointer hover:text-blue-500 transition" />

          {/* Cart Icon */}
          <button
            onClick={() => setIsCartSidebarOpen(true)} // Open the sidebar
            className="text-xl cursor-pointer hover:text-blue-500 transition"
          >
            <FaShoppingCart />
          </button>
        </div>
      </div>

      {/* Backdrop for Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-0 md:hidden"
          onClick={handleLinkClick}
        ></div>
      )}

      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={isCartSidebarOpen}
        onClose={() => setIsCartSidebarOpen(false)} // Pass the close function
      />
    </header>
  );
};

export default Header;


// "use client";
// import Link from "next/link";

// import { usePathname } from "next/navigation"; // Import this hook

// import { useState } from "react";
// import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
// import { IoClose, IoMenu } from "react-icons/io5";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const pathname = usePathname();
//   const isHomePage = pathname === "/"; // Check if it's the Home Page

//   // Function to close the menu when a link is clicked
// const handleLinkClick = () => {
//   setIsMenuOpen(false);
// };

//   return (
//     <header className={`shadow-md ${isHomePage ? "bg-[#FBEBB5]" : "bg-white"}`}>
//       <div className="container mx-auto px-4 flex justify-between items-center py-4">
//         {/* Hamburger Menu for Small Screens */}
//         <button
//           className="text-2xl md:hidden focus:outline-none z-20"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? <IoClose /> : <IoMenu />}
//         </button>

//         {/* Left Part - Empty on Larger Screens */}
//         <div className="hidden md:flex md:w-1/3"></div>

//         {/* Navigation Links */}
//         <nav
//           className={`fixed inset-0 bg-white z-10 p-4 flex flex-col items-center justify-center space-y-4 transform ${
//             isMenuOpen ? "translate-x-0" : "-translate-x-full"
//           } transition-transform duration-300 md:static md:flex md:flex-row md:space-x-8 md:space-y-0 md:transform-none md:w-1/3 md:justify-center md:bg-transparent`}
//         >
//           <Link
//             href="/"
//             className="text-lg font-medium hover:text-blue-500 transition"
//             onClick={handleLinkClick}
//           >
//             Home
//           </Link>       

//           <Link
//             href="/Shoppage"
//             className="text-lg font-medium hover:text-blue-500 transition"
//             onClick={handleLinkClick}
//           >
//             Shop
//           </Link>

//           <Link
//             href="/Blog"
//             className="text-lg font-medium hover:text-blue-500 transition"
//             onClick={handleLinkClick}
//           >
//             Blog
//           </Link>

//           <Link
//             href="/Contact"
//             className="text-lg font-medium hover:text-blue-500 transition"
//             onClick={handleLinkClick}
//           >
//             Contact
//           </Link>
//         </nav>

//         {/* Right-side Icons */}
//         <div className="flex space-x-4 items-center md:w-1/3 md:justify-end">
//           <Link href="/Myaccount">
//             {" "}
//             <FaUser className="text-xl cursor-pointer hover:text-blue-500 transition" />{" "}
//           </Link>
//           <Link href="/Checkout">
//             {" "}
//             <FaSearch className="text-xl cursor-pointer hover:text-blue-500 transition" />{" "}
//           </Link>
//           <FaHeart className="text-xl cursor-pointer hover:text-blue-500 transition" />




//           <Link href="/cartsidebar">
//             {" "}
//             <FaShoppingCart className="text-xl cursor-pointer hover:text-blue-500 transition" />{" "}
//           </Link>
//         </div>
//       </div>

//       {/* Backdrop for Mobile Menu */}
//       {isMenuOpen && (
//         <div
//           className="fixed inset-0 bg-black opacity-50 z-0 md:hidden"
//           onClick={handleLinkClick}
//         ></div>
//       )}

        
//     </header>
//   );
// };

// export default Header;
