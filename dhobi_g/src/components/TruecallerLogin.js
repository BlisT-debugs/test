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

  const intentUrl = `intent://truesdk/web_verify?requestNonce=${requestNonce}&partnerKey=${partnerKey}#Intent;package=com.truecaller;scheme=truecallersdk;end`;

  const deepLink = `truecallersdk://truesdk/web_verify?requestNonce=${requestNonce}&partnerKey=${partnerKey}`;

  // Open intent first
  window.location.href = intentUrl;

  // Wait a bit longer before fallback (3s)
  setTimeout(() => {
    window.location.href = deepLink;
  }, 1500);

  // Only go to Play Store if app really not installed (5s delay)
  setTimeout(() => {
    window.location.href = 'https://play.google.com/store/apps/details?id=com.truecaller';
  }, 7000);
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