"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  FaUniversity,
  FaUserFriends,
  FaShoppingCart,
  FaCogs,
} from "react-icons/fa";
import { motion } from "framer-motion";
import axios from "axios";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const founders = [
  {
    name: "Ravi Ranjan",
    title: "Co-Founder & CEO",
    image: "/RajivRanjan.png",
    bio: "Passionate about transforming the laundry industry through digital innovation.",
    linkedin: "https://linkedin.com/in/amitkumar",
  },
  {
    name: "Ankur Gupta",
    title: "Co-Founder & COO",
    image: "/Ankur.png",
    bio: "Tech leader building sustainable solutions for textile care.",
    linkedin: "https://www.linkedin.com/in/ankurdhobig/?originalSubdomain=in",
  },
  {
    name: "Daksh Sabharwal",
    title: "Co-Founder & CMO",
    image: "/Daksh.png",
    bio: "Passionate about transforming the laundry industry through digital innovation.",
    linkedin: "https://www.linkedin.com/in/dhobig-daksh-sabharwal/",
  },
];

export default function Home() {
  const router = useRouter();
  const [partners, setPartners] = useState([]);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setIsAuthenticated(!!token);
  }, []);

  const handleBooking = () => {
    if (isAuthenticated) {
      router.push("/order");
    } else {
      alert("Please log in to place an order.");
      router.push("/login");
    }
  };

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/website-content/"
        );
        const partnerSection = res.data.find(
          (section) => section.slug === "partner"
        );
        if (partnerSection) {
          setPartners(partnerSection.blocks);
        }
      } catch (err) {
        console.error("Error fetching partner data", err);
      }
    };

    fetchPartners();
  }, []);
  return (
    <div>
      {/* Hero Section */}
      <motion.section
        className="relative min-h-screen bg-gradient-to-b from-[#f4f2fe] via-white to-white py-12 flex items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {/* LEFT TEXT SECTION */}
          <motion.div
            variants={fadeInUp}
            className="text-center md:text-left max-w-2xl"
          >
            {/* Callout Badge */}
            <span className="inline-block bg-[#007BB5] text-white text-xs font-bold uppercase tracking-wide px-4 py-1 rounded-full mb-4 animate-fadeUp delay-50">
              New: Subscription Laundry Plans
            </span>

            <h1 className="text-5xl text-shadow md:text-8xl font-extrabold leading-tight mb-1 animate-fadeUp delay-100">
              Clean Clothes,
            </h1>
            <h1 className="text-5xl text-shadow md:text-8xl font-extrabold leading-tight mb-4 animate-fadeUp delay-300">
              Happy Life
            </h1>
            <h2 className="text-2xl md:text-5xl font-semibold text-[#007BB5] mt-4 animate-fadeUp delay-500">
              Book with Dhobi G
            </h2>

            {/* Supporting Line */}
            <p className="text-lg text-gray-600 mt-4 max-w-xl animate-fadeUp delay-700">
              Fast, hygienic, and affordable laundry services powered by
              technology.
            </p>

            {/* Trust Line */}
            <p className="text-sm text-gray-500 mt-3 animate-fadeUp delay-900">
              Trusted by 10,000+ customers and top institutions in India
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-6 flex-wrap justify-center md:justify-start">
              <motion.button
                onClick={() => router.push("/order")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBooking}
                className="bg-[#007BB5] text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-[#005f91] transition duration-200"
              >
                Book Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-xl border shadow hover:bg-gray-100 transition duration-200"
              >
                Schedule Later
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE SECTION */}
          <motion.div variants={fadeInUp} className="max-w-md w-full">
            <img
              src="/neatly-folded-laundry-wicker-basket/banner-removebg-preview.png"
              alt="Laundry Basket"
              className="object-contain mx-auto mix-blend-multiply w-full h-auto animate-float"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* product section  */}
      <motion.section
        id="product-section"
        className="py-10  mx-18 shadow bg-gradient-to-br from-[#dbedfa] via-white to-[#fefefe] rounded-xl "
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Heading */}
          <div className="md:col-span-2 mx-5 flex flex-col items-start">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
              Explore Our <span className="text-[#007BB5]">Innovative</span>{" "}
              Laundry Solutions
            </h2>
            <p className="text-md md:text-md text-gray-600 mt-4 max-w-2xl">
              From seamless fleet tracking to smart inventory and custom POS,
              our software is built to power modern laundry operations
              end-to-end.
            </p>
          </div>

          {/* Feature Card */}
          <div>
            <div className="rounded-2xl p-6  hover:shadow-lg transition duration-300">
              <FaCogs className="text-[#007BB5]  text-3xl mb-1" />
              <h3 className="text-xl font-bold text-black mb-1">LaundryOS</h3>
              <p className="text-sm text-black mb-4">
                The Operating System for Modern Laundry Businesses.
              </p>
              <ul className="list-disc pl-5 text-sm text-gray-500 space-y-1">
                <li>Fleet Management for optimized logistics</li>
                <li>Order & Inventory Management systems</li>
                <li>Custom POS and automated tax documentation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cards Grid Below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-7xl mx-auto">
          <div className="  rounded-2xl p-6  hover:shadow-lg transition duration-300">
            <FaUniversity className="text-[#007BB5] text-3xl mb-2" />
            <h3 className="text-xl font-bold text-black mb-1">DG Campus</h3>
            <p className="text-sm text-black mb-4">
              Simplifying Campus Laundry Operations.
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-500 space-y-1">
              <li>Student App for tracking laundry</li>
              <li>Staff App for scheduling and updates</li>
              <li>Centralized Admin Dashboard for operations</li>
            </ul>
          </div>

          <div className="  rounded-2xl p-6  hover:shadow-lg transition duration-300">
            <FaUserFriends className="text-[#007BB5]  text-3xl mb-2" />
            <h3 className="text-xl font-bold text-black mb-1">
              DG Subscription
            </h3>
            <p className="text-sm text-black mb-4">
              Cloud-Based Laundry Services for Individuals.
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-500 space-y-1">
              <li>Flexible subscription plans</li>
              <li>Delivery tracking with Delivery Boy App</li>
              <li>Transparent billing and reminders</li>
            </ul>
          </div>

          <div className="  rounded-2xl p-6  hover:shadow-lg transition duration-300">
            <FaShoppingCart className="text-[#007BB5]  text-3xl mb-2" />
            <h3 className="text-xl font-bold text-black mb-1">
              Ecommerce Platform
            </h3>
            <p className="text-sm text-black mb-4">
              An Online Marketplace for Laundry Businesses.
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-500 space-y-1">
              <li>Customer and Partner Apps</li>
              <li>Equipment and essentials procurement</li>
              <li>B2B and B2C integrations</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/*Award and Achivment section*/}
      <section className="py-16 px-4 ">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-20">
            Awards & Achievements
          </h2>

          {/* Accredited By */}
          <div className="mb-12">
            <img
              src="https://dhobig.com/assets/img/Untitled-2-01.png" // Adjust path as needed
              alt="Awarded and Accredited by"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-md"
            />
          </div>

          {/* Top Rated */}
          <div>
            <img
              src="https://dhobig.com/assets/img/Untitled-2-02.png" // Adjust path as needed
              alt="Top Rated Laundry Service"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/*Partner section*/}
      <section className="  shadow  bg-gradient-to-br from-[#dbedfa] px-13 via-white to-[#fefefe] rounded-xl   partner-section relative overflow-hidden  py-10 mb-15   mx-18 ">
        <div className="grid grid-cols-1 md:grid-cols-3  mx-auto">
          <div className="text-left  md:col-span-1 my-auto ">
            <h2 className="text-2xl md:text-4xl  text-black mb-5">
              Trusted by great <br />{" "}
              <span className="font-bold text-[#007BB5]">Brands</span>
            </h2>
            <p className="text-gray-600 mb-5">
              We collaborate with industry leaders, institutions, and innovators
              to redefine laundry services.
            </p>
            <button className="bg-[#007BB5] text-white px-5 py-2 rounded-md shadow-md hover:bg-[#005f91]  transition duration-300 font-semibold tracking-wide">
              Partner With Us
            </button>
          </div>

          {/* Content */}

          <section className="py-10 px-4">
            <div className="flex flex-wrap justify-center items-center gap-8">
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="flex flex-col items-center space-y-2 bg-white rounded-xl p-4 shadow hover:scale-105 transition"
                >


                  <img
                    src={partner.image}
                    alt={partner.title}
                    className="h-16 w-auto object-contain"
                  />
                  <p className="text-sm font-medium text-gray-700">
                    {partner.title}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      {/* Founders Section with Animation */}
      <section className="px-2 py-10 mx-18 my-5 shadow bg-gradient-to-br from-[#dbedfa] via-white to-[#fefefe] rounded-xl">
        <motion.h2
          className="text-4xl font-extrabold text-black text-center mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Meet the Visionaries Behind Dhobi G
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          A team of changemakers with a mission to revolutionize the laundry
          industry through technology, service, and sustainable innovation.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 p-6 gap-4">
          {founders.map((founder, idx) => (
            <motion.div
              key={idx}
              className="group relative shadow backdrop-blur-md overflow-hidden rounded-lg text-center transition transform duration-300 max-w-xs mx-auto hover:shadow-lg hover:scale-103"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.3, delay: idx * 0.2 }}
            >
              {/* <div className="absolute top-0 right-0 w-20 h-20 border-t-1 border-r-1 border-gray-700 rounded-tr-md z-10  transition-all duration-400 ease-in-out pointer-events-none" /> */}
              {/* <div className="absolute bottom-0 left-0 w-20 h-20 border-b-1 border-l-1 border-gray-700 rounded-bl-md z-10 transition-all duration-400 ease-in-out pointer-events-none" /> */}
              <div className="relative w-full p-2 m-2 z-20">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-48 h-48 object-cover mx-auto rounded-md mb-3"
                />
              </div>
              <div className="px-4 pb-4 z-20 relative">
                <h3 className="text-xl font-bold text-[#111827] mb-1">
                  {founder.name}
                </h3>
                <p className="text-sm text-gray-600">{founder.title}</p>
                <p className="text-xs text-gray-500 mt-2">{founder.bio}</p>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium text-xs mt-2 inline-block hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
