export default function Reservation() {
  return (
    <section className="reservation" id="reservierung">
      <p className="eyebrow">Deinen Hochzeitstermin vormerken</p>
      <h2>Sichere dir deinen Platz.</h2>

      <div className="reservationSteps">
        <article>
          <span>01</span>
          <h3>Hochzeitsdatum anfragen</h3>
          <p>
            Gib bei deiner Anfrage unbedingt dein Hochzeitsdatum an. So können
            wir prüfen, ob rund um deinen Termin noch ausreichend Kapazität
            für deinen Brautstrauß frei ist.
          </p>
        </article>

        <article>
          <span>02</span>
          <h3>Platz verbindlich reservieren</h3>
          <p>
            Nach deiner Anfrage erhältst du die Rechnung über 50 €. Sobald die
            Reservierungsgebühr eingegangen ist, bestätigen wir deinen Auftrag
            und reservieren deinen Platz verbindlich.
          </p>
        </article>

        <article>
          <span>03</span>
          <h3>Form später auswählen</h3>
          <p>
            Für welche Form du dich entscheidest, musst du zu diesem Zeitpunkt
            noch nicht unbedingt festlegen. Wir können dies später ganz in Ruhe
            gemeinsam besprechen.
          </p>
        </article>
      </div>

      <p className="reservationHint">
        Die Reservierungsgebühr wird später vollständig mit dem Preis deines
        Erinnerungsstücks verrechnet.
      </p>
    </section>
  );
}
