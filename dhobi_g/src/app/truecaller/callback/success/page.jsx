"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function TruecallerSuccess() {
  const router = useRouter();

  useEffect(() => {
    //Extract query params from URL
    const params = new URLSearchParams(window.location.search);
    const access = params.get("access");
    const refresh = params.get("refresh");
    const user = params.get("user");

    console.log("Received tokens:", { access, refresh, user });

    if (access && refresh && user) {
      localStorage.setItem("access_token", access);
      localStorage.setItem("refresh_token", refresh);
      localStorage.setItem("user", user);

      router.replace("/"); 
    } else {
      console.error("Missing tokens in redirect URL");
      router.replace("/login"); // fallback if something went wrong
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-xl font-semibold"> Logging you in via Truecaller...</h2>
    </div>
  );
}
