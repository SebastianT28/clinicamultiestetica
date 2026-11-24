import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/config/site";
import { AppInteractionProvider } from "@/lib/i18n-context";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsAppAssistant } from "@/components/layout/whatsapp-assistant";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      "Clínica Multiestética & Dra. Gabriela Delgado | Cirugía Estética y Armonización Facial en Arequipa",
    template: "%s | Clínica Multiestética",
  },
  description:
    "Clínica Multiestética en Arequipa liderada por la Dra. Gabriela Delgado Silva (+18 años de experiencia profesional). Especialistas en armonización facial, cirugía maxilofacial y cirugía estética corporal con resultados naturales.",
  keywords: [
    "Clínica Multiestética Arequipa",
    "Dra. Gabriela Delgado Silva",
    "armonización facial Arequipa",
    "cirujana maxilofacial Arequipa",
    "cirugía estética facial y corporal Arequipa",
    "blefaroplastia Arequipa",
    "lifting facial Arequipa",
    "lipopapada y marcación mandibular Arequipa",
    "bichectomía Arequipa",
    "ácido hialurónico Arequipa",
    "toxina botulínica Arequipa",
    "bioestimulador de colágeno Arequipa",
    "liposucción 360 Arequipa",
    "abdominoplastia Arequipa",
    "implantes de mamas Arequipa",
  ],
  alternates: {
    canonical: "/",
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
      className={`${cormorant.variable} ${jakarta.variable} h-full antialiased`}
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
