"use client";

import { useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: "",           // ✅ New field
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
    userType: "CUSTOMER",   // default user_type
    country: "India",       // default country
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
      username: formData.username,       // ✅ Use user-entered username
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
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Username</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" placeholder="your_username" required />
          </div>

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
