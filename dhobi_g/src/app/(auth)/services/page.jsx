"use client";

import {
  FaTshirt,
  FaPumpSoap,
  FaSteam,
  FaTruckPickup,
  FaSprayCan,
  FaGem,
} from "react-icons/fa";
import { FaBolt } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import * as FaIcons from "react-icons/fa";

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/website-content/"
        );
        const section = res.data.find((s) => s.slug === "types-of-services");
        if (section) {
          setServices(section.blocks);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);

  return (
    <div className="min-h-screen p-6 mt-35 sm:p-12 space-y-24 bg-white bg-top bg-repeat">
      {/* 🔥 Hero Heading + Image */}
      <section className="max-w-6xl mx-auto" data-aos="fade-up">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          {/* Left Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <span className="inline-block bg-pink-100 text-pink-600 text-sm px-4 py-1 rounded-full mb-4 animate-pulse shadow">
              🔥 Trusted by 10,000+ Customers
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-black leading-tight">
              Experience{" "}
              <span className="bg-gradient-to-r text-black">
                Premium <span className="text-[#007BB5]">Laundry Care</span>
              </span>
            </h1>
            {/* <div className="w-20 h-1 bg-[#007BB5] rounded-full mb-4 mx-auto md:mx-0" /> */}
            <div className="w-20 h-1 bg-gradient-to-r from-[#007BB5] via-[#00A6D6] to-[#007BB5] rounded-full mb-4 mx-auto md:mx-0" />

            <p className="text-gray-600 text-lg max-w-md">
              India’s most trusted laundry partner — clean clothes, on time,
              every time.
            </p>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/service.png"
              alt="Laundry illustration"
              width={400}
              height={350}
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* 🧺 Service Types */}
      <section
        className="px-10 mx-18 shadow bg-gradient-to-br from-[#e6f0f7] via-white to-[#fefefe] rounded-xl"
        data-aos="fade-up"
      >
        <div className="m-5 py-10">
          <h2 className="text-3xl font-bold text-center text-black">
            Types of Services
          </h2>

          {/* Gradient Underline */}
          <div className="w-16 h-1 bg-gradient-to-r from-[#007BB5] via-[#00A6D6] to-[#007BB5] mx-auto mt-2 rounded-full" />

          {/* Grid for Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
            {services.map((service) => {
              const IconComponent = FaIcons[service.icon] || FaIcons.FaCogs;

              return (
                <div
                  key={service.id}
                  className="bg-white shadow-md rounded-xl p-6 text-center transition hover:shadow-xl hover:scale-105"
                  data-aos="zoom-in"
                >
                  <IconComponent
                    className={`text-4xl mb-4 mx-auto  text-${
                      service.color
                    }`}
                  />
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.subtitle}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 🧼 Best Services */}
      <section
        className="bg-gradient-to-br from-[#dbedfa] via-white to-[#fefefe] backdrop-blur-md p-10 rounded-3xl shadow-2xl max-w-screen-xl mx-auto"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold text-center text-black">
          Best Laundry Services We Offer
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto mt-2 rounded-full" />

        {/* Mobile Carousel */}
        <div className="flex sm:hidden overflow-x-auto gap-6 py-8 snap-x snap-mandatory px-2 scroll-smooth">
          {bestServices.map((card, idx) => (
            <div
              className="min-w-[80%] snap-center"
              data-aos="fade-up"
              key={idx}
            >
              <ServiceCard {...card} />
            </div>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
          {bestServices.map((card, idx) => (
            <div data-aos="fade-up" key={idx}>
              <ServiceCard {...card} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}



// 🔁 Best Services
const bestServices = [
  {
    icon: <FaTshirt />,
    title: "Washing & Folding",
    price: "₹50 / kg",
    desc: "Cleaned, dried & folded neatly.",
    color: "text-blue-600",
  },
  {
    icon: <FaPumpSoap />,
    title: "Dry Cleaning",
    price: "₹150 / item",
    desc: "Safe for premium/delicate wear.",
    color: "text-green-600",
  },
  {
    icon: <FaSteam />,
    title: "Steam Ironing",
    price: "₹10 / item",
    desc: "Crisp, wrinkle-free finish.",
    color: "text-purple-600",
  },
  {
    icon: <FaTruckPickup />,
    title: "Pickup & Delivery",
    price: "Free above ₹499",
    desc: "Doorstep laundry convenience.",
    color: "text-red-600",
  },
  {
    icon: <FaSprayCan />,
    title: "Stain Removal",
    price: "₹30 / spot",
    desc: "Tough stains? We handle them.",
    color: "text-yellow-600",
  },
  {
    icon: <FaGem />,
    title: "Fabric Spa",
    price: "₹200+ / item",
    desc: "Designer clothes need expert care.",
    color: "text-pink-600",
  },
];

// 🔁 Card Components
function VerticalServiceCard({ icon, title, subtitle, description, color }) {
  return (
    <div className=" p-6 rounded-2xl shadow-inner hover:shadow-lg transition-transform hover:scale-105 flex flex-col items-center text-center space-y-3 h-full border border-gray-200">
      <div
        className={`text-5xl ${color} transition-transform duration-300 hover:rotate-6`}
      >
        {icon}
      </div>
      <h3 className={`text-lg font-bold ${color}`}>{title}</h3>
      <p className="text-gray-600 text-sm font-medium">{subtitle}</p>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
}

function ServiceCard({ icon, title, price, desc, color }) {
  return (
    <div className=" p-6 rounded-2xl shadow-inner hover:shadow-lg transition-transform hover:scale-105 flex flex-col items-center text-center h-full border border-gray-200">
      <div
        className={`${color} text-5xl mb-3 transition-transform duration-300 hover:rotate-6`}
      >
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-blue-700 font-semibold">{price}</p>
      <p className="text-gray-600 mt-1 text-sm">{desc}</p>
    </div>
  );
}
