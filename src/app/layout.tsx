import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavbarGreen from "@/components/mainpage/NavbarGreen";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Trump's Fight Fist",
  description: "Fight For Our Freedom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fixed top-0 inset-x-0 z-50">
          <NavbarGreen />
        </div>
        {children}
      </body>
    </html>
  );
}
