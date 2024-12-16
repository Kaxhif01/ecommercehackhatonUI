import React from 'react'
import Banner from "../components/banner";
import Feature from "../components/Feature";
import { blogs, recentPosts, categories } from "./blogdata";

function page() {
  return (
    <div>
      <Banner pageTitle="Blog" breadcrumb={['Home', 'Blog']} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 lg:px-16 py-12">
        {/* Left Section - Blog Posts */}
        <div className="col-span-1 lg:col-span-2">
          {blogs.map((blog) => (
            <div key={blog.id} className="mb-12">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full lg:w-4/5 xl:w-3/5 rounded-lg mb-4"  // Adjusting width for different screen sizes
              />
              <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                <div className="flex items-center gap-2">
                  <img src={blog.metadataIcons.author} alt="Admin" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={blog.metadataIcons.calendar} alt="Calendar" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={blog.metadataIcons.tag} alt="Tag" />
                  <span>{blog.tags}</span>
                </div>
              </div>
              <h2 className="text-xl font-semibold text-black mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600">{blog.description}</p>
            </div>
          ))}
        </div>

        {/* Right Section - Sidebar */}
        <div className="col-span-1 space-y-8">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border rounded-md shadow-sm"
            />
            <img
              src="./images/searchbar.png"
              alt="Search"
              className="absolute top-1/2 right-3 transform -translate-y-1/2 w-5 h-5"
            />
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Categories</h3>
            <ul>
              {categories.map((category, index) => (
                <li key={index} className="mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">{category.name}</span>
                    <span className="text-gray-500">({category.count})</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Recent Posts</h3>
            <ul>
              {recentPosts.map((post) => (
                <li key={post.id} className="flex items-center gap-4 mb-4 last:mb-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <span className="block text-gray-600">{post.title}</span>
                    <span className="block text-gray-500 text-sm">
                      {post.description}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Feature />
    </div>
  )
}

export default page






// import React from 'react'
// import Banner from "../components/banner";
// import Feature from "../components/Feature";
// import { blogs, recentPosts, categories } from "./blogdata";

// function page  () {
//   return (
//     <div>
// <Banner pageTitle="Blog" breadcrumb={['Home', 'Blog']} />
  






//     <div className="flex flex-col lg:flex-row gap-8 px-6 lg:px-16 py-12">
//       {/* Left Section - Blog Posts */}
//       <div className="flex-1">
//         {blogs.map((blog) => (
//           <div key={blog.id} className="mb-12">
//             <img
//               src={blog.image}
//               alt={blog.title}
//               className="w-full rounded-lg mb-4"
//             />
//             <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
//               <div className="flex items-center gap-2">
//                 <img src={blog.metadataIcons.author} alt="Admin" />
//                 <span>{blog.author}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <img src={blog.metadataIcons.calendar} alt="Calendar" />
//                 <span>{blog.date}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <img src={blog.metadataIcons.tag} alt="Tag" />
//                 <span>{blog.tags}</span>
//               </div>
//             </div>
//             <h2 className="text-xl font-semibold text-black mb-2">
//               {blog.title}
//             </h2>
//             <p className="text-gray-600">{blog.description}</p>
//           </div>
//         ))}
//       </div>

//       {/* Right Section - Sidebar */}
//       <div className="w-full lg:w-1/3">
//         {/* Search Bar */}
//         <div className="mb-8">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="w-full px-4 py-2 border rounded-md shadow-sm"
//             />
//             <img
//               src="./images/searchbar.png"
//               alt="Search"
//               className="absolute top-1/2 right-3 transform -translate-y-1/2 w-5 h-5"
//             />
//           </div>
//         </div>

//         {/* Categories Section */}
//         <div className="mb-8">
//           <h3 className="text-lg font-semibold text-black mb-4">Categories</h3>
//           <ul>
//             {categories.map((category, index) => (
//               <li key={index} className="mb-4">
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-600">{category.name}</span>
//                   <span className="text-gray-500">({category.count})</span>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Recent Posts */}
//         <div>
//           <h3 className="text-lg font-semibold text-black mb-4">Recent Posts</h3>
//           <ul>
//             {recentPosts.map((post) => (
//               <li
//                 key={post.id}
//                 className="flex items-center gap-4 mb-4 last:mb-0"
//               >
//                 <img
//                   src={post.image}
//                   alt={post.title}
//                   className="w-16 h-16 rounded-lg object-cover"
//                 />
//                 <div>
//                   <span className="block text-gray-600">{post.title}</span>
//                   <span className="block text-gray-500 text-sm">
//                     {post.description}
//                   </span>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>

















//       <Feature />

//     </div>
//   )
// }

// export default page
