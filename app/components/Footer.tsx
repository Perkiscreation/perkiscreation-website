import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerBrand">
        <strong>PERKISCREATION</strong>
        <span>Erinnerung für die Ewigkeit</span>
      </div>

      <nav>
        <a href="#produkte">Formen &amp; Preise</a>
        <a href="#ablauf">Ablauf</a>
        <a href="#kontakt">Kontakt</a>
        <a href="https://www.instagram.com/perkiscreationnn/" target="_blank" rel="noreferrer">
          Instagram
        </a>
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
