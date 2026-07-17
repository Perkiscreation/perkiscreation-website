import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>PERKISCREATION</strong>
        <span>Erinnerung für die Ewigkeit</span>
      </div>

      <nav>
        <a href="#produkte">Formen & Preise</a>
        <a href="#reservierung">Reservierung</a>
        <a href="#kontakt">Kontakt</a>
        <a href="https://www.instagram.com/perkiscreationnn/" target="_blank" rel="noreferrer">Instagram</a>
      </nav>

      <nav>
        <Link href="/impressum">Impressum</Link>
        <Link href="/datenschutz">Datenschutz</Link>
        <Link href="/cookies">Cookie-Einstellungen</Link>
      </nav>

      <p>© {new Date().getFullYear()} Perkiscreation</p>
    </footer>
  );
}
