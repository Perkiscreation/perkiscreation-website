export default function EternityNote() {
  return (
    <section className="section eternityNote" aria-labelledby="eternity-title">
      <div className="eternityCard">
        <div className="eternityIcon" aria-hidden="true">
          <svg viewBox="0 0 48 48" fill="none">
            <rect x="11" y="21" width="26" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
            <path d="M16 21v-5a8 8 0 0 1 16 0v5" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="24" cy="30" r="2" fill="currentColor" />
            <path d="M24 32v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        <div className="eternityContent">
          <p className="eyebrow">FÜR EUER ERINNERUNGSSTÜCK</p>
          <h2 id="eternity-title">Für die Ewigkeit bewahrt.</h2>
          <p>
            Eure Blumen werden mit viel Liebe getrocknet, arrangiert und in
            hochwertigem Epoxidharz konserviert. So bleibt ein besonderer Teil
            eures Hochzeitstages als persönliches Erinnerungsstück erhalten.
          </p>

          <details className="eternityDetails">
            <summary>♡ Gut zu wissen</summary>
            <p>
              Auch hochwertiges Kunstharz kann sich durch UV-Licht und natürliche
              Alterung über viele Jahre leicht verändern. Eine gewisse Vergilbung
              lässt sich deshalb nicht vollständig ausschließen. Wir verwenden
              hochwertige Materialien und achten auf eine sorgfältige Verarbeitung,
              damit euer Erinnerungsstück möglichst lange schön bleibt.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
