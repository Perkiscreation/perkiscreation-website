export default function BeforeAfter() {
  return (
    <section className="beforeAfter" id="vorher-nachher">
      <div className="sectionHeading centeredHeading">
        <p className="eyebrow">Aus Brautstrauß wird Erinnerung</p>
        <h2>Vorher &amp; Nachher.</h2>
        <p>
          Sobald die ersten eigenen Arbeiten fotografiert sind, findest du
          hier echte Vorher-Nachher-Beispiele mit einem interaktiven Slider.
        </p>
      </div>

      <div className="beforeAfterPlaceholder">
        <div>
          <span>Vorher</span>
          <strong>Dein Brautstrauß am Hochzeitstag</strong>
        </div>
        <div className="sliderHint" aria-hidden="true">↔</div>
        <div>
          <span>Nachher</span>
          <strong>Dein fertiges Erinnerungsstück</strong>
        </div>
      </div>
    </section>
  );
}
