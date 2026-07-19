export default function Reservation() {
  return (
    <section className="reservation" id="reservierung">
      <div>
        <p className="eyebrow">Plätze 2026 &amp; 2027</p>
        <h2>Sichert euch euren Platz.</h2>
        <p>
          Gebt bei eurer Anfrage unbedingt euer Hochzeitsdatum an. So können
          wir prüfen, ob rund um euren Termin noch Kapazität frei ist.
        </p>
      </div>

      <div className="reservationCards">
        <article>
          <span>01</span>
          <h3>Anfrage senden</h3>
          <p>Hochzeitsdatum mitteilen und Verfügbarkeit prüfen lassen.</p>
        </article>
        <article>
          <span>02</span>
          <h3>50 € reservieren</h3>
          <p>Nach Zahlungseingang bestätigen wir euren Auftrag verbindlich.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Form später wählen</h3>
          <p>Die Form müsst ihr jetzt noch nicht festlegen. Wir beraten euch später gern.</p>
        </article>
      </div>

      <p className="smallNote">
        Die Reservierungsgebühr wird vollständig mit dem späteren Endpreis verrechnet.
      </p>
    </section>
  );
}
