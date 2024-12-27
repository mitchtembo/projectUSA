import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Load custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Fire Metadata
export const metadata: Metadata = {
  title: "Pathways",
  description: "Your gateway to study, work, and live in the United States",
  
  // Open Graph (OG) Metadata for Social Media
  openGraph: {
    title: "Pathways",
    description: "Your gateway to study, work, and live in the United States",
    url: "https://project-usa.vercel.app", // Your actual URL
    siteName: "Pathways",
    images: [
      {
        url: "https://via.placeholder.com/1200x630.png?text=Pathways+-+Study%2C+Work%2C+Live+in+USA", // Placeholder OG image
        width: 1200,
        height: 630,
        alt: "Pathways - Study, Work, and Live in the USA",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card Metadata
  twitter: {
    card: "summary_large_image",
    title: "Pathways",
    description: "Your gateway to study, work, and live in the United States",
    images: ["https://via.placeholder.com/1200x630.png?text=Pathways+-+Study%2C+Work%2C+Live+in+USA"], // Placeholder Twitter image
  },

  // Additional Metadata
  keywords: ["study in USA", "work in USA", "live in USA", "student visa", "USA immigration"],
  authors: [{ name: "Mitchel Tembo", url: "https://github.com/mitchtembo" }],
  robots: "index, follow", // Allow search engines to index and follow the site
  themeColor: "#4F46E5", // Set a theme color for the site
};

// Root Layout Component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}