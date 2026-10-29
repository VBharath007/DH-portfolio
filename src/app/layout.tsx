import type { Metadata, Viewport } from "next";
import { Inter, Alex_Brush } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const alexBrush = Alex_Brush({
  variable: "--font-signature",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "DANAM HOLDINGS — N.E.Praveen Elangovan | Managing Director | Towards Fortune Unfoldings",
  description:
    "Official portfolio of N.E.Praveen Elangovan, Managing Director of DANAM HOLDINGS. Expert in Construction, Project Management Consultancy (PMC), EPC, and Project Delivery. Madurai, Tamil Nadu.",
  keywords: [
    "DANAM HOLDINGS",
    "DHANAM HOLDING",
    "Towards Fortune Unfoldings",
    "N.E.Praveen Elangovan",
    "Managing Director",
    "Construction Madurai",
    "Project Management Consultancy PMC",
    "Engineering Procurement Construction EPC",
    "Project Delivery Tamil Nadu",
    "Residential Building Work",
    "Commercial Building Work",
  ],
  authors: [{ name: "DANAM HOLDINGS" }],
  creator: "DANAM HOLDINGS",
  publisher: "DANAM HOLDINGS",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://danamholdings.in",
    title: "DANAM HOLDINGS — N.E.Praveen Elangovan | Managing Director",
    description:
      "A Vision to Create Value, A Commitment to Transform Assets. Towards Fortune Unfoldings. Construction, PMC, EPC & Project Delivery in Madurai, Tamil Nadu.",
    siteName: "DANAM HOLDINGS",
  },
  icons: {
    icon: [
      { url: "/logo-circle.png", type: "image/png" },
      { url: "/favicon.ico", type: "image/png" },
    ],
    apple: "/logo-circle.png",
    shortcut: "/logo-circle.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${alexBrush.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Allura&family=Dancing+Script:wght@500;600;700&family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#fafafa] text-[#111827] font-sans antialiased selection:bg-neutral-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
