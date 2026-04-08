import type { Metadata } from "next";
import { JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anepictale Labs — Building products that make everyday life smarter",
  description:
    "Anepictale Labs is a technology company building Goodbite and living.so — products at the intersection of data, AI, and everyday life.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title:
      "Anepictale Labs — Building products that make everyday life smarter",
    description:
      "Anepictale Labs is a technology company building Goodbite and living.so — products at the intersection of data, AI, and everyday life.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} ${outfit.variable} antialiased`}
    >
      <body className="noise-overlay">{children}</body>
    </html>
  );
}
