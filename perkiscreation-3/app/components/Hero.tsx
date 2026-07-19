export default function Hero() {
  return (
    <section className="newHero" id="start">
      <img
        src="/hero.jpg"
        alt="Braut mit hellem Brautstrauß und konserviertem Erinnerungsstück"
        className="newHeroImage"
      />

      <div className="newHeroShade" />

      <div className="newHeroContent">
        <p className="kicker">Brautstrauß-Konservierung in Resin</p>
        <h1>Aus eurem Brautstrauß entsteht eine Erinnerung für die Ewigkeit.</h1>
        <p>
          Wir bewahren die echten Blüten eures Hochzeitstages und gestalten daraus
          ein handgefertigtes Erinnerungsstück, das euch noch viele Jahre begleitet.
        </p>

        <div className="heroCtas">
          <a href="#kontakt" className="ctaTransparent">Termin anfragen</a>
          <a href="#formen" className="ctaGhost">Formen &amp; Preise</a>
        </div>
      </div>
    </section>
  );
}
