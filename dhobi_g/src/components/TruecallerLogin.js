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

  // Generate a random requestNonce (any unique string)
  const requestNonce = `tc_${Date.now()}_${Math.random().toString(36).substring(2, 10)}`;

  // ✅ Your callback URL (MUST match what you put in Truecaller dashboard)
  const callbackUrl = "https://test-phi-pink-55.vercel.app/truecaller/callback";

  // ✅ Construct Android Intent URL
  const intentUrl = `intent://truesdk/web_verify?requestNonce=${requestNonce}&partnerKey=${process.env.NEXT_PUBLIC_TRUECALLER_APP_KEY}&callbackUrl=${encodeURIComponent(callbackUrl)}#Intent;package=com.truecaller;scheme=truecallersdk;end`;

  // ✅ Construct deep link fallback
  const deepLink = `truecallersdk://truesdk/web_verify?requestNonce=${requestNonce}&partnerKey=${process.env.NEXT_PUBLIC_TRUECALLER_APP_KEY}&callbackUrl=${encodeURIComponent(callbackUrl)}`;

  // Try opening the Truecaller app via intent
  window.location.href = intentUrl;

  // Fallback to deep link if intent fails
  setTimeout(() => {
    window.location.href = deepLink;
  }, 200);

  // Final fallback → Play Store
  setTimeout(() => {
    window.location.href = "https://play.google.com/store/apps/details?id=com.truecaller";
  }, 1000);
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