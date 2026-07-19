import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Perkiscreation | Brautstrauß-Konservierung",
  description:
    "Wir verwandeln euren Brautstrauß in ein handgefertigtes Erinnerungsstück für die Ewigkeit.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
