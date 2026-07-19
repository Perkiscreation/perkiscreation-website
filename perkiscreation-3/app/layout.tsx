import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Perkiscreation | Brautstrauß-Konservierung",
  description: "Handgefertigte Erinnerungsstücke aus eurem Brautstrauß.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
