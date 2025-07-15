"use client";

import { useState } from "react";
import { FaCheckCircle, FaBox } from "react-icons/fa";
import { toast } from "react-hot-toast";
import axios from "axios";

const steps = ["Service", "Schedule", "Details", "Confirm", "Payment"];

export default function OrderPage() {
  const [step, setStep] = useState(0);
  const [isPaymentDone, setIsPaymentDone] = useState(false);

  const [service, setService] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const convertToISODateTime = (dateStr, timeStr) => {
    const date = new Date(`${dateStr}T00:00:00`);
    const [time, modifier] = timeStr.split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    if (modifier === "PM" && hours < 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;

    date.setHours(hours);
    date.setMinutes(minutes);
    return date.toISOString();
  };

  const sendOrderToBackend = async () => {
    try {
      const token = localStorage.getItem("access_token");
      // const token = localStorage.getItem("access_token");

      console.log(token);
      const response = await axios.post(
        "http://127.0.0.1:8000/api/orders/",
        {
          name,
          phone,
          service_type:
            service === "Wash & Fold"
              ? "wash_and_fold"
              : service === "Dry Cleaning"
              ? "dry_cleaning"
              : service === "Steam Ironing"
              ? "ironing"
              : "wash_and_fold", // fallback
          pickup_time: convertToISODateTime(pickupDate, pickupTime),
          delivery_time: convertToISODateTime(deliveryDate, deliveryTime),
          special_instructions: "Please be on time",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("Order successfully placed!");
      console.log("✅ Order response:", response.data);
    } catch (error) {
      console.error("❌ Order failed:", error);
      toast.error("Failed to place order. Try again.");
    }
  };

  const getMinDeliveryDate = () => {
    if (!pickupDate) return "";
    const date = new Date(pickupDate);
    date.setDate(date.getDate() + 2);
    return date.toISOString().split("T")[0];
  };

  const nextStep = () => {
    if (step === 0 && !service) return toast.error("Select a service");
    if (
      step === 1 &&
      (!pickupDate || !pickupTime || !deliveryDate || !deliveryTime)
    ) {
      return toast.error("Fill both pickup and delivery info");
    }
    if (step === 2 && (!name || !phone || !address)) {
      return toast.error("Fill all personal details");
    }
    setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className="bg-gray-100 min-h-screen mt-20">
      {/* Hero Section */}
      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url('/hero-laundry.jpg')` }}
      >
        <div className="absolute inset-0 bg-[#007BB5]/70"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold">Book a Laundry Pickup</h1>
          <p className="text-lg mt-2">
            Schedule a pickup in just a few easy steps
          </p>
        </div>
      </div>

      <div className="p-6 max-w-5xl mx-auto -mt-10">
        {/* Stepper */}
        <div className="flex justify-between items-center mb-10">
          {steps.map((label, index) => (
            <div
              key={index}
              className={`flex-1 text-center transition-all duration-300 ${
                index === step ? "scale-105" : ""
              }`}
            >
              <div
                className={`mx-auto w-12 h-12 flex items-center justify-center rounded-full font-bold shadow-md ${
                  index <= step
                    ? "bg-[#007BB5] text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {index + 1}
              </div>
              <p className="mt-2 font-medium text-sm">{label}</p>
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="bg-white shadow-lg rounded-xl p-6 space-y-6">
          {/* Step 1 - Service */}
          {step === 0 && (
            <>
              <div className="flex items-center gap-2 text-[#007BB5] font-semibold text-lg mb-4">
                <FaBox /> <span>Select Service Type</span>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    title: "Wash & Fold",
                    desc: "Everyday laundry washed and neatly folded",
                    price: "₹125/kg",
                  },
                  {
                    title: "Dry Cleaning",
                    desc: "Professional cleaning for delicate fabrics",
                    price: "Starting at ₹500/item",
                  },
                  {
                    title: "Premium Laundry",
                    desc: "White-glove service with extra care",
                    price: "Starting at ₹300/kg",
                  },
                  {
                    title: "Steam Ironing",
                    desc: "Perfect wrinkle-free finish with steam ironing",
                    price: "₹100/kg",
                  },
                ].map((s) => (
                  <div
                    key={s.title}
                    onClick={() => setService(s.title)}
                    className={`cursor-pointer border p-4 rounded-lg transition-all ${
                      service === s.title
                        ? "border-[#007BB5] shadow bg-blue-50"
                        : "hover:border-[#007BB5]"
                    }`}
                  >
                    <h3 className="text-lg font-bold mb-1">{s.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{s.desc}</p>
                    <p className="text-[#007BB5] font-semibold text-sm">
                      {s.price}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Step 2 - Schedule */}
          {step === 1 && (
            <>
              <p className="font-semibold text-[#007BB5] mb-1">Pickup Date</p>
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => {
                  setPickupDate(e.target.value);
                  setDeliveryDate("");
                }}
                className="border p-2 rounded w-full mb-4"
              />

              <p className="font-semibold text-[#007BB5] mb-1">Pickup Time</p>
              <select
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="border p-2 rounded w-full mb-4"
              >
                <option value="">Select time</option>
                <option value="8:00 AM - 10:00 AM">8:00 AM - 10:00 AM</option>
                <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
                <option value="12:00 PM - 2:00 PM">12:00 PM - 2:00 PM</option>
                <option value="2:00 PM - 4:00 PM">2:00 PM - 4:00 PM</option>
              </select>

              <p className="font-semibold text-[#007BB5] mb-1">Delivery Date</p>
              <input
                type="date"
                min={getMinDeliveryDate()}
                value={deliveryDate}
                onChange={(e) => setDeliveryDate(e.target.value)}
                className="border p-2 rounded w-full mb-4"
              />

              <p className="font-semibold text-[#007BB5] mb-1">Delivery Time</p>
              <select
                value={deliveryTime}
                onChange={(e) => setDeliveryTime(e.target.value)}
                className="border p-2 rounded w-full"
              >
                <option value="">Select time</option>
                <option value="8:00 AM - 10:00 AM">8:00 AM - 10:00 AM</option>
                <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
                <option value="12:00 PM - 2:00 PM">12:00 PM - 2:00 PM</option>
                <option value="2:00 PM - 4:00 PM">2:00 PM - 4:00 PM</option>
              </select>
            </>
          )}

          {/* Step 3 - Personal Details */}
          {step === 2 && (
            <>
              <p className="font-semibold text-[#007BB5]">
                Enter Personal Details
              </p>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 rounded w-full"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border p-2 rounded w-full"
              />
              <textarea
                placeholder="Pickup Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border p-2 rounded w-full"
                rows={3}
              />
            </>
          )}

          {/* Step 4 - Confirm */}
          {step === 3 && (
            <div className="space-y-4">
              <p className="text-xl font-bold text-[#007BB5] text-center">
                Review Your Booking
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border">
                <p>
                  <strong>Service:</strong> {service}
                </p>
                <p>
                  <strong>Pickup:</strong> {pickupDate} at {pickupTime}
                </p>
                <p>
                  <strong>Delivery:</strong> {deliveryDate} at {deliveryTime}
                </p>
                <p>
                  <strong>Name:</strong> {name}
                </p>
                <p>
                  <strong>Phone:</strong> {phone}
                </p>
                <p>
                  <strong>Address:</strong> {address}
                </p>
              </div>
              <p className="text-sm text-center text-gray-600">
                If everything looks good, proceed to payment.
              </p>
            </div>
          )}

          {/* Step 5 - Payment */}
          {step === 4 && (
            <div className="space-y-6 text-center">
              {!isPaymentDone ? (
                <>
                  <p className="text-xl font-bold text-[#007BB5]">Payment</p>
                  <p className="text-lg">
                    Total Amount: <strong>₹450</strong>
                  </p>
                  <button
                    onClick={async () => {
                      setIsPaymentDone(true);
                      toast.success("Payment successful! Order confirmed 🎉");
                      await sendOrderToBackend(); // Send to backend
                    }}
                    className="bg-[#007BB5] text-white px-6 py-2 rounded-lg shadow"
                  >
                    Pay Now
                  </button>
                </>
              ) : (
                <>
                  <FaCheckCircle className="text-green-500 text-5xl mx-auto" />
                  <p className="text-xl font-semibold text-[#007BB5]">
                    Your order has been placed!
                  </p>
                  <p className="text-gray-600">
                    Thank you for booking with DhobiG. We'll notify you before
                    pickup.
                  </p>

                  <div className="bg-gray-50 p-4 rounded-lg border text-left max-w-md mx-auto space-y-1 mt-4">
                    <p>
                      <strong>Service:</strong> {service}
                    </p>
                    <p>
                      <strong>Pickup:</strong> {pickupDate} at {pickupTime}
                    </p>
                    <p>
                      <strong>Delivery:</strong> {deliveryDate} at{" "}
                      {deliveryTime}
                    </p>
                    <p>
                      <strong>Name:</strong> {name}
                    </p>
                    <p>
                      <strong>Phone:</strong> {phone}
                    </p>
                    <p>
                      <strong>Address:</strong> {address}
                    </p>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Navigation Buttons */}
          {step < 4 && (
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                disabled={step === 0}
                className="px-5 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 disabled:opacity-50 shadow"
              >
                Back
              </button>
              <button
                onClick={nextStep}
                className="px-5 py-2 rounded-lg bg-[#007BB5] text-white shadow"
              >
                {step === 3 ? "Proceed to Payment" : "Next"}
              </button>
            </div>
          )}

          {step === 4 && !isPaymentDone && (
            <div className="text-left">
              <button
                onClick={prevStep}
                className="px-5 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 shadow"
              >
                Back
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
