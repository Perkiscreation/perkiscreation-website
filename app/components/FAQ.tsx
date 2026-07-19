const faqs = [
  ["Wann sollten wir reservieren?", "Am besten einige Wochen oder Monate vor der Hochzeit."],
  ["Wann muss der Brautstrauß bei euch sein?", "Möglichst innerhalb von ein bis zwei Werktagen nach der Hochzeit."],
  ["Sind alle Blumen geeignet?", "Viele Blumen eignen sich gut. Farbe und Form können sich beim Trocknen natürlich verändern."],
  ["Wie lange dauert die Fertigstellung?", "In der Regel etwa 2 bis 6 Monate – abhängig von Saison, Trocknung und Auftragslage."],
  ["Wie wird die Reservierungsgebühr verrechnet?", "Die 50 € werden vollständig mit dem späteren Endpreis verrechnet."],
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
