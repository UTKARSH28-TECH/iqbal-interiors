import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/data/site";
import { localBusinessSchema, organizationSchema } from "@/lib/schema";
import "./globals.css";

// Editorial serif for headings; clean sans for body — exposed as CSS variables.
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Iqbal Interiors | Premium Interior Design in Giridih",
    template: "%s | Iqbal Interiors",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.owner }],
  keywords: [
    "Iqbal Interiors",
    "interior design Giridih",
    "interior designer Jharkhand",
    "false ceiling Giridih",
    "modular kitchen",
    "interior showroom Jamua",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/images/logo/logo.png",
  },
  appleWebApp: {
    capable: true,
    title: site.name,
    statusBarStyle: "default",
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_IN",
    url: site.url,
    title: "Iqbal Interiors | Premium Interior Design in Giridih",
    description: site.description,
    images: [
      {
        url: "/images/hero/2.png",
        width: 1536,
        height: 1024,
        alt: "Iqbal Interiors — premium interior design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iqbal Interiors | Premium Interior Design in Giridih",
    description: site.description,
    images: ["/images/hero/2.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang={site.language}
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="flex min-h-dvh flex-col bg-background font-sans text-foreground antialiased">
        <Navbar />
        {children}
        <Footer />
        <JsonLd data={organizationSchema()} />
        <JsonLd data={localBusinessSchema()} />
      </body>
    </html>
  );
}
