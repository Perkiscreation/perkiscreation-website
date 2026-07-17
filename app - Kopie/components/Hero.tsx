export default function Hero() {
  return (
    <section className="hero" id="start">
      <div className="heroText">
        <p className="eyebrow">Brautstrauß-Konservierung</p>
        <h1>
          Dein Brautstrauß.
          <span>Für immer bewahrt.</span>
        </h1>
        <p className="lead">
          Wir verwandeln die Blumen deines besonderen Tages in ein
          handgefertigtes Erinnerungsstück aus Epoxidharz – filigran,
          individuell und mit viel Liebe zum Detail.
        </p>

        <div className="heroButtons">
          <a className="button" href="#kontakt">Termin anfragen</a>
          <a className="textLink" href="#produkte">Formen entdecken</a>
        </div>
      </div>

      <div className="heroVisual">
        <img
          className="heroPhoto"
          src="/hero-brautstrauss.png"
          alt="Brautstrauß mit cremefarbenen und altrosa Blumen in einem transparenten Hexagon"
        />
      </div>
    </section>
  );
}
