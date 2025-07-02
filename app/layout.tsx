import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Clinical Psychologist Los Angeles, CA | Dr. Serena Blake, PsyD | Individual &amp; Couples Therapy",
  description:
    "Dr. Serena Blake, PsyD offers evidence-based therapy in Los Angeles for individuals and couples, specializing in anxiety, relationships, and trauma recovery. In-person and virtual sessions available.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${notoSans.variable} antialiased`}>
        <Topbar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
