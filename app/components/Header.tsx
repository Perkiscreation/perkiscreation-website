"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="announcement">
        Sichere dir deinen Platz für 2026 &amp; 2027
      </div>

      <header className="header">
        <a href="#start" className="brand">
          <strong>PERKISCREATION</strong>
          <span>Erinnerung für die Ewigkeit</span>
        </a>

        <nav className="nav">
          <a href="#warum">Warum Perkiscreation</a>
          <a href="#ablauf">Ablauf</a>
          <a href="#produkte">Formen &amp; Preise</a>
          <a href="#wissen">Gut zu wissen</a>
          <a href="#kontakt">Kontakt</a>
        </nav>

        <a className="headerCta" href="#kontakt">
          Termin anfragen
        </a>

        <button
          className="menuButton"
          type="button"
          aria-label="Menü öffnen"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <nav className={`mobileNav ${open ? "mobileNavOpen" : ""}`}>
        <a href="#warum" onClick={() => setOpen(false)}>
          Warum Perkiscreation
        </a>
        <a href="#ablauf" onClick={() => setOpen(false)}>
          Ablauf
        </a>
        <a href="#produkte" onClick={() => setOpen(false)}>
          Formen &amp; Preise
        </a>
        <a href="#wissen" onClick={() => setOpen(false)}>
          Gut zu wissen
        </a>
        <a href="#kontakt" onClick={() => setOpen(false)}>
          Kontakt
        </a>
      </nav>
    </>
  );
}