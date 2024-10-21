import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/main/Navbar";
import { Space_Grotesk} from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Ashish Tiwari",
  description: "This is Ashish Tiwari portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className} bg-black overflow-y-scroll overflow-x-hidden `}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
