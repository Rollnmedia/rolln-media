.hero {
  position: relative;

  min-height: calc(100vh - 108px);

  padding: 65px 5vw 75px;

  display: grid;

  grid-template-columns: 0.95fr 1.05fr;

  align-items: center;

  gap: 2vw;

  background: #080808;

  color: #ffffff;

  overflow: hidden;
}


/* =========================================================
   CONTENT
========================================================= */

.hero-content {
  position: relative;

  z-index: 3;

  max-width: 760px;
}


/* =========================================================
   EYEBROW
========================================================= */

.hero-eyebrow {
  display: flex;

  align-items: center;

  gap: 12px;

  margin-bottom: 38px;

  color: #8a8a8f;

  font-size: 10px;

  font-weight: 600;

  letter-spacing: 0.18em;
}

.hero-eyebrow span {
  width: 9px;
  height: 9px;

  flex-shrink: 0;

  border-radius: 50%;

  background: var(--orange);

  box-shadow:
    0 0 18px rgba(244, 123, 32, 0.55);
}


/* =========================================================
   HEADING
========================================================= */

.hero h1 {
  margin: 0;

  font-size: clamp(64px, 7.1vw, 108px);

  line-height: 0.86;

  letter-spacing: -0.075em;

  font-weight: 600;
}

.hero h1 span {
  color: #55555b;
}


/* =========================================================
   DESCRIPTION
========================================================= */

.hero-description {
  max-width: 650px;

  margin: 38px 0 0;

  color: #8d8d92;

  font-size: 15px;

  line-height: 1.8;

  letter-spacing: -0.01em;
}


/* =========================================================
   ACTIONS
========================================================= */

.hero-actions {
  display: flex;

  align-items: center;

  gap: 32px;

  margin-top: 42px;
}


/* =========================================================
   PRIMARY CTA
========================================================= */

.hero-primary {
  position: relative;

  display: inline-flex;

  align-items: center;

  justify-content: space-between;

  gap: 55px;

  min-width: 235px;

  padding: 18px 20px;

  background: #f3f3f1;

  color: #0a0a0a;

  text-decoration: none;

  font-size: 11px;

  font-weight: 700;

  letter-spacing: 0.09em;

  overflow: hidden;

  transition:
    transform 0.3s ease,
    background 0.3s ease;
}

.hero-primary::before {
  content: "";

  position: absolute;

  inset: 0;

  background: var(--orange);

  transform: translateX(-101%);

  transition: transform 0.35s ease;
}

.hero-primary > * {
  position: relative;

  z-index: 1;
}

.hero-primary span:last-child {
  color: var(--orange);

  font-size: 18px;

  line-height: 1;

  transition:
    color 0.3s ease,
    transform 0.3s ease;
}

.hero-primary:hover {
  transform: translateY(-3px);

  background: var(--orange);
}

.hero-primary:hover::before {
  transform: translateX(0);
}

.hero-primary:hover span:last-child {
  color: #0a0a0a;

  transform: translate(3px, -3px);
}


/* =========================================================
   SECONDARY CTA
========================================================= */

.hero-secondary {
  position: relative;

  display: inline-flex;

  align-items: center;

  gap: 10px;

  padding-bottom: 7px;

  color: #85858a;

  text-decoration: none;

  font-size: 11px;

  font-weight: 500;

  letter-spacing: 0.08em;

  transition: color 0.25s ease;
}

.hero-secondary::after {
  content: "";

  position: absolute;

  left: 0;
  right: 0;
  bottom: 0;

  height: 1px;

  background: #3a3a3e;

  transform-origin: left;

  transition:
    transform 0.3s ease,
    background 0.3s ease;
}

.hero-secondary:hover {
  color: #ffffff;
}

.hero-secondary:hover::after {
  background: var(--orange);

  transform: scaleX(0.55);
}


/* =========================================================
   HERO VISUAL — DESKTOP
========================================================= */

.hero-visual {
  position: relative;

  z-index: 1;

  width: 100%;

  min-width: 0;

  display: flex;

  align-items: center;

  justify-content: flex-end;

  pointer-events: none;
}

.hero-visual img {
  display: block;

  width: min(100%, 620px);

  height: auto;

  max-height: 72vh;

  object-fit: contain;

  user-select: none;

  -webkit-user-drag: none;

  transform: translateX(3%);
}


/* =========================================================
   LAPTOP
========================================================= */

@media (max-width: 1200px) {

  .hero {
    min-height: calc(100vh - 100px);

    padding-top: 50px;

    padding-bottom: 65px;

    grid-template-columns: 0.95fr 1fr;

    gap: 10px;
  }

  .hero h1 {
    font-size: clamp(58px, 7vw, 92px);
  }

  .hero-description {
    max-width: 560px;
  }

  .hero-visual img {
    width: 550px;

    max-width: 110%;

    max-height: 68vh;
  }

}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 900px) {

  .hero {
    min-height: calc(100vh - 95px);

    padding: 45px 4vw 60px;

    grid-template-columns: 1fr 0.8fr;
  }

  .hero h1 {
    font-size: clamp(52px, 7vw, 76px);
  }

  .hero-eyebrow {
    margin-bottom: 30px;
  }

  .hero-description {
    max-width: 470px;

    font-size: 14px;
  }

  .hero-visual img {
    width: 460px;

    max-width: 125%;
  }

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 800px) {

  .hero {
    position: relative;

    min-height: calc(100svh - 78px);

    height: auto;

    padding: 85px 24px 90px;

    display: block;

    overflow: hidden;
  }


  /* =====================================================
     CONTENT
  ===================================================== */

  .hero-content {
    position: relative;

    z-index: 3;

    width: 100%;

    max-width: 520px;
  }


  /* =====================================================
     EYEBROW
  ===================================================== */

  .hero-eyebrow {
    gap: 10px;

    margin-bottom: 28px;

    font-size: 8px;

    letter-spacing: 0.14em;
  }

  .hero-eyebrow span {
    width: 7px;
    height: 7px;
  }


  /* =====================================================
     HEADING
  ===================================================== */

  .hero h1 {
    max-width: 360px;

    font-size: clamp(53px, 14.5vw, 72px);

    line-height: 0.87;
  }


  /* =====================================================
     DESCRIPTION
  ===================================================== */

  .hero-description {
    position: relative;

    z-index: 3;

    max-width: 320px;

    margin-top: 30px;

    color: #8d8d92;

    font-size: 13px;

    line-height: 1.7;
  }


  /* =====================================================
     ACTIONS
  ===================================================== */

  .hero-actions {
    position: relative;

    z-index: 4;

    display: flex;

    flex-direction: column;

    align-items: flex-start;

    gap: 20px;

    margin-top: 32px;
  }

  .hero-primary {
    width: 290px;

    min-width: 0;

    padding: 17px 19px;
  }

  .hero-secondary {
    font-size: 10px;
  }


  /* =====================================================
     MOBILE IMAGE
     RIGHT SIDE — ABSOLUTE
  ===================================================== */

  .hero-visual {
    position: absolute;

    z-index: 1;

    top: 105px;

    right: -190px;

    width: 470px;

    height: auto;

    margin: 0;

    padding: 0;

    display: block;

    pointer-events: none;
  }

  .hero-visual img {
    display: block;

    width: 470px;

    max-width: none;

    max-height: none;

    height: auto;

    margin: 0;

    transform: none;
  }


  /* =====================================================
     SMALL DARK OVERLAY
     Keeps text readable over visual
  ===================================================== */

  .hero::after {
    content: "";

    position: absolute;

    z-index: 2;

    inset: 0;

    pointer-events: none;

    background:
      linear-gradient(
        90deg,
        rgba(8, 8, 8, 0.95) 0%,
        rgba(8, 8, 8, 0.72) 35%,
        rgba(8, 8, 8, 0.15) 72%,
        rgba(8, 8, 8, 0) 100%
      );
  }

}


/* =========================================================
   SMALL MOBILE
========================================================= */

@media (max-width: 500px) {

  .hero {
    min-height: calc(100svh - 72px);

    padding: 78px 20px 85px;
  }


  .hero h1 {
    max-width: 310px;

    font-size: 52px;

    line-height: 0.88;
  }


  .hero-description {
    max-width: 285px;

    margin-top: 27px;

    font-size: 12.5px;
  }


  .hero-actions {
    margin-top: 30px;
  }


  .hero-primary {
    width: 275px;

    padding: 16px 18px;
  }


  /* ---------------- IMAGE ---------------- */

  .hero-visual {
    top: 125px;

    right: -205px;

    width: 450px;
  }

  .hero-visual img {
    width: 450px;
  }

}


/* =========================================================
   VERY SMALL MOBILE
========================================================= */

@media (max-width: 380px) {

  .hero {
    padding-left: 18px;

    padding-right: 18px;
  }


  .hero h1 {
    max-width: 285px;

    font-size: 48px;
  }


  .hero-description {
    max-width: 265px;

    font-size: 12px;
  }


  .hero-visual {
    top: 135px;

    right: -215px;

    width: 440px;
  }

  .hero-visual img {
    width: 440px;
  }

}


/* =========================================================
   ACCESSIBILITY
========================================================= */

@media (prefers-reduced-motion: reduce) {

  .hero-primary,
  .hero-primary::before,
  .hero-secondary,
  .hero-secondary::after {
    transition: none;
  }

}
