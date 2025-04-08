import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ClientProviders from "./ClientProviders";

const saira = Saira({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-saira",
});

export const metadata: Metadata = {
  title: "Creator Share Tanzania",
  description: "Creator Share Tanzania - Sharing Love, Hope and Safety",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${saira.variable} antialiased`}>
        <ClientProviders>
          <Navigation />
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
