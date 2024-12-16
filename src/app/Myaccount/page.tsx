import React from 'react';
import Banner from '../components/banner';
import Feature from '../components/Feature';

const MyAccount = () => {
  return (
    <div className="bg-white">
      {/* Banner */}
      <Banner pageTitle="My Account" breadcrumb={['Home', 'My account']} />

      {/* Main Content Section */}
      <div className="container mx-auto px-8 py-8 my-8">
        {/* Login and Register Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-screen-xl">
          {/* Left Flex Part (Login Form) */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-poppins font-semibold text-black mb-4">
              Login
            </h2>

            {/* Username or Email */}
            <label htmlFor="username" className="text-lg font-poppins font-medium text-black mb-2">
              Username or Email Address
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username or email"
              className="w-full max-w-[423px] h-[65px] border border-gray-300 rounded-md px-4 mb-4"
            />

            {/* Password */}
            <label htmlFor="password" className="text-lg font-poppins font-medium text-black mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full max-w-[423px] h-[65px] border border-gray-300 rounded-md px-4 mb-4"
            />

            {/* Remember Me Checkbox */}
            <div className="flex items-center mb-4">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-lg font-poppins text-black">
                Remember Me
              </label>
            </div>

            {/* Login Button and Lost Your Password on the same line */}
            <div className="flex justify-between items-center w-full max-w-[423px]">
              <button className="bg-transparent text-[#000000] border-2 border-[#000000] px-12 py-2 rounded-md">
                Login
              </button>
              <a href="#" className="text-black font-poppins font-medium text-sm hover:text-blue-700">
                Lost Your Password?
              </a>
            </div>
          </div>

          {/* Right Flex Part (Register Section) */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-poppins font-semibold text-black mb-4">
              Register
            </h2>

            {/* Username Input */}
            <label htmlFor="registerUsername" className="text-lg font-poppins font-medium text-black mb-2">
              Username
            </label>
            <input
              id="registerUsername"
              type="text"
              placeholder="Choose a username"
              className="w-full max-w-[423px] h-[65px] border border-gray-300 rounded-md px-4 mb-4"
            />

            {/* Register Info Paragraphs */}
            <p className="text-lg font-poppins text-black mb-4 leading-7">
              A link to set a new password will be sent to your email address.
            </p>

            <p className="text-lg font-poppins text-black mb-4 leading-7">
              Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
            </p>

            {/* Register Button */}
            <div className="flex justify-start">
              <button className="bg-transparent text-[#000000] border-2 border-[#000000] px-12 py-2 rounded-md">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>

      <Feature />
    </div>
  );
};

export default MyAccount;





// import React from 'react';

// import Banner from '../components/banner';
// import Feature from '../components/Feature';



// const MyAccount = () => {
//   return (
//     <div className="bg-white">
     

//       {/* Banner */}
//       <Banner pageTitle="My Account" breadcrumb={['Home', 'My account']} />

//       {/* Main Content Section */}
//       <div className="container mx-auto px-4 py-8">
//         {/* Login and Register Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Left Flex Part (Login Form) */}
//           <div className="flex flex-col">
//             <h2 className="text-3xl font-poppins font-semibold text-black mb-4">
//               Login
//             </h2>

//             {/* Username or Email */}
//             <label htmlFor="username" className="text-lg font-poppins font-medium text-black mb-2">
//               Username or Email Address
//             </label>
//             <input
//               id="username"
//               type="text"
//               placeholder="Enter your username or email"
//               className="w-[423px] h-[75px] border border-gray-300 rounded-md px-4 mb-4"
//             />

//             {/* Password */}
//             <label htmlFor="password" className="text-lg font-poppins font-medium text-black mb-2">
//               Password
//             </label>
//             <input
//               id="password"
//               type="password"
//               placeholder="Enter your password"
//               className="w-[423px] h-[75px] border border-gray-300 rounded-md px-4 mb-4"
//             />

//             {/* Remember Me Checkbox */}
//             <div className="flex items-center mb-4">
//               <input type="checkbox" id="remember" className="mr-2" />
//               <label htmlFor="remember" className="text-lg font-poppins text-black">
//                 Remember Me
//               </label>
//             </div>

//             {/* Login Button and Lost Your Password */}
//             <div className="flex justify-start items-center">
//               <button className="bg-black text-white px-6 py-3 rounded-md mb-4">
//                 Login
//               </button>
//               <a href="#" className="text-black font-poppins font-medium text-sm">
//                 Lost Your Password?
//               </a>
//             </div>
//           </div>

//           {/* Right Flex Part (Register Section) */}
//           <div className="flex flex-col">
//             <h2 className="text-3xl font-poppins font-semibold text-black mb-4">
//               Register
//             </h2>

//             {/* Username Input */}
//             <label htmlFor="registerUsername" className="text-lg font-poppins font-medium text-black mb-2">
//               Username
//             </label>
//             <input
//               id="registerUsername"
//               type="text"
//               placeholder="Choose a username"
//               className="w-[423px] h-[75px] border border-gray-300 rounded-md px-4 mb-4"
//             />

//             {/* Register Info Paragraph */}
//             <p className="text-lg font-poppins text-black mb-4">
//             A link to set a new password will be sent to your email address.            </p>

//             <p className="text-lg font-poppins text-black mb-4">
//             Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.            </p>

//             {/* Register Button */}
//             <div className="flex justify-start">
//               <button className="bg-black text-white px-6 py-3 rounded-md">
//                 Register
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Feature />



     
    
//     </div>
//   );
// };

// export default MyAccount;
