import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://havatemizleyiciler.com"),
  title: {
    default: "Hava Lab | Senaryo Bazlı Hava Temizleyici Rehberi",
    template: "%s | Hava Lab"
  },
  description: "Eviniz için doğru hava temizleyiciyi teknik özelliklere bakarak değil, gerçek kullanım senaryosuna göre seçin.",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} font-sans antialiased bg-background text-foreground`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
