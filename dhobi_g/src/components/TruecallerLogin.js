"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function TruecallerLogin() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const startPolling = (reqId) => {
    console.log("✅ Polling for:", reqId);

    const poll = setInterval(async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/truecaller/status/?requestId=${reqId}`);
      const data = await res.json();

      if (data?.verified) {
        clearInterval(poll);

        localStorage.setItem("access_token", data.access);
        localStorage.setItem("refresh_token", data.refresh);
        localStorage.setItem("user", JSON.stringify(data.user));

        toast.success("✅ Logged in successfully!");
        router.replace("/about");
      }
    }, 2000);
  };

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
    startPolling(requestId);
  };



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
