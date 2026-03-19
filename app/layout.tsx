import "./globals.css";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MBK Global",
    template: "%s | MBK Global",
  },
  description:
    "MBK Global helps operators and partners accelerate digital transformation with integrated, scalable, and impact-driven execution.",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "MBK Global",
    title: "MBK Global",
    description:
      "MBK Global helps operators and partners accelerate digital transformation with integrated, scalable, and impact-driven execution.",
    images: [
      {
        url: "/logos/logo-main.png",
        alt: "MBK Global",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MBK Global",
    description:
      "MBK Global helps operators and partners accelerate digital transformation with integrated, scalable, and impact-driven execution.",
    images: ["/logos/logo-main.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${poppins.variable} font-sans flex flex-col min-h-screen bg-white`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
