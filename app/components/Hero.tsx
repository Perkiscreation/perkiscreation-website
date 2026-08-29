export default function Hero() {
  return (
    <section className="weddingHero" id="start">

      {/* LINKER TEXTBEREICH */}
      <div className="weddingHeroContent">

        <p className="weddingHeroEyebrow">
          Erinnerungen verdienen etwas Besonderes
        </p>

        <h1 className="weddingHeroTitle">
          Aus eurem Brautstrauß entsteht
          <span style={{ color: "#8A7163" }}>
            eine Erinnerung für die Ewigkeit.
          </span>
        </h1>

        <span
          className="weddingHeroLine"
          aria-hidden="true"
        />

        <p className="weddingHeroText">
          Mit viel Liebe zum Detail konservieren wir euren
          Brautstrauß in hochwertigem Kunstharz und gestalten
          daraus ein einzigartiges Erinnerungsstück, das euch
          ein Leben lang begleitet.
        </p>

      </div>


      {/* RECHTES BILD */}
      <div className="weddingHeroImageArea">

        <img
          className="weddingHeroImage"
          src="/hero.jpg"
          alt="Eleganter Brautstrauß mit rosa Pfingstrosen und cremefarbenen Rosen"
        />


        {/* BUTTONS AUF DEM BLUMENSTRAUSS */}
        <div className="weddingHeroOverlayButtons">

          {/* Platz reservieren */}
          <a
            className="weddingHeroAppointment"
            href="#kontakt"
          >
            <span
              className="weddingHeroCalendar"
              aria-hidden="true"
            >
              ♡
            </span>

            <span className="weddingHeroAppointmentText">
              <small>
                Bereit, euren Brautstrauß für immer zu bewahren?
              </small>

              <strong>
                Platz reservieren
              </strong>
            </span>

            <b aria-hidden="true">
              →
            </b>
          </a>


          {/* FORMEN & PREISE */}
          <a
            className="weddingHeroPrices"
            href="#produkte"
          >
            <span>
              Formen &amp; Preise ansehen
            </span>

            <b aria-hidden="true">
              →
            </b>
          </a>

        </div>

      </div>

    </section>
  );
}