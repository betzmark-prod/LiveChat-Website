import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LiveChat | AI-Powered Embeddable Chat Widget",
  description: "Automate support and increase conversions with LiveChat, the real-time AI chat widget with seamless human escalation.",
  openGraph: {
    title: "LiveChat | AI-Powered Embeddable Chat Widget",
    description: "Automate support and increase conversions with LiveChat, the real-time AI chat widget with seamless human escalation.",
    type: "website",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
