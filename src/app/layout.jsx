import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Quadstack | Think. Plan. Execute.",
  description:
    "Quadstack builds scalable digital products through modern web development, e-commerce, and strategy — helping businesses plan, think, and execute.",

  keywords: [
    "Quadstack",
    "web development company",
    "Next.js developers",
    "software development agency",
    "startup app development",
    "scalable digital products",
    "e-commerce website development",
    "wordpress development",
  ],
  authors: [
    {
      name: "Quadstack Technologies Pvt. Ltd.",
      url: "https://quadstack.vercel.app",
    },
  ],
  creator: "Quadstack Technologies Pvt. Ltd.",
  publisher: "Quadstack",
  metadataBase: new URL("https://quadstack.vercel.app"),
  openGraph: {
    title: "Quadstack | Plan. Think. Execute.",
    description:
      "Quadstack builds scalable digital products through modern web development, e-commerce, and strategy — helping businesses plan, think, and execute.",
    url: "https://quadstack.vercel.app",
    siteName: "Quadstack",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "./favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
