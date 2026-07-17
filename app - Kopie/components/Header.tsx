export default function Header() {
  return (
    <>
      <div className="topBar">
        Sichere dir deinen Platz für 2026
      </div>

      <header className="siteHeader">
        <a className="brand" href="#start">
          <strong>PERKISCREATION</strong>
          <span>Erinnerung für die Ewigkeit</span>
        </a>

        <nav className="nav">
          <a href="#produkte">Formen & Preise</a>
          <a href="#reservierung">Reservierung</a>
          <a href="#ablauf">Ablauf</a>
          <a href="#wissenswertes">Gut zu wissen</a>
          <a href="#faq">FAQ</a>
          <a href="#kontakt">Kontakt</a>
        </nav>

        <a className="button smallButton" href="#kontakt">
          Termin anfragen
        </a>
      </header>
    </>
  );
}
