"use client";

import { motion } from "framer-motion";

const faqData = [
  {
    question: "How does Dhobi G handle my clothes?",
    answer:
      "We use high-quality, fabric-specific detergents and ensure separate processing for each customer to maintain hygiene.",
  },
  {
    question: "What areas do you currently serve?",
    answer:
      "Dhobi G operates across multiple cities in India. Check the app or website for live service areas.",
  },
  {
    question: "Can I schedule pickups through the app?",
    answer:
      "Yes! You can schedule, reschedule, and track your pickups and deliveries through our mobile app.",
  },
  {
    question: "How does Dhobi G handle my clothes?",
    answer:
      "We use high-quality, fabric-specific detergents and ensure separate processing for each customer to maintain hygiene.",
  },
  {
    question: "What areas do you currently serve?",
    answer:
      "Dhobi G operates across multiple cities in India. Check the app or website for live service areas.",
  },
  {
    question: "Can I schedule pickups through the app?",
    answer:
      "Yes! You can schedule, reschedule, and track your pickups and deliveries through our mobile app.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-16   text-gray-800 ">
      {/* Hero Section */}

      <section className="relative pt-45 text-center w-full mx-auto mb-14 px-4 py-20 rounded-xl bg-gradient-to-b from-[#fdfdfd] via-white to-white  overflow-hidden">
        {/* Glowing circle background effect */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-blue-100 opacity-20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-4 relative z-10"
        >
          ABOUT <span className="text-[#007BB5]">DHOBIG</span>
        </motion.h1>

        <div className="w-24 h-1 bg-gradient-to-r from-[#007BB5] to-[#00bcd4] mx-auto mb-6 rounded-full relative z-10" />

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 relative z-10"
        >
          Your ultimate laundry companion. We bring convenience, care, and
          cleanliness to your doorstep—serving hostels, PGs, and homes with
          tech-powered laundry across India.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative z-10"
        >
          <a
            href="#values"
            className="inline-block bg-[#007BB5] hover:bg-[#005f91] text-white px-10 py-4 rounded-full text-lg font-medium shadow-lg transition-transform transform hover:scale-105"
          >
            Discover Why We're Different
          </a>
        </motion.div>

        {/* Trust Badges */}
        <div className="mt-14 flex flex-wrap justify-center items-center gap-10 relative z-10">
          {[
            { label: "Trusted by", value: "10,000+ users" },
            { label: "Deliveries made", value: "1M+ orders" },
            { label: "Customer Satisfaction", value: "98% positive" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
              className="text-center"
            >
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="text-xl font-bold text-[#007BB5]">{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Dhobi G Section (With Image + Color Cards) */}
      <section className=" py-16 px-4 rounded-2xl">
        <div className="max-w-7xl mx-auto">
          {/* Heading centered above both image + text */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937] text-center mb-12">
            Why Choose DhobiG?
          </h2>

          {/* Layout: text + image side by side */}
          <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* Left: Cards */}
            <div className="w-full lg:w-1/2 space-y-6">
              {/* Card 1 */}
              <div className="bg-white p-5 rounded-xl shadow flex items-start gap-4">
                <div className="text-3xl bg-blue-100 text-blue-600 p-3 rounded-full">
                  🚀
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#1f2937]">
                    Fast Pickup & Doorstep Delivery
                  </h3>
                  <p className="text-gray-600 text-sm">
                    No queues. No waiting. We come to you.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-5 rounded-xl shadow flex items-start gap-4">
                <div className="text-3xl bg-purple-100 text-purple-600 p-3 rounded-full">
                  💰
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#1f2937]">
                    Affordable for Students & Professionals
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Flexible plans that suit your budget.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-5 rounded-xl shadow flex items-start gap-4">
                <div className="text-3xl bg-red-100 text-red-600 p-3 rounded-full">
                  🌿
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#1f2937]">
                    Eco-Friendly & Gentle Care
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Safe on clothes and the planet.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-5 rounded-xl shadow flex items-start gap-4">
                <div className="text-3xl bg-green-100 text-green-600 p-3 rounded-full">
                  📲
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#1f2937]">
                    Real-Time Tracking & Updates
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Know your laundry status at every step.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Image with full height */}
            <div className="w-full lg:w-1/2 h-full flex justify-center">
              <img
                src="https://images.pexels.com/photos/8774363/pexels-photo-8774363.jpeg"
                alt="Laundry Service"
                className="rounded-2xl object-cover w-full max-h-[460px] lg:h-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How Dhobi G Works */}
      <section className="bg-white rounded-xl px-6 py-12 max-w-7xl mx-auto my-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          How DhobiG Works
        </h2>

        <div className="relative flex justify-between items-start text-center">
          {/* Horizontal line */}
          <div className="absolute top-[36px] left-0 w-full border-t-2 border-blue-500 z-0"></div>

          {[
            {
              title: "Schedule Pickup",
              step: "STEP 1",
              desc: "Easily book your pickup using our app or website at your preferred time.",
              icon: "🧺",
            },
            {
              title: "Wash & Iron",
              step: "STEP 2",
              desc: "Your clothes are sorted, cleaned, and ironed with utmost care using fabric-specific detergents.",
              icon: "🧼",
            },
            {
              title: "Pack Neatly",
              step: "STEP 3",
              desc: "Each item is folded neatly and packed in hygienic, eco-friendly bags.",
              icon: "📦",
            },
            {
              title: "Deliver to Door",
              step: "STEP 4",
              desc: "Fresh, clean clothes are delivered to your doorstep within 24–48 hours.",
              icon: "🚚",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative z-10 flex-1 px-2 flex flex-col items-center"
            >
              {/* STEP label */}
              <p className="text-sm font-medium text-gray-500 mb-1">
                {item.step}
              </p>

              {/* Dot */}
              <div className="w-4 h-4 bg-blue-600 rounded-full z-10 border-4 border-white shadow-md mt-1 mb-6"></div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed px-2">
                {item.desc}
              </p>

              {/* Icon */}
              <div className="text-3xl mt-4">{item.icon}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6" id="faq">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#1f2937] mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
            <div className="space-y-6">
              {faqData
                .slice(0, Math.ceil(faqData.length / 2))
                .map((faq, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-[#2563eb]">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 mt-2">{faq.answer}</p>
                  </div>
                ))}
            </div>

            <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gray-200" />

            <div className="space-y-6">
              {faqData
                .slice(Math.ceil(faqData.length / 2))
                .map((faq, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-[#2563eb]">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 mt-2">{faq.answer}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#f9fafb] py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#1f2937] mb-12">
            💬 What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 text-left"
            >
              <p className="text-gray-800 italic mb-4">
                "Dhobi G made my hostel life so much easier! The weekly pickups
                are always on time."
              </p>
              <p className="text-sm text-gray-500 font-medium">
                – Aayushi, IIT Delhi
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500 text-left"
            >
              <p className="text-gray-800 italic mb-4">
                "Very professional service. Our office uses Dhobi G for all
                staff uniforms!"
              </p>
              <p className="text-sm text-gray-500 font-medium">
                – HR Manager, Flipkart
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20 px-6 text-center rounded-lg shadow-md">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1f2937] mb-4">
            📣 We Value Your Feedback
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Help us improve. Tell us what you love or what we can do better —
            your opinion shapes our service.
          </p>
          <a
            href="/contactus"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-lg text-lg font-semibold transition-transform transform hover:scale-105"
          >
            Share Your Thoughts
          </a>
        </div>
      </section>
    </div>
  );
}
