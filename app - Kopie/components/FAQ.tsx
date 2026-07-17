const faqs = [
  ["Wann sollte ich meinen Termin reservieren?", "Am besten einige Wochen oder Monate vor der Hochzeit."],
  ["Wann muss der Brautstrauß bei euch sein?", "Möglichst zeitnah nach der Hochzeit, damit die Blumen gut erhalten bleiben."],
  ["Sind alle Blumen geeignet?", "Viele Blumen eignen sich sehr gut. Farben und Formen können sich durch die Trocknung leicht verändern."],
  ["Wie lange dauert die Fertigstellung?", "Die Dauer hängt von Trocknung, Größe und Auftragslage ab. Du erhältst eine persönliche Einschätzung."],
  ["Wie wird die Reservierungsgebühr verrechnet?", "Die 50 € werden bei der Schlussrechnung vollständig angerechnet."],
];

export default function FAQ() {
  return (
    <section className="faq" id="faq">
      <div className="sectionHeading">
        <p className="eyebrow">Häufige Fragen</p>
        <h2>Alles Wichtige auf einen Blick.</h2>
      </div>

      <div className="faqList">
        {faqs.map(([question, answer]) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
