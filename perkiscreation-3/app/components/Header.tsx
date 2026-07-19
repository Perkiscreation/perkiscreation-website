"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="mobileHeader">
        <a href="#start" className="logo">
          <span className="logoMark">P</span>
          <span>
            <strong>PERKISCREATION</strong>
            <small>Erinnerungen für die Ewigkeit</small>
          </span>
        </a>

        <button
          className="burger"
          type="button"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </header>

      <nav className={`drawer ${open ? "drawerOpen" : ""}`}>
        <a href="#ablauf" onClick={() => setOpen(false)}>Ablauf</a>
        <a href="#formen" onClick={() => setOpen(false)}>Formen &amp; Preise</a>
        <a href="#wissen" onClick={() => setOpen(false)}>Gut zu wissen</a>
        <a href="#kontakt" onClick={() => setOpen(false)}>Termin anfragen</a>
      </nav>
    </>
  );
}
