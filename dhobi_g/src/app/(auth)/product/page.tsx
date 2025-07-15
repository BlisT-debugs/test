"use client";
// import { useState } from "react";
// import {
//   FaUniversity,
//   FaUserFriends,
//   FaShoppingCart,
//   FaCogs,
// } from "react-icons/fa";

// const products = [
//   {
//     name: "DG Campus",
//     tagline: "Simplifying Campus Laundry Operations.",
//     description:
//       "End-to-end laundry management for educational institutions with dedicated apps for students, staff, and administrators.",
//     bullets: [
//       "Student App for tracking laundry",
//       "Staff App for scheduling and updates",
//       "Centralized Admin Dashboard for operations",
//     ],
//     icon: <FaUniversity className="text-blue-600 text-3xl mb-2" />,
//     cta: "Learn More",
//   },
//   {
//     name: "DG Subscription",
//     tagline: "Cloud-Based Laundry Services for Individuals.",
//     description:
//       "A subscription-based model for seamless laundry services with customer and delivery apps.",
//     bullets: [
//       "Flexible subscription plans",
//       "Delivery tracking with Delivery Boy App",
//       "Transparent billing and reminders",
//     ],
//     icon: <FaUserFriends className="text-green-600 text-3xl mb-2" />,
//     cta: "Explore Plans",
//   },
//   {
//     name: "Ecommerce Platform",
//     tagline: "An Online Marketplace for Laundry Businesses.",
//     description:
//       "Connect customers, laundry businesses, and B2B vendors through a robust e-commerce platform.",
//     bullets: [
//       "Customer and Partner Apps",
//       "Equipment and essentials procurement",
//       "B2B and B2C integrations",
//     ],
//     icon: <FaShoppingCart className="text-purple-600 text-3xl mb-2" />,
//     cta: "Get Started",
//   },
//   {
//     name: "LaundryOS",
//     tagline: "The Operating System for Modern Laundry Businesses.",
//     description:
//       "Comprehensive software for managing orders, fleets, inventory, and POS systems.",
//     bullets: [
//       "Fleet Management for optimized logistics",
//       "Order & Inventory Management systems",
//       "Custom POS and automated tax documentation",
//     ],
//     icon: <FaCogs className="text-red-600 text-3xl mb-2" />,
//     cta: "Request a Demo",
//   },
// ];

// export default function ProductSection() {
//   const [hovered, setHovered] = useState(null);

//   return (
//     // <section className="py-16 px-6 shadow-xl m-10 rounded-xl">
//     //   <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">
//     //     Explore Our Innovative Laundry Solutions
//     //   </h2>

//     //   <div className="flex flex-col md:flex-row gap-10 max-w-7xl mx-auto">
//     //     {/* Left Info Panel */}
//     //     <div className="w-full md:w-1/3">
//     //       <div className=" p-6 rounded-xl shadow min-h-[250px] h-full flex items-center justify-center animate-fadeIn transition-all duration-300">
//     //         <div className="text-center">
//     //           <h3 className="text-xl font-semibold text-blue-700 mb-2">
//     //             What Makes Us Special
//     //           </h3>
//     //           <p className="text-blue-900 text-lg mb-4">
//     //             {hovered !== null
//     //               ? products[hovered].tagline
//     //               : "Tailored digital tools for every laundry need — from campus to doorstep."}
//     //           </p>

//     //           {hovered !== null && (
//     //             <div className="transition-opacity duration-300">
//     //               <p className="text-gray-700 mb-3">
//     //                 {products[hovered].description}
//     //               </p>
//     //               <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-2 text-left">
//     //                 {products[hovered].bullets.map((point, idx) => (
//     //                   <li key={idx}>{point}</li>
//     //                 ))}
//     //               </ul>
//     //               <p className="text-sm text-blue-600 font-medium">
//     //                 {products[hovered].cta}
//     //               </p>
//     //             </div>
//     //           )}
//     //         </div>
//     //       </div>
//     //     </div>

//     //     {/* Right Card Section */}
//     //     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-2/3">
//     //       {products.map((product, index) => (
//     //         <div
//     //           key={index}
//     //           className="bg-blue-50 border hover:border-blue-500 rounded-xl p-5 shadow-md transition-all duration-200 min-h-[250px]"
//     //           onMouseEnter={() => setHovered(index)}
//     //           onMouseLeave={() => setHovered(null)}
//     //         >
//     //           <div className="flex flex-col">
//     //             {product.icon}
//     //             <h4 className="text-xl font-bold text-blue-800">
//     //               {product.name}
//     //             </h4>
//     //             <p className="text-gray-600 text-sm mb-2">{product.tagline}</p>
//     //             <ul className="list-disc text-sm text-gray-500 pl-5 space-y-0.5">
//     //               {product.bullets.slice(0, 3).map((item, idx) => (
//     //                 <li key={idx}>{item}</li>
//     //               ))}
//     //             </ul>
//     //             <p className="text-sm text-blue-600 font-medium mt-2">
//     //               {product.cta}
//     //             </p>
//     //           </div>
//     //         </div>
//     //       ))}
//     //     </div>
//     //   </div>
//     // </section>

//     <section className=" py-16 px-6 text-center">
//         <h2 className="text-4xl font-bold text-blue-800 mb-4">
//           Explore Our Innovative Laundry Solutions
//         </h2>
//         <p className="text-gray-600 max-w-3xl mx-auto mb-8">
//           Empowering laundry businesses, campuses, and individuals with digital
//           tools designed for efficiency, sustainability, and growth.
//         </p>

//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
//             Request a Demo
//           </button>
//           <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition">
//             Contact Sales
//           </button>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto text-left">
//           {/* DG Campus */}
//           <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
//             <h3 className="text-2xl font-bold text-blue-700 mb-2">DG Campus</h3>
//             <p className="text-gray-700 mb-4">
//               Simplifying Campus Laundry Operations.
//             </p>
//             <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-1">
//               <li>Student App for tracking laundry</li>
//               <li>Staff App for scheduling and updates</li>
//               <li>Admin Dashboard for operations</li>
//             </ul>
//             <button className="text-blue-600 font-medium hover:underline">
//               Learn More
//             </button>
//           </div>

//           {/* DG Subscription */}
//           <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
//             <h3 className="text-2xl font-bold text-blue-700 mb-2">
//               DG Subscription
//             </h3>
//             <p className="text-gray-700 mb-4">
//               Cloud-Based Laundry Services for Individuals.
//             </p>
//             <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-1">
//               <li>Flexible subscription plans</li>
//               <li>Delivery tracking with Delivery Boy App</li>
//               <li>Transparent billing and reminders</li>
//             </ul>
//             <button className="text-blue-600 font-medium hover:underline">
//               Explore Plans
//             </button>
//           </div>

//           {/* Ecommerce Platform */}
//           <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
//             <h3 className="text-2xl font-bold text-blue-700 mb-2">
//               Ecommerce Platform
//             </h3>
//             <p className="text-gray-700 mb-4">
//               An Online Marketplace for Laundry Businesses.
//             </p>
//             <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-1">
//               <li>Customer and Partner Apps</li>
//               <li>Procurement for equipment & essentials</li>
//               <li>B2B and B2C integrations</li>
//             </ul>
//             <button className="text-blue-600 font-medium hover:underline">
//               Get Started
//             </button>
//           </div>

//           {/* LaundryOS */}
//           <div className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
//             <h3 className="text-2xl font-bold text-blue-700 mb-2">LaundryOS</h3>
//             <p className="text-gray-700 mb-4">
//               The Operating System for Modern Laundry Businesses.
//             </p>
//             <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-1">
//               <li>Fleet Management for logistics</li>
//               <li>Order & Inventory Management</li>
//               <li>Custom POS & tax automation</li>
//             </ul>
//             <button className="text-blue-600 font-medium hover:underline">
//               Request a Demo
//             </button>
//           </div>
//         </div>
//       </section>

//   );
// }

// <section id="product-section" className="py-16 px-6 rounded-xl">
//         <h2 className="text-5xl font-bold text-gray-800 text-center mb-12">
//           Explore Our Innovative Laundry Solutions
//         </h2>

//         <div className="flex flex-col md:flex-row gap-10 max-w-7xl mx-auto">
//           {/* Left Info Panel */}

//           <div className="fadeIn w-full md:w-1/3 ">
//             <div className="p-6 rounded-3xl bg-[#e5e7eb] shadow-2xl  min-h-[250px] h-full flex items-center justify-center transition-all duration-300">
//               <div className="text-center">
//                 <h3
//                   className="text-xl font-semibold text-black mb-2"
//                   style={{ color: "#1f2937 " }}
//                 >
//                   What Makes Us Special
//                 </h3>
//                 <p className="text-black text-lg mb-4">
//                   {hovered !== null
//                     ? products[hovered].tagline
//                     : "Tailored digital tools for every laundry need — from campus to doorstep."}
//                 </p>

//                 {hovered !== null && (
//                   <div className="transition-opacity duration-300">
//                     <p className="text-gray-700 mb-3">
//                       {products[hovered].description}
//                     </p>
//                     <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-2 text-left">
//                       {products[hovered].bullets.map((point, idx) => (
//                         <li key={idx}>{point}</li>
//                       ))}
//                     </ul>
//                     <p className="text-sm text-blue-600 font-medium">
//                       {products[hovered].cta}
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Right Card Section */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-2/3">
//             {products.map((product, index) => (
//               <div
//                 key={index}
//                 className=" rounded-xl p-5 shadow-md transition-all duration-400 min-h-[250px] hover:scale-101 hover:shadow-2xl"
//                 style={{ backgroundColor: "#e5e7eb", color: "#4b5563 " }}
//                 onMouseEnter={() => setHovered(index)}
//                 onMouseLeave={() => setHovered(null)}
//               >
//                 <div className="flex flex-col ">
//                   {product.icon}
//                   <h4 className="text-xl font-bold text-[#007BB5]">
//                     {product.name}
//                   </h4>
//                   <p className="text-gray-600 text-sm mb-2">
//                     {product.tagline}
//                   </p>
//                   <ul className="list-disc text-sm  pl-5 space-y-0.5">
//                     {product.bullets.slice(0, 3).map((item, idx) => (
//                       <li key={idx}>{item}</li>
//                     ))}
//                   </ul>
//                   <p className="text-sm text-blue-600 font-medium mt-2">
//                     {product.cta}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//old product section
// <section id="product-section" className="py-10 px-6  rounded-xl">
//         <h2
//           className="text-4xl md:text-5xl font-extrabold text-[#374151] text-center mb-16 "
//           data-aos="fade-up"
//         >
//           Explore Our Innovative Laundry Solutions
//         </h2>

//         <div className="flex flex-col md:flex-row gap-10 max-w-7xl mx-auto">
//           {/* Left Info Panel */}
//           <div className="w-full md:w-1/3 animate-fade-in-up">
//             <div className="p-8 rounded-3xl bg-white shadow-xl  h-full flex flex-col justify-center transition-all duration-300 hover:shadow-2xl border-l-4 border-[#007BB5]">
//               <div className="text-center">
//                 <div className="flex justify-center mb-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-10 w-10 text-[#007BB5] animate-pulse"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M9 17v-6h13M9 11H3v6m0 0h6m-6 0l6-6"
//                     />
//                   </svg>
//                 </div>

//                 <h3 className="text-2xl font-bold text-gray-800 mb-3">
//                   What Makes Us Special
//                 </h3>

//                 <p className="text-gray-600 text-base mb-4 transition-opacity duration-300 ease-in-out">
//                   {hovered !== null
//                     ? products[hovered].tagline
//                     : "Tailored digital tools for every laundry need — from campus to doorstep."}
//                 </p>

//                 {hovered !== null && (
//                   <div className="transition-opacity duration-300 ease-in-out">
//                     <p className="text-gray-600 mb-3">
//                       {products[hovered].description}
//                     </p>
//                     <ul className="list-disc pl-5 text-gray-600 space-y-1 text-left mb-3">
//                       {products[hovered].bullets.map((point, idx) => (
//                         <li key={idx}>{point}</li>
//                       ))}
//                     </ul>
//                     <p className="text-sm text-[#007BB5] font-semibold">
//                       {products[hovered].cta}
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Right Cards Section */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-2/3">
//             {products.map((product, index) => (
//               <div
//                 key={index}
//                 className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer"
//                 onMouseEnter={() => setHovered(index)}
//                 onMouseLeave={() => setHovered(null)}
//               >
//                 <div className="flex flex-col gap-3">
//                   <div className="text-[#007BB5] text-3xl mb-1">
//                     {product.icon}
//                   </div>

//                   <h4 className="text-xl font-bold text-[#111827]">
//                     {product.name}
//                   </h4>

//                   <p className="text-sm text-gray-600">{product.tagline}</p>

//                   <ul className="list-disc text-sm text-gray-500 pl-5 space-y-1 mt-2">
//                     {product.bullets.slice(0, 3).map((item, idx) => (
//                       <li key={idx}>{item}</li>
//                     ))}
//                   </ul>

//                   {product.cta && (
//                     <p className="text-sm text-[#007BB5] font-medium mt-3 underline decoration-dashed hover:decoration-solid">
//                       {product.cta}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

// founder
//  <div className="grid grid-cols-1 md:grid-cols-3 p-6 gap-4">
//   {founders.map((founder, idx) => (
//     <div
//       key={idx}
//       className="group relative bg-white/70 backdrop-blur-md overflow-hidden rounded-lg text-center transition transform duration-300 max-w-xs mx-auto hover:shadow-lg hover:scale-105"
//     >
//       {/* Expanding Border Overlay */}
//       <div className="absolute inset-0 border-2 border-gray-700 rounded-lg scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 z-10 pointer-events-none" />

//       {/* Image */}
//       <div className="relative w-full p-2 m-2 z-20">
//         <img
//           src={founder.image}
//           alt={founder.name}
//           className="w-48 h-48 object-cover mx-auto rounded-md mb-3"
//         />
//       </div>

//       {/* Info */}
//       <div className="px-4 pb-4 z-20 relative">
//         <h3 className="text-lg font-semibold text-gray-800">
//           {founder.name}
//         </h3>
//         <p className="text-sm text-gray-600">{founder.title}</p>
//         <p className="text-xs text-gray-500 mt-2">{founder.bio}</p>
//         <a
//           href={founder.linkedin}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-600 font-medium text-xs mt-2 inline-block hover:underline"
//         >
//           LinkedIn
//         </a>
//       </div>
//     </div>
//   ))}
// </div>

// old founde sectioon
{
  /*Founders*/
}
{
  /* <section className="py-16  px-6 ">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">
            Meet Our Founders
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, idx) => (
              <div
                key={idx}
                className=" backdrop-blur-md p-6  rounded-xl shadow-lg text-center hover:scale-[1.02] transition transform duration-300"
                // style={{ backgroundColor: "#e5e7eb" }}
              >
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-28 h-28 rounded-full object-cover mx-auto mb-4 border-4 border-blue-300"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {founder.name}
                </h3>
                <p className="text-sm text-gray-600">{founder.title}</p>
                <p className="text-sm text-gray-500 mt-2">{founder.bio}</p>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium text-sm mt-2 inline-block hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section> */
}

// old home page
// "use client";
// import { useEffect, useState } from "react";
// import {
//   FaUniversity,
//   FaUserFriends,
//   FaShoppingCart,
//   FaCogs,
// } from "react-icons/fa";
// import { motion } from "framer-motion";
// import Image from "next/image";

// import { Truck, Boxes, ReceiptText, Link } from "lucide-react";

// import "./globals.css"; // this is required to activate your custom CSS

// const founders = [
//   {
//     name: "Ravi Ranjan",
//     title: "Co-Founder & CEO",
//     image: "/RajivRanjan.png",
//     bio: "Passionate about transforming the laundry industry through digital innovation.",
//     linkedin: "https://linkedin.com/in/amitkumar",
//   },
//   {
//     name: "Ankur Gupta",
//     title: "Co-Founder & COO",
//     image: "/Ankur.png",
//     bio: "Tech leader building sustainable solutions for textile care.",
//     linkedin: "https://www.linkedin.com/in/ankurdhobig/?originalSubdomain=in",
//   },
//   {
//     name: "Daksh Sabharwal",
//     title: "Co-Founder & CMO",
//     image: "/Daksh.png",
//     bio: "Passionate about transforming the laundry industry through digital innovation.",
//     linkedin: "https://www.linkedin.com/in/dhobig-daksh-sabharwal/",
//   },
// ];

// export default function Home() {
//   const [hovered, setHovered] = useState(null);

//   return (
//     <div className="">
//       {/* Hero */}
//       <section
//         className="relative min-h-screen bg-linear-to-b from-[#e5f0f8] via-white to-[#fefefe] py-12 flex items-center justify-center text-gray-900"
//         aria-label="Hero section for Dhobi G Laundry Booking"
//       >
//         <div className="container mx-auto px-6">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-10">
//             {/* Text Block */}
//             <div className="text-center md:text-left max-w-2xl">
//               <h1 className="text-5xl md:text-8xl font-extrabold leading-tight mb-1 drop-shadow">
//                 Clean Clothes,
//               </h1>
//               <h1 className="text-5xl md:text-8xl font-extrabold leading-tight mb-4 drop-shadow">
//                 Happy Life
//               </h1>

//               <div className="flex flex-col items-center md:items-start text-center md:text-left">
//                 <h2 className="text-2xl md:text-5xl font-semibold text-[#007BB5] mt-4">
//                   Book with Dhobi G
//                 </h2>

//                 <div className="flex gap-4 mt-6 flex-wrap justify-center md:justify-start">
//                   <button className="bg-[#007BB5] text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-[#005f91] transition duration-200">
//                     Book Now
//                   </button>
//                   <button className="bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-xl border shadow hover:bg-gray-100 transition duration-200">
//                     Schedule Later
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Image Block */}
//             <div className="max-w-lg w-full mb-6 md:mb-0">
//               <img
//                 src="/neatly-folded-laundry-wicker-basket/banner-removebg-preview.png"
//                 alt="Laundry Basket Banner"
//                 className="object-contain mx-auto mix-blend-multiply w-full h-auto"
//                 loading="eager"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/*product section */}
//       <section
//         id="product-section"
//         className="py-10  mx-18 shadow bg-gradient-to-br from-[#dbedfa] via-white to-[#fefefe] rounded-xl "
//       >
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Left Heading */}
//           <div className="md:col-span-2 mx-5 flex flex-col items-start">
//             <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
//               Explore Our <span className="text-[#007BB5]">Innovative</span>{" "}
//               Laundry Solutions
//             </h2>
//             <p className="text-md md:text-md text-gray-600 mt-4 max-w-2xl">
//               From seamless fleet tracking to smart inventory and custom POS,
//               our software is built to power modern laundry operations
//               end-to-end.
//             </p>
//           </div>

//           {/* Feature Card */}
//           <div>
//             <div className="rounded-2xl p-6  hover:shadow-lg transition duration-300">
//               <FaCogs className="text-[#007BB5]  text-3xl mb-1" />
//               <h3 className="text-xl font-bold text-[#111827] mb-1">
//                 LaundryOS
//               </h3>
//               <p className="text-sm text-gray-600 mb-4">
//                 The Operating System for Modern Laundry Businesses.
//               </p>
//               <ul className="list-disc pl-5 text-sm text-gray-500 space-y-1">
//                 <li>Fleet Management for optimized logistics</li>
//                 <li>Order & Inventory Management systems</li>
//                 <li>Custom POS and automated tax documentation</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Cards Grid Below */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-7xl mx-auto">
//           <div className="  rounded-2xl p-6  hover:shadow-lg transition duration-300">
//             <FaUniversity className="text-[#007BB5] text-3xl mb-2" />
//             <h3 className="text-xl font-bold text-[#111827] mb-1">DG Campus</h3>
//             <p className="text-sm text-gray-600 mb-4">
//               Simplifying Campus Laundry Operations.
//             </p>
//             <ul className="list-disc pl-5 text-sm text-gray-500 space-y-1">
//               <li>Student App for tracking laundry</li>
//               <li>Staff App for scheduling and updates</li>
//               <li>Centralized Admin Dashboard for operations</li>
//             </ul>
//           </div>

//           <div className="  rounded-2xl p-6  hover:shadow-lg transition duration-300">
//             <FaUserFriends className="text-[#007BB5]  text-3xl mb-2" />
//             <h3 className="text-xl font-bold text-[#111827] mb-1">
//               DG Subscription
//             </h3>
//             <p className="text-sm text-gray-600 mb-4">
//               Cloud-Based Laundry Services for Individuals.
//             </p>
//             <ul className="list-disc pl-5 text-sm text-gray-500 space-y-1">
//               <li>Flexible subscription plans</li>
//               <li>Delivery tracking with Delivery Boy App</li>
//               <li>Transparent billing and reminders</li>
//             </ul>
//           </div>

//           <div className="  rounded-2xl p-6  hover:shadow-lg transition duration-300">
//             <FaShoppingCart className="text-[#007BB5]  text-3xl mb-2" />
//             <h3 className="text-xl font-bold text-[#111827] mb-1">
//               Ecommerce Platform
//             </h3>
//             <p className="text-sm text-gray-600 mb-4">
//               An Online Marketplace for Laundry Businesses.
//             </p>
//             <ul className="list-disc pl-5 text-sm text-gray-500 space-y-1">
//               <li>Customer and Partner Apps</li>
//               <li>Equipment and essentials procurement</li>
//               <li>B2B and B2C integrations</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/*Award and Achivment section*/}
//       <section className="py-16 px-4 ">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-20">
//             Awards & Achievements
//           </h2>

//           {/* Accredited By */}
//           <div className="mb-12">
//             <img
//               src="https://dhobig.com/assets/img/Untitled-2-01.png" // Adjust path as needed
//               alt="Awarded and Accredited by"
//               className="w-full max-w-4xl mx-auto rounded-lg shadow-md"
//             />
//           </div>

//           {/* Top Rated */}
//           <div>
//             <img
//               src="https://dhobig.com/assets/img/Untitled-2-02.png" // Adjust path as needed
//               alt="Top Rated Laundry Service"
//               className="w-full max-w-4xl mx-auto rounded-lg shadow-md"
//             />
//           </div>
//         </div>
//       </section>

//       {/*Partner section*/}
//       <section className="  shadow  bg-gradient-to-br from-[#dbedfa] px-13 via-white to-[#fefefe] rounded-xl   partner-section relative overflow-hidden  py-10 mb-15   mx-18 ">
//         <div className="grid grid-cols-1 md:grid-cols-3  mx-auto">
//           <div className="text-left  md:col-span-1 my-auto ">
//             <h2 className="text-2xl md:text-4xl  text-gray-800 mb-5">
//               Trusted by great <br />{" "}
//               <span className="font-bold text-[#007BB5]">Brands</span>
//             </h2>
//             <p className="text-gray-600 mb-5">
//               We collaborate with industry leaders, institutions, and innovators
//               to redefine laundry services.
//             </p>
//             <button className="bg-[#007BB5] text-white px-5 py-2 rounded-md shadow-md hover:bg-[#005f91]  transition duration-300 font-semibold tracking-wide">
//               Partner With Us
//             </button>
//           </div>

//           {/* Content */}
//           <div className="partner-container  col-span-2   rounded-xl w-full h-full    relative z-10 max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-10">
//             {/* Logos */}
//             <div className="partner-logos flex  p-4 flex-wrap items-center justify-center gap-8 flex-1 min-w-[300px] m-5">
//               {[
//                 {
//                   name: "TN SKILL",
//                   logo: "https://www.tnskill.tn.gov.in/wp-content/uploads/2025/02/tnskill-logo-250x125-1.png",
//                 },
//                 {
//                   name: "TNSDC",
//                   logo: "https://media.licdn.com/dms/image/v2/C4D0BAQHzlqqP3UW3Nw/company-logo_200_200/company-logo_200_200/0/1630574627695?e=2147483647&v=beta&t=zwjlYucxiKhVDtk1wrn1TKWnr4VZKDNzObJiThjuN7g",
//                 },
//               ].map((partner, i) => (
//                 <div
//                   key={i}
//                   className="bg-white rounded-[18px] p-8 shadow-md transition-all duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-1 hover:shadow-xl"
//                 >
//                   <img
//                     src={partner.logo}
//                     alt={partner.name}
//                     className="h-16 w-auto"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* {new founder section} */}
//       <section className="  px-2 py-10  mx-18 my-5 shadow bg-gradient-to-br  from-[#dbedfa] via-white to-[#fefefe] rounded-xl">
//         {/* <div className="max-w-6xl mx-auto text-center"> */}
//         <h2 className="text-3xl font-bold text-gray-700 text-center mb-2">
//           Startup spirit meets laundry excellence. <br /> Get to know our
//           founding team.
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 p-6 gap-4">
//           {founders.map((founder, idx) => (
//             <div
//               key={idx}
//               className="group relative  backdrop-blur-md overflow-hidden rounded-lg text-center transition transform duration-300 max-w-xs mx-auto hover:shadow-lg hover:scale-103"
//             >
//               {/* Top-Right expanding border */}
//               <div
//                 className="absolute top-0 right-0 w-20 h-20 border-t-1 border-r-1 border-gray-700 rounded-tr-md z-10
//         group-hover:w-full group-hover:h-full group-hover:rounded-lg transition-all duration-400 ease-in-out pointer-events-none"
//               />

//               {/* Bottom-Left expanding border */}
//               <div
//                 className="absolute bottom-0 left-0 w-20 h-20 border-b-1 border-l-1 border-gray-700 rounded-bl-md z-10
//         group-hover:w-full group-hover:h-full group-hover:rounded-lg transition-all duration-400 ease-in-out pointer-events-none"
//               />

//               {/* Image */}
//               <div className="relative w-full p-2 m-2 z-20">
//                 <img
//                   src={founder.image}
//                   alt={founder.name}
//                   className="w-48 h-48 object-cover mx-auto rounded-md mb-3"
//                 />
//               </div>

//               {/* Info */}
//               <div className="px-4 pb-4 z-20 relative">
//                 <h3 className="text-xl font-bold text-[#111827] mb-1">
//                   {founder.name}
//                 </h3>
//                 <p className="text-sm text-gray-600">{founder.title}</p>
//                 <p className="text-xs text-gray-500 mt-2">{founder.bio}</p>
//                 <a
//                   href={founder.linkedin}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 font-medium text-xs mt-2 inline-block hover:underline"
//                 >
//                   LinkedIn
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* </div> */}
//       </section>
//     </div>
//   );
// }

// <div className="partner-container  col-span-2   rounded-xl w-full h-full    relative z-10 max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-10">
//             {/* Logos */}
//             <div className="partner-logos flex  p-4 flex-wrap items-center justify-center gap-8 flex-1 min-w-[300px] m-5">
//               {[
//                 {
//                   name: "TN SKILL",
//                   logo: "https://www.tnskill.tn.gov.in/wp-content/uploads/2025/02/tnskill-logo-250x125-1.png",
//                 },
//                 {
//                   name: "TNSDC",
//                   logo: "https://media.licdn.com/dms/image/v2/C4D0BAQHzlqqP3UW3Nw/company-logo_200_200/company-logo_200_200/0/1630574627695?e=2147483647&v=beta&t=zwjlYucxiKhVDtk1wrn1TKWnr4VZKDNzObJiThjuN7g",
//                 },
//               ].map((partner, i) => (
//                 <div
//                   key={i}
//                   className="bg-white rounded-[18px] p-8 shadow-md transition-all duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-1 hover:shadow-xl"
//                 >
//                   <img
//                     src={partner.logo}
//                     alt={partner.name}
//                     className="h-16 w-auto"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>



import { useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    apartment: "",
    password: "",
    confirmPassword: "",
    pincode: "",
    state: "",
    city: "",
    userType: "CUSTOMER", // default user_type
    country: "India",     // default country
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const payload = {
      username: formData.email, // using email as username
      email: formData.email,
      password: formData.password,
      first_name: formData.firstName,
      last_name: formData.lastName,
      phone_number: formData.phone,
      address_line1: formData.address,
      address_line2: formData.apartment,
      postal_code: formData.pincode,
      state: formData.state,
      city: formData.city,
      country: formData.country,
      user_type: formData.userType,
    };

    console.log("Submitting payload:", payload);

    try {
      const response = await fetch("http://localhost:8000/api/auth/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);
        alert("Account created successfully!");
      } else {
        let errorMessage = "Registration failed. Please try again.";
        try {
          const errorData = await response.json();
          console.error("Validation error:", errorData);

          if (typeof errorData === "object" && errorData !== null) {
            const firstKey = Object.keys(errorData)[0];
            const firstError = errorData[firstKey];
            if (Array.isArray(firstError)) {
              errorMessage = firstError[0];
            } else if (typeof firstError === "string") {
              errorMessage = firstError;
            }
          }
        } catch (jsonError) {
          const errorText = await response.text();
          console.error("Non-JSON error response:", errorText);
          errorMessage = errorText || "Server returned an unexpected error.";
        }

        alert(errorMessage);
      }
    } catch (error) {
      console.error("Unexpected error during signup:", error);
      const errorMessage = error?.message || error?.toString() || "An unknown error occurred.";
      alert("Something went wrong: " + errorMessage);
    }
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-100 pt-12">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Your Dhobi G Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">First Name</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" placeholder="John" required />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Last Name</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Doe" required />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" placeholder="9876543210" required />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" placeholder="you@example.com" required />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Address</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Street Name, Locality" required />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Apartment / Area (Optional)</label>
            <input type="text" name="apartment" value={formData.apartment} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Apartment, Tower, Floor" />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Pincode</label>
            <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" placeholder="701301" required />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">State</label>
              <input type="text" name="state" value={formData.state} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Tamil Nadu" required />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">City</label>
              <input type="text" name="city" value={formData.city} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Chennai" required />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" placeholder="••••••••" required />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Confirm Password</label>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" placeholder="••••••••" required />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
