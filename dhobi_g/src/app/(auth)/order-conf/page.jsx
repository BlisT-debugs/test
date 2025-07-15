"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function OrderConfirmation() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("dhobig_user_name");
    if (savedName) {
      setUserName(savedName);
    }
  }, []);

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full space-y-6">
        <h1 className="text-4xl font-bold text-green-600">✅ Order Confirmed!</h1>

        <p className="text-gray-700 text-lg">
          Thank you{" "}
          <span className="text-green-800 font-semibold">
            {userName || "Customer"}
          </span>{" "}
          for placing your order!
        </p>

        <p className="text-gray-500">
          We’ll contact you shortly to arrange pickup.
        </p>

        <Link
          href="/"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}
