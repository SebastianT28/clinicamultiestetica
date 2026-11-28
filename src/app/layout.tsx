import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/config/site";
import { AppInteractionProvider } from "@/lib/i18n-context";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsAppAssistant } from "@/components/layout/whatsapp-assistant";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#081538",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default:
      "Dra. Gabriela Delgado | Cirujana Facial, Maxilofacial y Armonización en Arequipa",
    template: "%s | Dra. Gabriela Delgado · Arequipa",
  },
  description:
    "Dra. Gabriela Delgado Silva (+18 años de experiencia): cirujana facial, maxilofacial y especialista en armonización facial en Cayma, Arequipa. Resultados naturales en lifting facial, blefaroplastia y perfilamiento.",
  keywords: [
    "cirujana facial en Arequipa",
    "cirugía facial Arequipa",
    "armonización facial Arequipa",
    "cirujana maxilofacial Arequipa",
    "Dra. Gabriela Delgado",
    "Dra. Gabriela Delgado Silva",
    "Clínica Multiestética Arequipa",
    "lifting facial Arequipa",
    "blefaroplastia Arequipa",
    "lipopapada y marcación mandibular Arequipa",
    "bichectomía Arequipa",
    "afinamiento facial Arequipa",
    "ácido hialurónico Arequipa",
    "toxina botulínica Arequipa",
    "bioestimulador de colágeno Arequipa",
    "cirugía facial sur del Perú",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Dra. Gabriela Delgado | Cirujana Facial, Maxilofacial y Armonización en Arequipa",
    description:
      "Dra. Gabriela Delgado Silva (+18 años de experiencia): cirujana facial, maxilofacial y especialista en armonización facial en Cayma, Arequipa. Directora de Clínica Multiestética.",
    url: SITE_CONFIG.url,
    siteName: "Dra. Gabriela Delgado · Clínica Multiestética",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/images/doctora/dra-hero-1.jpg",
        width: 1400,
        height: 1050,
        alt: "Dra. Gabriela Delgado Silva · Cirujana Facial y Armonización Facial en Arequipa",
      },
      {
        url: "/brand/logo-og-dra-gabriela.jpg",
        width: 1200,
        height: 630,
        alt: "Dra. Gabriela Delgado · Clínica Multiestética en Arequipa",
      },
    ],
  },
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
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <AppInteractionProvider>
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
          <WhatsAppAssistant />
        </AppInteractionProvider>
      </body>
    </html>
  );
}
