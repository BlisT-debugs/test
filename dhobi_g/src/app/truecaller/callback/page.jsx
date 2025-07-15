"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function TruecallerCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleMessage = (event) => {
      // Truecaller SDK sends data from this origin
      if (event.origin !== "https://sdk.truecaller.com") return;

      try {
        const data = JSON.parse(event.data);

        if (data.requestPayload) {
          // ✅ Save the payload for backend verification
          localStorage.setItem("truecaller_payload", data.requestPayload);

          toast.success("Truecaller verified successfully!");
          // Redirect user after verification (maybe dashboard or login page)
          router.push("/login");
        } else {
          toast.error("Truecaller verification failed!");
        }
      } catch (err) {
        console.error("Error parsing Truecaller data", err);
        toast.error("Invalid Truecaller response!");
      }
    };

    window.addEventListener("message", handleMessage);

    return () => window.removeEventListener("message", handleMessage);
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <h2 className="text-xl font-semibold">Verifying with Truecaller...</h2>
    </div>
  );
}
