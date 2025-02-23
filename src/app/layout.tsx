import { type Metadata } from "next";
import { Calistoga, Inter } from "next/font/google";

import { SpeedInsights } from "@vercel/speed-insights/next";

import "@/assets/css/globals.css";
import { cn } from "@/lib/utils";
import { TRPCReactProvider } from "@/trpc/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Qasim Arshad",
  description:
    "As a Senior AI Engineer, I craft intelligent systems with machine learning and generative AI, turning complex challenges into innovative solutions. Let's bring your vision to life!",
  abstract:
    "As a Senior AI Engineer, I craft intelligent systems with machine learning and generative AI, turning complex challenges into innovative solutions. Let's bring your vision to life!",
  alternates: {
    canonical: "https://neuralcrafts.tech",
  },
  applicationName: "Qasim Arshad",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Qasim Arshad",
    description:
      "As a Senior AI Engineer, I craft intelligent systems with machine learning and generative AI, turning complex challenges into innovative solutions. Let's bring your vision to life!",
    url: "https://neuralcrafts.tech",
    siteName: "Qasim Arshad",
    images: [
      {
        url: "https://neuralcrafts.tech/og-image.png",
      },
    ],
    type: "website",
  },
  keywords:
    "Frontend Developer, Developer, Software, Software Engineer, Fullstack Developer, Engineer, Web Apps, Websites, Design, Development",
  publisher: "Qasim Arshad",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-gray-900 font-sans text-white antialiased",
          inter.variable,
          calistoga.variable
        )}
      >
        <SpeedInsights />
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
