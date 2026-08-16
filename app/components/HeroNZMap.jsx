"use client";

import { useEffect, useState } from "react";

export default function HeroNZMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`nz-visual ${mounted ? "is-mounted" : ""}`}>

      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <div className="nz-bg-glow"></div>
      <div className="nz-bg-glow nz-bg-glow-orange"></div>

      {/* Particles */}
      <div className="nz-particles">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i}></span>
        ))}
      </div>


      {/* =====================================================
          ORBIT SYSTEM
      ===================================================== */}

      <div className="nz-orbit nz-orbit-1"></div>
      <div className="nz-orbit nz-orbit-2"></div>
      <div className="nz-orbit nz-orbit-3"></div>


      {/* =====================================================
          MAP PLATFORM
      ===================================================== */}

      <div className="nz-platform">

        <div className="platform-ring ring-1"></div>
        <div className="platform-ring ring-2"></div>
        <div className="platform-ring ring-3"></div>

        <div className="platform-glow"></div>

      </div>


      {/* =====================================================
          NEW ZEALAND MAP
      ===================================================== */}

      <div className="nz-map-stage">

        {/* Outer blurred glow */}
        <div className="nz-map-glow"></div>

        {/* Actual SVG */}
        <img
          src="/nz.svg"
          alt="New Zealand"
          className="nz-map-image"
        />

        {/* Network grid clipped to map */}
        <div className="nz-map-network"></div>

        {/* Bright map outline */}
        <div className="nz-map-outline"></div>


        {/* =================================================
            MAP DATA POINTS
        ================================================= */}

        <span className="nz-node node-1"></span>
        <span className="nz-node node-2"></span>
        <span className="nz-node node-3"></span>
        <span className="nz-node node-4"></span>
        <span className="nz-node node-5"></span>


        {/* Orange active points */}

        <span className="nz-hotspot hotspot-1">
          <i></i>
        </span>

        <span className="nz-hotspot hotspot-2">
          <i></i>
        </span>

        <span className="nz-hotspot hotspot-3">
          <i></i>
        </span>

        <span className="nz-hotspot hotspot-4">
          <i></i>
        </span>

      </div>


      {/* =====================================================
          CONNECTION LINES
      ===================================================== */}

      <svg
        className="nz-connections"
        viewBox="0 0 900 700"
        preserveAspectRatio="none"
      >

        <path
          className="connection-blue connection-seo"
          d="M190 145 C310 120 390 170 500 205"
        />

        <path
          className="connection-orange connection-ads"
          d="M710 195 C620 205 590 245 535 285"
        />

        <path
          className="connection-blue connection-web"
          d="M150 445 C290 405 380 390 470 355"
        />

        <path
          className="connection-blue connection-leads"
          d="M710 500 C625 470 585 420 520 395"
        />

      </svg>


      {/* =====================================================
          FLOATING CARDS
      ===================================================== */}

      <div className="nz-floating-card card-seo">
        <div className="card-icon blue-icon">⌕</div>

        <div>
          <strong>SEO</strong>
          <span>More Visibility</span>
        </div>
      </div>


      <div className="nz-floating-card card-ads">
        <div className="card-icon orange-icon">◈</div>

        <div>
          <strong>ADS</strong>
          <span>More Traffic</span>
        </div>
      </div>


      <div className="nz-floating-card card-web">
        <div className="card-icon blue-icon">▣</div>

        <div>
          <strong>WEB DESIGN</strong>
          <span>Stronger Presence</span>
        </div>
      </div>


      <div className="nz-floating-card card-leads">
        <div className="card-icon blue-icon">♙</div>

        <div>
          <strong>LEADS</strong>
          <span>More Customers</span>
        </div>
      </div>


      {/* =====================================================
          EXTRA SIGNALS
      ===================================================== */}

      <div className="nz-signal signal-a"></div>
      <div className="nz-signal signal-b"></div>
      <div className="nz-signal signal-c"></div>

    </div>
  );
}
