import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/config/site";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAF8F4",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default:
      "Clínica Multiestética & Dra. Gabriela Delgado | Cirugía Facial, Corporal y Armonización en Arequipa",
    template: "%s | Clínica Multiestética — Dra. Gabriela Delgado",
  },
  description:
    "Clínica Multiestética en Arequipa liderada por la Dra. Gabriela Delgado Silva (+18 años de experiencia). Especialistas en armonización facial, cirugía maxilofacial y cirugía estética corporal con resultados armónicos y naturales.",
  keywords: [
    "Clínica Multiestética Arequipa",
    "Dra. Gabriela Delgado Silva",
    "armonización facial Arequipa",
    "cirujana maxilofacial Arequipa",
    "cirugía estética facial y corporal Arequipa",
    "blefaroplastia Arequipa",
    "lifting facial Arequipa",
    "lipopapada y marcación mandibular Arequipa",
    "ácido hialurónico Arequipa",
    "toxina botulínica Arequipa",
    "liposucción 360 Arequipa",
    "abdominoplastia Arequipa",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
