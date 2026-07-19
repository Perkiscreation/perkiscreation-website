const shapeOptions = [
  "Hexagon S · 15 cm — 210 €",
  "Hexagon M · 20 cm — 270 €",
  "Hexagon L · 24 cm — 320 €",
  "Bogen S · 13 × 7 cm — 190 €",
  "Bogen M · 16 × 12 cm — 210 €",
  "Bogen L · 21 × 16 cm — 270 €",
  "Herz · 20 cm — 270 €",
  "Quadrat · 20 × 20 cm — 320 €",
  "Individuelles Datum — ab 120 €",
  "Ich weiß es noch nicht",
];

export default function Contact() {
  return (
    <section className="contactBlock" id="kontakt">
      <p className="sectionLabel">Termin anfragen</p>
      <h2>Erzählt uns von eurem Hochzeitstag.</h2>
      <p className="contactLead">Eine kurze Nachricht mit Datum und Wunschform reicht für den ersten Schritt.</p>

      <form className="simpleForm" action="mailto:info@perkiscreation-wedding.de" method="post" encType="text/plain">
        <input name="Name" placeholder="Euer Name" required />
        <input name="E-Mail" type="email" placeholder="E-Mail-Adresse" required />
        <input name="Hochzeitstermin" type="date" />
        <select name="Wunschform" defaultValue="" required>
          <option value="" disabled>Form, Größe und Preis auswählen</option>
          {shapeOptions.map((option) => <option key={option}>{option}</option>)}
        </select>
        <textarea name="Nachricht" rows={5} placeholder="Eure Nachricht oder besondere Wünsche" />
        <label className="consentRow">
          <input type="checkbox" required />
          <span>Mir ist bekannt, dass nach Bestätigung des Termins eine Reservierungsgebühr von 50 € fällig wird und später vollständig mit dem Preis des gewählten Erinnerungsstücks verrechnet wird.</span>
        </label>
        <button type="submit">Termin anfragen</button>
      </form>

      <div className="reservationInfo">
        <strong>Reservierungsgebühr</strong>
        <p>Die Reservierungsgebühr beträgt 50 €. Sie sichert euren Hochzeitstermin verbindlich und wird bei der finalen Bestellung vollständig mit dem Gesamtpreis eures gewählten Erinnerungsstücks verrechnet.</p>
      </div>

      <footer className="miniFooter">
        <strong>PERKISCREATION</strong>
        <span>perkiscreation-wedding.de</span>
      </footer>
    </section>
  );
}
