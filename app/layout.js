import { Geist } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnalyticsTracker from "@/components/analytics/AnalyticsTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://havatemizleyicileri.com"),
  title: {
    default: "Hava Lab | Senaryo Bazlı Hava Temizleyici Rehberi",
    template: "%s | Hava Lab"
  },
  description: "Eviniz için doğru hava temizleyiciyi teknik özelliklere bakarak değil, gerçek kullanım senaryosuna göre seçin.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hava Lab | Senaryo Bazlı Hava Temizleyici Rehberi",
    description: "Eviniz için doğru hava temizleyiciyi teknik özelliklere bakarak değil, gerçek kullanım senaryosuna göre seçin.",
    url: "https://havatemizleyicileri.com",
    siteName: "Hava Lab",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hava Lab | Senaryo Bazlı Hava Temizleyici Rehberi",
    description: "Eviniz için doğru hava temizleyiciyi teknik özelliklere bakarak değil, gerçek kullanım senaryosuna göre seçin.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    "revisit-after": "1 day",
  }
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
        <AnalyticsTracker />
        <GoogleAnalytics gaId="G-M11G2TF0Q1" />
      </body>
    </html>
  );
}
