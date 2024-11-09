import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk } from 'next/font/google';
import Navbar from "@/components/main/Navbar";




const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Ashish Tiwari",
  description: "Portfolio website",
  icons: {
    icon: '/favicon.ico', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className} text-white bg-black antialiased`}>
          <Navbar />
          {children}
      </body>
    </html>
  );
}


