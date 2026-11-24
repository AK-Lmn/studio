import type { Metadata } from "next";
import { Sora, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://studio.aklmn.me"),
  title: "AKL STUDIO",
  description:
    "Web apps, group-buy storefronts & custom full-stack systems for small businesses. Delivered in 24–48h. Starts at ₱500.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  keywords: [
    "AKL Studio",
    "web development",
    "group-buy dashboard",
    "Philippines",
    "e-commerce storefront",
    "Next.js full-stack",
  ],
  openGraph: {
    title: "AKL STUDIO",
    description:
      "Web apps, group-buy storefronts & custom full-stack systems. Starts at ₱500.",
    url: "https://studio.aklmn.me",
    siteName: "AKL STUDIO",
    locale: "en_PH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AKL STUDIO",
    description:
      "Web apps, group-buy storefronts & custom full-stack systems. Starts at ₱500.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${manrope.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent selection:text-black">
        {children}
      </body>
    </html>
  );
}
