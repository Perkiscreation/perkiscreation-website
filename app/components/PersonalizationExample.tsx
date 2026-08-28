export default function PersonalizationExample() {
  return (
    <section
      className="personalizationExample"
      aria-labelledby="personalization-heading"
    >
      <div className="personalizationExampleImage">
        <img
          src="/personalisierung-beispiel.jpg"
          alt="Beispiel einer Personalisierung mit Namen und Hochzeitsdatum"
        />
      </div>

      <div className="personalizationExampleContent">
        <p className="eyebrow">Beispiel: Personalisierung</p>
        <h2 id="personalization-heading">Namen, Datum oder beides</h2>
        <p>
          Eine Personalisierung kostet insgesamt 30 € zusätzlich. Im
          Kontaktformular reicht zunächst die Angabe, ob ihr sie möchtet.
        </p>
        <p className="personalizationExampleNote">
          Namen, Datum und Schriftfarbe klären wir später gemeinsam, sobald
          euer Brautstrauß bei uns angekommen ist.
        </p>
      </div>
    </section>
  );
}
