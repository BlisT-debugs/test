"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function TruecallerLogin() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Send payload to backend & login
  const verifyWithBackend = async (requestPayload) => {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/truecaller/callback/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ requestPayload }),
      });

      if (!res.ok) throw new Error("Verification failed");

      const data = await res.json();
      localStorage.setItem("access_token", data.access);
      localStorage.setItem("refresh_token", data.refresh);
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success("Logged in successfully!");
      router.push("/");
    } catch (err) {
      toast.error(err.message || "Backend verification failed");
    } finally {
      setLoading(false);
    }
  };

  const initiateVerification = () => {
    setLoading(true);

    const requestNonce = `tc_${Date.now()}_${Math.random().toString(36).substring(2, 10)}`;
    const partnerKey = process.env.NEXT_PUBLIC_TRUECALLER_APP_KEY;
    const partnerName = "dhobi"; 
    const callbackUrl = "https://dhobi-backend.onrender.com/api/auth/truecaller/callback/";

    // Truecaller UI customization
    const lang = "en";
    const privacyUrl = "https://test-phi-pink-55.vercel.app/privacy";
    const termsUrl = "https://test-phi-pink-55.vercel.app/terms";
    const loginPrefix = "Continue with";
    const loginSuffix = "Truecaller";
    const ctaPrefix = "Login with";
    const ctaColor = "#f75d34"; 
    const ctaTextColor = "#ffffff";
    const btnShape = "rect"; 
    const skipOption = "Use another method";
    const ttl = 60000; // 60s

    const deepLink =
      `truecallersdk://truesdk/web_verify?` +
      `type=btmsheet` +
      `&requestNonce=${requestNonce}` +
      `&partnerKey=${partnerKey}` +
      `&partnerName=${encodeURIComponent(partnerName)}` +
      `&lang=${lang}` +
      `&privacyUrl=${encodeURIComponent(privacyUrl)}` +
      `&termsUrl=${encodeURIComponent(termsUrl)}` +
      `&loginPrefix=${encodeURIComponent(loginPrefix)}` +
      `&loginSuffix=${encodeURIComponent(loginSuffix)}` +
      `&ctaPrefix=${encodeURIComponent(ctaPrefix)}` +
      `&ctaColor=${encodeURIComponent(ctaColor)}` +
      `&ctaTextColor=${encodeURIComponent(ctaTextColor)}` +
      `&btnShape=${btnShape}` +
      `&skipOption=${encodeURIComponent(skipOption)}` +
      `&ttl=${ttl}` +
      `&callbackUrl=${encodeURIComponent(callbackUrl)}`;

    const intentUrl =
      `intent://truesdk/web_verify?` +
      `requestNonce=${requestNonce}` +
      `&partnerKey=${partnerKey}` +
      `&callbackUrl=${encodeURIComponent(callbackUrl)}` +
      `#Intent;scheme=truecallersdk;package=com.truecaller;end`;

    window.location.href = intentUrl;

    setTimeout(() => {
      window.location.href = deepLink;
    }, 1500);

    setTimeout(() => {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.truecaller";
    }, 80000);
  };

  useEffect(() => {
  const handleMessage = (event) => {
    console.log("✅ Truecaller postMessage event:", event);

    if (event.origin !== "https://sdk.truecaller.com") return;

    try {
      const data = JSON.parse(event.data);
      console.log("✅ Parsed Truecaller data:", data);

      if (data?.requestPayload) {
        toast.success("Truecaller verified, logging you in...");
        verifyWithBackend(data.requestPayload);
      } else {
        toast.error("No requestPayload received from Truecaller");
      }
    } catch (err) {
      console.error("❌ Truecaller response parse error:", err);
      toast.error("Invalid Truecaller response");
    }
  };

  window.addEventListener("message", handleMessage);
  return () => window.removeEventListener("message", handleMessage);
}, []);


  return (
    <button
      onClick={initiateVerification}
      disabled={loading}
      className={`truecaller-btn px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 ${loading ? "opacity-50" : ""}`}
    >
      {loading ? "Verifying..." : "Continue with Truecaller"}
    </button>
  );
}
