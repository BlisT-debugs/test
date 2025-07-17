"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function TruecallerLogin() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // ✅ Send token+endpoint to backend & log response
  const verifyWithBackend = async (payload) => {
    console.log("✅ Sending payload to backend:", payload);
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/truecaller/callback/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const raw = await res.text(); // raw response
      console.log("Backend raw response:", raw);

      if (!res.ok) throw new Error(`Backend error: ${res.status}`);

      const data = JSON.parse(raw);
      console.log("Parsed backend response:", data);

      // Save tokens
      localStorage.setItem("access_token", data.access);
      localStorage.setItem("refresh_token", data.refresh);
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success("Logged in successfully!");
      router.push("/");
      router.refresh();
    } catch (err) {
      console.error(" Backend verification failed:", err);
      toast.error("Backend verification failed");
    } finally {
      setLoading(false);
    }
  };

  // Trigger Truecaller App
  const initiateVerification = () => {
    setLoading(true);

    const requestNonce = `tc_${Date.now()}_${Math.random()
      .toString(36)
      .substring(2, 10)}`;
    const partnerKey = process.env.NEXT_PUBLIC_TRUECALLER_APP_KEY;
    const partnerName = "dhobi";
    const callbackUrl =
      "https://dhobi-backend.onrender.com/api/auth/truecaller/callback/";

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
    const ttl = 60000;

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

    console.log("🔄 Opening Truecaller Intent URL");
    window.location.href = intentUrl;

    setTimeout(() => {
      console.log("🔄 Fallback to DeepLink");
      window.location.href = deepLink;
    }, 1500);
  };

  //Listen for Truecaller postMessage
  useEffect(() => {
    const handleMessage = (event) => {
      console.log("Truecaller postMessage event:", event);

      // Truecaller sends accessToken + endpoint
      try {
        const parsed = JSON.parse(event.data);
        console.log("Parsed event data:", parsed);

        // We expect accessToken + endpoint
        if (parsed?.accessToken && parsed?.endpoint) {
          toast.success("Truecaller verified! Fetching profile...");
          verifyWithBackend({
            accessToken: parsed.accessToken,
            endpoint: parsed.endpoint,
          });
        } else {
          toast.error("No accessToken received from Truecaller");
          setLoading(false);
        }
      } catch (err) {
        console.error("Failed to parse Truecaller response:", err);
        toast.error("Invalid Truecaller response");
        setLoading(false);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <button
      onClick={initiateVerification}
      disabled={loading}
      className={`truecaller-btn px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 ${
        loading ? "opacity-50" : ""
      }`}
    >
      {loading ? "Verifying..." : "Continue with Truecaller"}
    </button>
  );
}
