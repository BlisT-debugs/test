// components/TruecallerAuth.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

export default function TruecallerLogin() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Handle verification with backend
  const verifyWithBackend = async (requestPayload) => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/truecaller/callback/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ requestPayload }),
      });

      if (!response.ok) throw new Error('Verification failed');
      
      const data = await response.json();
      localStorage.setItem('access_token', data.access);
      localStorage.setItem('refresh_token', data.refresh);
      localStorage.setItem('user', JSON.stringify(data.user));
      toast.success('Verified successfully!');
      router.push('/dashboard');
    } catch (error) {
      toast.error(error.message || 'Verification error');
    } finally {
      setLoading(false);
    }
  };

  // Initialize Truecaller verification
 const initiateVerification = () => {
  setLoading(true);

  const requestNonce = `tc_${Date.now()}_${Math.random().toString(36).substring(2, 10)}`;

  const partnerKey = process.env.NEXT_PUBLIC_TRUECALLER_APP_KEY;
  const partnerName = "dhobi"; 
  const callbackUrl = "https://test-phi-pink-55.vercel.app/truecaller/callback";

  // ✅ Recommended parameters for customization
  const lang = "en"; // or "en-US"
  const privacyUrl = "https://test-phi-pink-55.vercel.app/privacy";
  const termsUrl = "https://test-phi-pink-55.vercel.app/terms";
  const loginPrefix = "continue"; // prefix before title
  const loginSuffix = "login"; // suffix after title
  const ctaPrefix = "continuewith"; // button prefix
  const ctaColor = "%23f75d34"; // button color
  const ctaTextColor = "%23f75d34"; // text color
  const btnShape = "rect"; // square | rounded
  const skipOption = "useanothermethod"; // footer text
  const ttl = 60000; // time in ms before link expires (e.g., 60s)

  // ✅ Truecaller’s latest recommended deep link format
  const deepLink = `truecallersdk://truesdk/web_verify?` +
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

  const intentUrl = `intent://truesdk/web_verify?` +
    `requestNonce=${requestNonce}` +
    `&partnerKey=${partnerKey}` +
    `&callbackUrl=${encodeURIComponent(callbackUrl)}` +
    `#Intent;scheme=truecallersdk;package=com.truecaller;end`;

  // Try intent first
  window.location.href = intentUrl;

  // If Chrome blocks intent, fallback to deep link after 1s
  setTimeout(() => {
    window.location.href = deepLink;
  }, 1000);

  // Final fallback → Play Store
  setTimeout(() => {
    window.location.href = "https://play.google.com/store/apps/details?id=com.truecaller";
  }, 5000);
};




  // Handle callback from Truecaller
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin !== "https://sdk.truecaller.com") return;
      
      try {
        const data = JSON.parse(event.data);
        if (data.requestPayload) {
          verifyWithBackend(data.requestPayload);
        }
      } catch (error) {
        toast.error('Failed to process response');
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <button
      onClick={initiateVerification}
      disabled={loading}
      className={`truecaller-btn ${loading ? 'loading' : ''}`}
    >
      {loading ? 'Verifying...' : 'Continue with Truecaller'}
    </button>
  );
}