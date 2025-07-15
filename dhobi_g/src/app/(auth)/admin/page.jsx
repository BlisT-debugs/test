"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import * as FaIcons from "react-icons/fa"; // To dynamically render icons like FaGem


export default function TypesOfServices() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/website-content/");
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
    <section className="py-10 px-6 bg-white">
      <h2 className="text-4xl font-bold text-center mb-10">
        Our Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services.map((service) => {
          const IconComponent = FaIcons[service.icon] || FaIcons.FaCogs;

          return (
            <div
              key={service.id}
              className="bg-white shadow-md rounded-xl p-6 text-center transition hover:shadow-xl hover:scale-105"
            >
              <IconComponent className={`text-4xl mb-4 mx-auto ${service.color || "text-blue-600"}`} />
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.subtitle}</p>
              <p className="text-sm text-gray-500 mt-2">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
