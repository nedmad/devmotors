import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import Header from "@/components/header/header";

export const metadata: Metadata = {
  title: "DevMotors",
  description: "Escolha o serviço completo para seu carro. Escolha DevMotors!",
  keywords: ["motor", "peças", "carro", "serviços"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="br">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
