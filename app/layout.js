"use client";

import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Poppins } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import AppNavbar from "../components/common/Navbar";
import AppFooter from "../components/common/Footer";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <AppNavbar />
          {children}
          <AppFooter />
          <Toaster position='top-right' reverseOrder={false} />
        </SessionProvider>
      </body>
    </html>
  );
}
