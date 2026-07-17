import Link from "next/link";

export default function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className="legalPage">
      <Link href="/">← Zurück zur Startseite</Link>
      <h1>{title}</h1>
      <div>{children}</div>
    </main>
  );
}
