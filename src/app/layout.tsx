import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "TradeFlow - CRM & Marketing for Roofing, HVAC, Plumbing & Contractors",
  description: "The all-in-one CRM and marketing automation platform built for trade businesses. Get more leads, close more deals, and grow your roofing, HVAC, plumbing, or contracting business.",
  keywords: ["CRM", "roofing software", "HVAC software", "plumbing software", "contractor CRM", "trade business", "marketing automation", "lead generation"],
  openGraph: {
    title: "TradeFlow - Grow Your Trade Business",
    description: "The all-in-one CRM and marketing platform built for trade professionals.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
