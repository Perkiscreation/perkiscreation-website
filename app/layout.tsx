import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.perkiscreation-wedding.de"),
  title: {
    default: "Perkiscreation | Brautstrauß-Konservierung",
    template: "%s | Perkiscreation",
  },
  description:
    "Wir konservieren euren Brautstrauß in Kunstharz und fertigen ein persönliches Erinnerungsstück für die Ewigkeit.",
  openGraph: {
    title: "Perkiscreation | Brautstrauß-Konservierung",
    description:
      "Aus eurem Brautstrauß entsteht ein handgefertigtes Erinnerungsstück für die Ewigkeit.",
    url: "https://www.perkiscreation-wedding.de",
    siteName: "Perkiscreation",
    locale: "de_DE",
    type: "website",
    images: [{ url: "/hero.jpg", width: 1536, height: 1024 }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
