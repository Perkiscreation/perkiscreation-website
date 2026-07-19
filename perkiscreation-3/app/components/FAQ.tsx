const questions = [
  ["Wann sollte ich reservieren?", "Am besten sobald euer Hochzeitstermin feststeht. Besonders beliebte Monate sind schnell ausgebucht."],
  ["Wie gelangen die Blumen zu euch?", "Nach der Hochzeit besprecht ihr mit uns die sichere persönliche Übergabe oder den Versand."],
  ["Verändern sich die Farben?", "Naturmaterialien können sich beim Trocknen und im Resin leicht verändern. Genau das macht jedes Stück einzigartig."],
  ["Wie lange dauert die Fertigung?", "Die Herstellung benötigt mehrere Arbeitsschritte und ausreichend Ruhezeit. Die genaue Dauer teilen wir euch bei der Reservierung mit."],
];

export default function FAQ() {
  return (
    <section className="section faq" id="faq">
      <div className="sectionHeading">
        <p className="eyebrow">Häufige Fragen</p>
        <h2>Gut zu wissen.</h2>
      </div>

      <div className="faqList">
        {questions.map(([question, answer]) => (
          <details key={question}>
            <summary>{question}<span>+</span></summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
