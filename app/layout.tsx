import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://residua.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "Residua — What you leave behind tells the whole story.",
    template: "%s — Residua",
  },
  description:
    "Residua helps organizations understand what they leave behind — the waste in their buildings, the carbon in their operations, and the unresolved tensions in the communities where they build. Environmental & Civic Intelligence consulting.",
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: BASE_URL },
  openGraph: {
    siteName: "Residua",
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Residua",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description:
      "Residua is an environmental and civic intelligence consulting firm that helps organizations measure their waste, carbon emissions, and community impact. Services include waste audits, recycling culture transformation, Scope 1/2/3 carbon reporting, stakeholder mapping, public opinion research, and infrastructure sentiment studies.",
    sameAs: ["https://github.com/andresfigueroab/residua"],
    knowsAbout: [
      "Waste auditing",
      "Carbon emissions reporting",
      "Non-market environment analysis",
      "Scope 1 2 3 emissions",
      "Stakeholder mapping",
      "Community engagement",
      "Infrastructure siting",
      "Public opinion research",
      "Recycling culture transformation",
    ],
    areaServed: "US",
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <head>
        <JsonLd data={organizationSchema} />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-charcoal">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
