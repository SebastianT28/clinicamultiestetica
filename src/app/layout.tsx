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
      "Dra. Gabriela Delgado | Cirujana Maxilofacial y Armonización Facial en Arequipa",
    template: "%s | Dra. Gabriela Delgado",
  },
  description:
    "Dra. Gabriela Delgado Silva (+18 años de experiencia profesional), Cirujana Maxilofacial y Especialista en Armonización Facial en Arequipa. Directora de Clínica Multiestética: resultados armónicos, seguros y naturales.",
  keywords: [
    "Dra. Gabriela Delgado",
    "Dra. Gabriela Delgado Silva",
    "dragabydelgado.com",
    "Clínica Multiestética Arequipa",
    "armonización facial Arequipa",
    "cirujana maxilofacial Arequipa",
    "blefaroplastia Arequipa",
    "lifting facial Arequipa",
    "lipopapada y marcación mandibular Arequipa",
    "bichectomía Arequipa",
    "ácido hialurónico Arequipa",
    "toxina botulínica Arequipa",
    "bioestimulador de colágeno Arequipa",
    "cirugía estética corporal Arequipa",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Dra. Gabriela Delgado | Cirujana Maxilofacial y Armonización Facial en Arequipa",
    description:
      "Dra. Gabriela Delgado Silva (+18 años de experiencia profesional), Cirujana Maxilofacial y Especialista en Armonización Facial en Arequipa. Directora de Clínica Multiestética.",
    url: SITE_CONFIG.url,
    siteName: "Dra. Gabriela Delgado · Clínica Multiestética",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/brand/logo-og-dra-gabriela.jpg",
        width: 1200,
        height: 630,
        alt: "Dra. Gabriela Delgado · Clínica Multiestética",
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
