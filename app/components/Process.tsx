const steps = [
  ["01", "Termin reservieren", "Anfrage mit Hochzeitsdatum senden und nach Zahlung der Reservierungsgebühr den Platz sichern."],
  ["02", "Hochzeit feiern", "Genießt euren besonderen Tag. Für die Form müsst ihr euch noch nicht entschieden haben."],
  ["03", "Strauß versenden", "Bitte sendet den Brautstrauß ein bis zwei Werktage später per Express zu uns."],
  ["04", "Konservierung", "Wir trocknen und konservieren eure Blumen sorgfältig in hochwertigem Epoxidharz."],
  ["05", "Erinnerungsstück erhalten", "Nach etwa 2 bis 6 Monaten kommt euer fertiges Unikat sicher verpackt bei euch an."],
];

export default function Process() {
  return (
    <section className="section process" id="ablauf">
      <div className="sectionIntro centered">
        <p className="eyebrow">So läuft unsere Konservierung ab</p>
        <h2>Schritt für Schritt zu eurem Erinnerungsstück.</h2>
      </div>

      <div className="timeline">
        {steps.map(([number, title, text]) => (
          <article key={number}>
            <div className="timelineDot">{number}</div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
