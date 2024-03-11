import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scrollbar-thin md:scrollbar-none scrollbar-thumb-primary scrollbar-track-[#0c0a09]"
    >
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
