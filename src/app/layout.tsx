import type { Metadata } from "next";
import { JetBrains_Mono, Outfit, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    "Anepictale Labs is a technology company building Goodbite and Living — products at the intersection of data, AI, and everyday life.",
  openGraph: {
    title: "Anepictale Labs — Building products that make everyday life smarter",
    description:
      "Anepictale Labs is a technology company building Goodbite and Living — products at the intersection of data, AI, and everyday life.",
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
      className={cn("antialiased", jetbrainsMono.variable, outfit.variable, "font-sans", geist.variable)}
    >
      <body className="noise-overlay">{children}</body>
    </html>
  );
}
