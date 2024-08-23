import Footer from "@/components/layout/site-footer";
import Navbar from "@/components/layout/site-navbar";
import { siteConfig } from "@/config/site";
import { Circular_std, RecoletaAlt } from "@/lib/font";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.name}`,
    default: `${siteConfig.name}`,
  },
  description: `${siteConfig.description}`,
  icons: {
    icon: `${siteConfig.icon}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${RecoletaAlt.variable} ${Circular_std.variable} font-circularstd  flex flex-col min-h-screen`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
