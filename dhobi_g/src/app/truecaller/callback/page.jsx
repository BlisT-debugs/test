"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function TruecallerCallback() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleMessage = async (event) => {
      if (event.origin !== "https://sdk.truecaller.com") return;

      try {
        const data = JSON.parse(event.data);

        if (data.requestPayload) {
          toast.success("Truecaller verified, logging you in...");

          // Send payload to backend for verification & login
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/truecaller/callback/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ requestPayload: data.requestPayload }),
          });
           const raw = await res.text(); // <-- log raw response
           console.log("Backend raw response:", raw);

          if (!res.ok) throw new Error("Backend verification failed");

          const result = await res.json();

          // Save tokens
          localStorage.setItem("access_token", result.access);
          localStorage.setItem("refresh_token", result.refresh);
          localStorage.setItem("user", JSON.stringify(result.user));

          toast.success("Logged in successfully!");
          router.push("/dashboard");
        } else {
          toast.error("Truecaller returned no payload");
          router.push("/login");
        }
      } catch (err) {
        console.error("Truecaller verification error:", err);
        toast.error("Something went wrong");
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-xl font-semibold">
        {loading ? "Verifying Truecaller..." : "Redirecting..."}
      </h2>
    </div>
  );
}
