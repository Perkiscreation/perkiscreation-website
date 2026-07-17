function FlowerMark() {
  return (
    <svg className="logoFlower" viewBox="0 0 54 76" aria-hidden="true">
      <path d="M27 73C27 52 29 35 32 15" />
      <path d="M31 25C21 22 16 16 15 8C23 9 29 14 31 25Z" />
      <path d="M30 35C40 30 45 23 44 15C36 18 31 24 30 35Z" />
      <path d="M28 48C18 44 12 38 11 30C19 31 25 37 28 48Z" />
      <path d="M28 58C38 53 44 47 45 39C37 41 31 47 28 58Z" />
      <circle cx="33" cy="12" r="4" />
    </svg>
  );
}

export default function Header() {
  return (
    <>
      <div className="topBar">Sichere dir deinen Platz für 2026 &amp; 2027</div>

      <header className="siteHeader">
        <a className="brand" href="#start" aria-label="Perkiscreation Startseite">
          <span className="brandText">
            <strong>PERKISCREATION</strong>
            <small>Erinnerung für die Ewigkeit</small>
          </span>
          <FlowerMark />
        </a>

        <nav className="nav" aria-label="Hauptnavigation">
          <a href="#produkte">Formen &amp; Preise</a>
          <a href="#reservierung">Reservierung</a>
          <a href="#ablauf">Ablauf</a>
          <a href="#wissenswertes">Gut zu wissen</a>
          <a href="#kontakt">Kontakt</a>
        </nav>

        <a className="button smallButton" href="#kontakt">
          Termin anfragen
        </a>
      </header>
    </>
  );
}
