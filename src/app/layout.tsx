import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Kelly Fung | Fort Lauderdale Realtor | RE/MAX — Buy, Sell & Invest in South Florida",
  description:
    "Kelly Fung is a trusted Fort Lauderdale RE/MAX realtor specializing in buying, selling, luxury homes & investment properties across Broward County. Call (727) 488-9582 for a free consultation.",
  keywords:
    "Fort Lauderdale realtor, Fort Lauderdale real estate agent, Broward County realtor, Weston FL real estate, Pembroke Pines realtor, South Florida luxury homes, Fort Lauderdale homes for sale, RE/MAX Fort Lauderdale, Fort Lauderdale investment property, best realtor Fort Lauderdale FL, buy home Broward County, sell house Fort Lauderdale, luxury real estate Fort Lauderdale, first time home buyer Fort Lauderdale, Fort Lauderdale relocation agent",
  alternates: {
    canonical: "https://kellyfungrealtor.com/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Kelly Fung RE/MAX Realtor",
    title: "Kelly Fung — Fort Lauderdale RE/MAX Realtor",
    description:
      "Find your dream home in South Florida. Kelly Fung provides expert real estate services across Fort Lauderdale, Weston, Pembroke Pines & all of Broward County.",
    url: "https://kellyfungrealtor.com/",
    images: [
      {
        url: "https://kellyfungrealtor.com/images/kelly-headshot.jpg",
        width: 800,
        height: 800,
        alt: "Kelly Fung - Fort Lauderdale RE/MAX Realtor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kelly Fung — Fort Lauderdale RE/MAX Realtor",
    description:
      "Find your dream home in South Florida. Expert real estate services across Fort Lauderdale, Weston, Pembroke Pines & all of Broward County.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <a href="#main" className="skip-to-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
