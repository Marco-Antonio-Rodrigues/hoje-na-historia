import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";

const outfit = Outfit({subsets: ["latin"]});
export const metadata: Metadata = {
  title: "Hoje na história",
  description: "Saiba o que o dia de hoje tem a nos contar historicamente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${outfit.className} flex flex-col min-h-screen justify-between bg-CustomAntiqueWhite dark:bg-CustomCharcoal transition-colors duration-1000`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
