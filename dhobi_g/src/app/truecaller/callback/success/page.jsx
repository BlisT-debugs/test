"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function TruecallerSuccess() {
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    const access = params.get("access");
    const refresh = params.get("refresh");
    const user = params.get("user");

    if (access && refresh && user) {
      localStorage.setItem("access_token", access);
      localStorage.setItem("refresh_token", refresh);
      localStorage.setItem("user", user);
      // Redirect to homepage
      router.replace("/");
    } else {
      router.replace("/login");
    }
  }, []);

  return <p>Logging you in via Truecaller...</p>;
}
