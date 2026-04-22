import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ConsultationPopup from "@/components/layout/ConsultationPopup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ERP17 Cloud Solution",
  description:
    "ERP17 Cloud Solution — accounts, inventory, POS, HRM, CRM, eCommerce, and more on one platform for businesses in Bangladesh.",
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
