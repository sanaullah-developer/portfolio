import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sanaullahafd-portfolio.vercel.app"),
  title: {
    default: "AI Engineer Portfolio | Computer Vision & ML Deployment",
    template: "%s | AI Engineer Portfolio"
  },
  description:
    "Professional portfolio of an AI Engineer focused on Computer Vision, MLOps, and production-grade machine learning systems.",
  keywords: [
    "AI Engineer",
    "Computer Vision",
    "Machine Learning",
    "YOLO",
    "PyTorch",
    "ML Deployment",
    "FastAPI"
  ],
  openGraph: {
    title: "AI Engineer Portfolio",
    description:
      "Building production-level AI systems with a focus on Computer Vision and ML deployment.",
    url: "https://sanaullahafd-portfolio.vercel.app",
    siteName: "AI Engineer Portfolio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Engineer Portfolio",
    description:
      "Building production-level AI systems with a focus on Computer Vision and ML deployment."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
