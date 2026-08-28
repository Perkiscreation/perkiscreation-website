const faqs = [
  ["Wann sollten wir reservieren?", "Am besten so früh wie möglich, sobald euer Hochzeitsdatum feststeht. Wir prüfen individuell, ob rund um euren Termin noch Kapazität frei ist."],
  ["Wie funktioniert die Reservierungsgebühr?", "Nach unserer Auftragsbestätigung werden 50 € fällig. Die Gebühr reserviert euren Termin verbindlich und wird vollständig auf den Endpreis angerechnet."],
  ["Wann ist der Restbetrag fällig?", "Ein bis zwei Wochen vor der Hochzeit erhaltet ihr zusammen mit der Versandanleitung die Restrechnung."],
  ["Wann muss der Brautstrauß bei euch sein?", "Ideal ist der Versand ein bis zwei Tage, spätestens drei Tage nach der Hochzeit per DHL Express. Eine persönliche Abgabe ist nach Absprache möglich."],
  ["Müssen Form und Personalisierung sofort feststehen?", "Nein. Bei der Anfrage reicht eine erste Auswahl. Namen, Datum, Schriftfarbe und weitere Details können später gemeinsam abgestimmt werden."],
  ["Kann auch ein bereits luftgetrockneter Strauß konserviert werden?", "Ja, grundsätzlich kann auch ein bereits luftgetrockneter Strauß in Kunstharz konserviert werden. Entscheidend ist sein Zustand – wir prüfen individuell, ob die Blumen noch geeignet sind."],
  ["Sind alle Blumen geeignet?", "Viele Blumen eignen sich gut. Wie sie Trocknung und Harz reagieren, ist jedoch naturbedingt unterschiedlich. Farbe und Form können sich sichtbar verändern."],
  ["Wie lange dauert die Fertigstellung?", "In der Regel ungefähr 2 bis 6 Monate, abhängig von Saison, Trocknung, Gestaltung und Auftragslage."],
];

export default function FAQ() {
  return (
    <section className="section faq" id="faq">
      <div className="sectionIntro">
        <p className="eyebrow">Häufige Fragen</p>
        <h2>Alles Wichtige auf einen Blick.</h2>
      </div>
      <div className="faqList">
        {faqs.map(([q, a]) => (
          <details key={q}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
