const steps = [
  [
    "01",
    "Termin reservieren",
    "Nach der Bestätigung wird eine Reservierungsgebühr von 50 € fällig. Sie sichert euren Termin verbindlich und wird später vollständig mit dem Preis eures gewählten Erinnerungsstücks verrechnet.",
  ],
  [
    "02",
    "Brautstrauß versenden",
    "Sendet euren Brautstrauß idealerweise ein bis zwei Tage, spätestens jedoch zwei bis drei Tage nach der Hochzeit per DHL Express zu uns.",
  ],
  [
    "03",
    "Blüten konservieren",
    "Wir trocknen die Blumen schonend, arrangieren sie individuell und gießen sie anschließend in hochwertiges Kunstharz ein.",
  ],
  [
    "04",
    "Schleifen, polieren & versenden",
    "Nach der Aushärtung wird euer Stück geschliffen, poliert und sorgfältig geprüft. Die gesamte Bearbeitungszeit beträgt in der Regel zwei bis sechs Monate.",
  ],
];

export default function Process() {
  return (
    <section className="mobileSection processSection" id="ablauf">
      <p className="sectionLabel">So läuft es ab</p>
      <h2>Vier Schritte. Eine Erinnerung für immer.</h2>

      <div className="mobileTimeline">
        {steps.map(([number, title, text]) => (
          <article key={number}>
            <span>{number}</span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="shippingNote">
        <strong>Wichtig für den Versand</strong>
        <p>
          Bitte den Strauß trocken, luftig und sicher verpacken. Keine Folie direkt
          um die Blüten legen. Die genaue Versandadresse und Verpackungsanleitung
          erhaltet ihr nach der Reservierung.
        </p>
      </div>
    </section>
  );
}
