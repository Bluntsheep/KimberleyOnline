import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kimberley Online",
  description: "emplyement and training platform for Kimberley",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" sticky bg-black">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
