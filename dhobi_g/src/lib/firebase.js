import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRf6hVgfxpE0TtYtaFNSn5xr0RXUQB5RQ",
  authDomain: "dhobi-g-f97a0.firebaseapp.com",
  projectId: "dhobi-g-f97a0",
  storageBucket: "dhobi-g-f97a0.firebasestorage.app",
  messagingSenderId: "385453675497",
  appId: "1:385453675497:web:429d986eb4d3e043013178",
  measurementId: "G-WF0RGGVR65"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export {auth,googleProvider}