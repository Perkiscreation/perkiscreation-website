"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(localStorage.getItem("perkis-cookie-choice") === null);
  }, []);

  function choose(value: string) {
    localStorage.setItem("perkis-cookie-choice", value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <aside className="cookieBanner">
      <div>
        <strong>Cookie-Einstellungen</strong>
        <p>
          Diese erste Version speichert lediglich eure Auswahl lokal im Browser.
        </p>
      </div>

      <div className="cookieButtons">
        <button onClick={() => choose("necessary")}>Nur notwendige</button>
        <button className="accept" onClick={() => choose("all")}>Alle akzeptieren</button>
      </div>
    </aside>
  );
}
