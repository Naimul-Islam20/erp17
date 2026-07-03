import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ConsultationPopup from "@/components/layout/ConsultationPopup";
import {
  SITE_LOGO_ALT,
  SITE_LOGO_HEIGHT,
  SITE_LOGO_SRC,
  SITE_LOGO_WIDTH,
} from "@/constants/brand";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://erp17.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ERP17 Cloud Solution",
    template: "%s | ERP17",
  },
  description:
    "ERP17 Cloud Solution — accounts, inventory, POS, HRM, CRM, eCommerce, and more on one platform for businesses in Bangladesh.",
  keywords: [
    "ERP17",
    "ERP Bangladesh",
    "cloud ERP",
    "inventory software",
    "HRM",
    "POS",
  ],
  applicationName: "ERP17",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "ERP17 Cloud Solution",
    title: "ERP17 Cloud Solution",
    description:
      "Accounts, inventory, POS, HRM, CRM, eCommerce, and more on one platform for businesses in Bangladesh.",
    images: [
      {
        url: SITE_LOGO_SRC,
        width: SITE_LOGO_WIDTH,
        height: SITE_LOGO_HEIGHT,
        alt: SITE_LOGO_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP17 Cloud Solution",
    description:
      "Accounts, inventory, POS, HRM, CRM, eCommerce, and more on one platform for businesses in Bangladesh.",
    images: [SITE_LOGO_SRC],
  },
  icons: {
    icon: [{ url: SITE_LOGO_SRC, type: "image/png" }],
    apple: [{ url: SITE_LOGO_SRC }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden antialiased`}
      >
        <Header/>
        <ConsultationPopup />
        {children}
        <Footer/>
        <WhatsAppButton />
      </body>
    </html>
  );
}
