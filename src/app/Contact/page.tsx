import React from 'react';
import Feature from '../components/Feature'; // Your footer component
import Banner from '../components/banner';
import { FaMapMarkerAlt , FaPhoneAlt , FaClock   } from 'react-icons/fa'; // Using react-icons for address, phone, and clock

const ContactPage = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <Banner pageTitle="Contact" breadcrumb={['Home', 'Contact']} />
      
      {/* Main Heading & Paragraph */}
      <div className="text-center mt-16 mx-auto px-4">
        <h1 className="text-3xl font-semibold text-black">Get In Touch With Us</h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
  For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
</p>

      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto px-6 mt-8 flex flex-col lg:flex-row gap-8">
        {/* Left Side (Contact Information) */}
        <div className="flex-1 bg-white p-8 rounded-lg py-8">
  {/* Address Section */}
  <div className="mb-8"> {/* Increased margin bottom for more spacing between sections */}
    <div className="flex items-center mb-4"> {/* Added margin bottom to the flex container */}
      <FaMapMarkerAlt className="text-black mr-4 text-2xl" /> {/* Increased margin between icon and title */}
      <h4 className="text-black text-xl font-poppins font-semibold">Address</h4>
    </div>
    <p className="text-black text-lg mt-2">236 5th SE Avenue,</p>
    <span className='text-black text-lg mt-2'>New York NY10000, United States</span>
    
  </div>

  {/* Phone Section */}
  <div className="mb-8"> {/* Increased margin bottom for more spacing */}
    <div className="flex items-center mb-4"> {/* Added margin bottom to the flex container */}
      <FaPhoneAlt className="text-black mr-4 text-2xl" /> {/* Increased margin between icon and title */}
      <h4 className="text-black text-xl font-poppins font-semibold">Phone</h4>
    </div>
    <p className="text-black text-lg mt-2">Mobile: +(84) 546-6789</p>
    <p className="text-black text-lg">Hotline: +(84) 456-6789</p>
  </div>

  {/* Working Hours Section */}
  <div>
    <div className="flex items-center mb-4"> {/* Added margin bottom to the flex container */}
      <FaClock className="text-black mr-4 text-2xl" /> {/* Increased margin between icon and title */}
      <h4 className="text-black text-xl font-poppins font-semibold">Working Hours</h4>
    </div>
    <p className="text-black text-lg mt-2">Monday-Friday: 9:00 - 22:00</p>
    <p className="text-black text-lg">Saturday-Sunday: 9:00 - 21:00</p>
  </div>
</div>


        {/* Right Side (Contact Form) */}
        <div className="flex-1 bg-white p-8 rounded-lg">
          {/* Contact Form */}
          <form>
            {/* Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-black text-lg font-poppins">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full h-16 border border-gray-300 rounded-md mt-2 px-4"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-black text-lg font-poppins">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full h-16 border border-gray-300 rounded-md mt-2 px-4"
              />
            </div>

            {/* Subject */}
            <div className="mb-4">
              <label htmlFor="subject" className="block text-black text-lg font-poppins">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter the subject"
                className="w-full h-16 border border-gray-300 rounded-md mt-2 px-4"
              />
            </div>

            {/* Message */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-black text-lg font-poppins">Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                className="w-full h-40 border border-gray-300 rounded-md mt-2 px-4"
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="bg-transparent border-2 border-black text-[#000000] px-16 py-2 rounded-md">Submit</button>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <Feature />
    </div>
  );
};

export default ContactPage;






// import React from 'react';
// import Feature from '../components/Feature';  // Your footer component
// import Banner from '../components/banner';
// import { FiMapPin, FiPhone, FiClock } from 'react-icons/fi';  // Using react-icons for address, phone, and clock

// const ContactPage = () => {
//   return (
//     <div className="bg-white">
//       {/* Header Section */}
//       <Banner pageTitle="Contant" breadcrumb={['Home', 'Contact']} />

//       {/* Contact Form Section */}
//       <div className="container mx-auto px-4 mt-8 flex flex-col md:flex-row gap-8">
//         {/* Left Side (Contact Information) */}
//         <div className="flex-1 bg-[#FFF9E5] p-8 rounded-lg">
         

//           {/* Address Section */}
//           <div className="mb-6">
//             <div className="flex items-center">
//               <FiMapPin className="text-black mr-2 text-2xl" />
//               <h4 className="text-black text-xl font-poppins font-semibold">Address</h4>
//             </div>
//             <p className="text-black text-lg mt-2">236 5th SE Avenue, New York NY10000, United States</p>
//           </div>

//           {/* Phone Section */}
//           <div className="mb-6">
//             <div className="flex items-center">
//               <FiPhone className="text-black mr-2 text-2xl" />
//               <h4 className="text-black text-xl font-poppins font-semibold">Phone</h4>
//             </div>
//             <p className="text-black text-lg mt-2">Mobile: +(84) 546-6789</p>
//             <p className="text-black text-lg">Hotline: +(84) 456-6789</p>
//           </div>

//           {/* Working Hours Section */}
//           <div>
//             <div className="flex items-center">
//               <FiClock className="text-black mr-2 text-2xl" />
//               <h4 className="text-black text-xl font-poppins font-semibold">Working Hours</h4>
//             </div>
//             <p className="text-black text-lg mt-2">Monday-Friday: 9:00 - 22:00</p>
//             <p className="text-black text-lg">Saturday-Sunday: 9:00 - 21:00</p>
//           </div>
//         </div>

//         {/* Right Side (Contact Form) */}
//         <div className="flex-1 justify-start">
        

//           {/* Contact Form */}
//           <form>
//             {/* Name */}
//             <div className="mb-4">
//               <label htmlFor="name" className="block text-black text-lg font-poppins">Your Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 placeholder="Enter your name"
//                 className="w-full h-16 border border-gray-300 rounded-md mt-2 px-4"
//               />
//             </div>

//             {/* Email */}
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-black text-lg font-poppins">Your Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 className="w-full h-16 border border-gray-300 rounded-md mt-2 px-4"
//               />
//             </div>

//             {/* Subject */}
//             <div className="mb-4">
//               <label htmlFor="subject" className="block text-black text-lg font-poppins">Subject</label>
//               <input
//                 type="text"
//                 id="subject"
//                 name="subject"
//                 placeholder="Enter the subject"
//                 className="w-full h-16 border border-gray-300 rounded-md mt-2 px-4"
//               />
//             </div>

//             {/* Message */}
//             <div className="mb-4">
//               <label htmlFor="message" className="block text-black text-lg font-poppins">Your Message</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 placeholder="Enter your message"
//                 className="w-full h-40 border border-gray-300 rounded-md mt-2 px-4"
//               />
//             </div>

//             {/* Submit Button */}
//             <button type="submit" className="bg-black text-white px-6 py-3 rounded-md">Send Message</button>
//           </form>
//         </div>
//       </div>

//       {/* Footer Section */}
//       <Feature />
//     </div>
//   );
// };

// export default ContactPage;
