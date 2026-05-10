import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { LayoutWrapper } from "@/src/components/layout/LayoutWrapper";
import ReactQueryProvider from "@/src/providers/ReactQueryProvider";
import { JsonLd } from "@/src/components/json-ld";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pillaxia.com"),
  title: {
    default:
      "What Is Pillaxia? | AI Medication Management for Clinics & Patients",
    template: "%s | Pillaxia",
  },
  description:
    "Pillaxia is an AI-powered connected care platform helping hospitals, clinics, and patients improve medication adherence. Features PillaxiaRx, Angela AI, & CareHub.",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://pillaxia.com",
    siteName: "Pillaxia",
    title: "Pillaxia | AI Medication Management Platform",
    description:
      "Connected care for hospitals, clinics, pharmacies, patients and caregivers.",
    images: [
      {
        url: "https://pillaxia.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pillaxia AI medication management platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@pillaxia",
    creator: "@pillaxia",
    title: "Pillaxia | AI Medication Management Platform",
    description:
      "Connected care for hospitals, clinics, pharmacies, patients and caregivers.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pillaxia",
  url: "https://pillaxia.com",
  logo: "https://pillaxia.com/logo.png",
  foundingLocation: {
    "@type": "Place",
    name: "Ireland",
  },
  email: "connect@pillaxia.com",
  description:
    "Connected care infrastructure for chronic and long-term health.",
  areaServed: [
    { "@type": "Country", name: "Ireland" },
    { "@type": "Country", name: "Nigeria" },
  ],
  sameAs: [
    "https://x.com/pillaxia",
    "https://www.linkedin.com/in/pillaxia-ai-8288aa31a",
    "https://www.instagram.com/pillaxia.ai/",
    "https://www.facebook.com/profile.php?id=61562518252431",
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Pillaxia",
  applicationCategory: "HealthApplication",
  applicationSubCategory: "Medication Management",
  operatingSystem: "iOS, Android, Web",
  featureList: [
    "Medication reminders",
    "Symptoms Tracker",
    "AI assistant (Angela AI)",
    "Clinical dashboard (PillaxiaRx)",
    "Caregiver coordination (CareHub)",
  ],
  description:
    "AI medication management platform with patient app (Angela AI), PillaxiaRx clinical dashboard, and CareHub.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "150",
    bestRating: "5",
  },
  url: "https://pillaxia.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={softwareSchema} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased min-h-screen bg-white text-[#252872] font-sans selection:bg-[#d91f22] selection:text-white`}
      >
        <ReactQueryProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </ReactQueryProvider>
      </body>
    </html>
  );
}