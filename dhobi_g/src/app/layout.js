
// import Navbar from "@/components/Navbar/Navbar";

import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar"


import "./globals.css";
// import Navbar from "@/components/Navbar/Navbar";

export const metadata = {
  title: "Dhobi G",
  description: "Laundry services at your doorstep",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          // background: "linear-gradient(rgb(120, 140, 176) 0%,rgb(192, 200, 218) 50%, rgb(120, 140, 176) 100%",
          // minHeight: "400vh",
          // background: "linear-gradient(180deg, #231f20 0%, #4a4647 50%, #231f20 100%)",
          // backgroundColor:"#231f20"
          backgroundColor:"#0000"


        }}
      >
        <Navbar />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
