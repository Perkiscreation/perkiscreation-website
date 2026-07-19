export default function Hero() {
  return (
    <section className="weddingHero" id="start">
      <div className="weddingHeroContent">
        <p className="weddingHeroEyebrow">
          Erinnerungen verdienen etwas Besonderes
        </p>

        <h1 className="weddingHeroTitle">
          Aus eurem Brautstrauß entsteht ein Erinnerungsstück für die Ewigkeit.
        </h1>

        <span className="weddingHeroLine" aria-hidden="true" />

        <p className="weddingHeroText">
          Wir konservieren euren Brautstrauß mit viel Liebe zum Detail und
          schaffen daraus ein zeitloses Erinnerungsstück, das euch ein Leben
          lang begleitet.
        </p>

        <div className="weddingHeroButtons">
          <a className="weddingHeroPrimary" href="#ablauf">
            Zur Ablaufübersicht <span aria-hidden="true">→</span>
          </a>

          <a className="weddingHeroSecondary" href="#produkte">
            Formen &amp; Preise ansehen <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="weddingHeroImageArea">
        <img
          className="weddingHeroImage"
          src="/hero.jpg"
          alt="Brautstrauß und konserviertes Erinnerungsstück"
        />

        <a className="weddingHeroAppointment" href="#kontakt">
          <span className="weddingHeroCalendar" aria-hidden="true">
            ♡
          </span>

          <span className="weddingHeroAppointmentText">
            <small>
              Bereit, euren Brautstrauß für immer zu bewahren?
            </small>
            <strong>Termin anfragen</strong>
          </span>

          <b aria-hidden="true">→</b>
        </a>
      </div>
    </section>
  );
}