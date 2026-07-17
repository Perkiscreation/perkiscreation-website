import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Perkiscreation | Brautstrauß-Konservierung",
  description:
    "Handgefertigte Erinnerungsstücke aus deinem Brautstrauß – individuell und für die Ewigkeit bewahrt.",
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
