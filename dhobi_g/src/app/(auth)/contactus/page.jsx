"use client";
import { useState, useRef } from "react";

export default  function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const formSectionRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const payload = {
      full_name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/contact/submit/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);
        alert("Your message has been sent successfully!");
        // Reset the form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        console.error("Error submitting contact form:", errorData);
        const firstKey = Object.keys(errorData)[0];
        const firstError = Array.isArray(errorData[firstKey])
          ? errorData[firstKey][0]
          : errorData[firstKey];
        alert("Error: " + firstError);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-white mt-15">
      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Contact Information Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-blue-600 mb-4">
              contact us
            </h3>
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              Get in touch with us for
              <br />
              more information
            </h3>
            <p className="text-gray-600">
              if you need a help or have question, we're here for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
            {/* Book Consultation */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transform translate-y-8 animate-[slideInUp_0.8s_ease-out_0.3s_forwards]">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💬</span>
                </div>
                <span className="text-2xl text-blue-600">↗</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Book free consultation
              </h4>
              <p className="text-gray-600 mb-4">Speak to our friendly team</p>
              <a
                href="#"
                className="text-blue-600 font-medium hover:text-blue-700 underline"
              >
                Book now
              </a>
            </div>

            {/* Email */}
            <div className="bg-blue-600 rounded-2xl p-8 shadow-lg text-white transform translate-y-8 animate-[slideInUp_0.8s_ease-out_0.4s_forwards]">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">✉️</span>
                </div>
                <span className="text-2xl">↗</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Email us</h4>
              <p className="mb-4 opacity-90">we're here to help</p>
              <a
                href="mailto:info@email.ch"
                className="font-medium hover:opacity-80 underline"
              >
                info@email.ch
              </a>
            </div>

            {/* Call */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transform translate-y-8 animate-[slideInUp_0.8s_ease-out_0.5s_forwards]">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📞</span>
                </div>
                <span className="text-2xl text-blue-600">↗</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Call Us</h4>
              <p className="text-gray-600 mb-4">Mon to Fri from 9am to 5pm</p>
              <a
                href="tel:+41123456789"
                className="text-blue-600 font-medium hover:text-blue-700 underline"
              >
                +41 12 345 67 89
              </a>
            </div>
          </div>

          {/* Know More Button */}
          <div className="text-center">
            <button
              onClick={scrollToForm}
              className="inline-block border-2 border-blue-600 rounded-full p-4 hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer group"
            >
              <div className="text-blue-600 text-xl group-hover:text-white transition-colors duration-300">
                ↓
              </div>
              <div className="text-xs uppercase tracking-wider text-blue-600 group-hover:text-white transition-colors duration-300">
                Know More
              </div>
            </button>
          </div>
        </div>

        {/* Form Section */}
        <div
          ref={formSectionRef}
          className="max-w-4xl mx-auto opacity-0 animate-[fadeInUp_0.8s_ease-out_1s_forwards]"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Just fill out the form and hit submit.
            </h1>
            <p className="text-gray-600">we're here to assist</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 transform translate-y-8 animate-[slideInUp_0.8s_ease-out_1.1s_forwards]">
            <div className="flex items-start space-x-12">
              {/* Logo */}

              {/* Form */}
              <div className="flex-1 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name.."
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-black"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address.."
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-black"
                      required
                    />
                  </div>
                </div>

                
                 

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your Phone Number.."
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-black"
                      required
                    />
                  </div>
                  
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message"
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-white text-black"
                    required
                  ></textarea>
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
