import "./globals.css";
import Footer from "@/components/Footer";
// import EmergencyPopup from "@/components/EmergencyPopup";
// import FloatingSupportButton from "@/components/FloatingSupportButton";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";

const envUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
const siteUrl = envUrl ? `https://${envUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}` : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MBK Global",
    template: "%s | MBK Global",
  },
  description:
    "MBK Global removes operational friction so energy teams deliver twice the impact with half the effort.",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "MBK Global",
    title: "MBK Global",
    description:
      "MBK Global removes operational friction so energy teams deliver twice the impact with half the effort.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "MBK Global",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MBK Global",
    description:
      "MBK Global removes operational friction so energy teams deliver twice the impact with half the effort.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", sizes: "any" },
    ],
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
        {/* <EmergencyPopup /> */}
        {/* <FloatingSupportButton /> */}
      </body>
    </html>
  );
}
