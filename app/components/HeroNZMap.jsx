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

      {/* Floating particles */}
      <div className="nz-particles">
        {Array.from({ length: 28 }).map((_, i) => (
          <span key={i}></span>
        ))}
      </div>


      {/* =====================================================
          ORBIT SYSTEM
      ===================================================== */}

      <div className="nz-orbit nz-orbit-1"></div>
      <div className="nz-orbit nz-orbit-2"></div>
      <div className="nz-orbit nz-orbit-3"></div>
      <div className="nz-orbit nz-orbit-4"></div>


      {/* =====================================================
          NZ MAP AREA
      ===================================================== */}

      <div className="nz-map-stage">

        {/* Main map glow */}
        <div className="nz-map-glow"></div>

        {/* Actual SVG */}
        <img
          src="/nz.svg"
          alt="New Zealand"
          className="nz-map-image"
        />

        {/* Gradient map overlay */}
        <div className="nz-map-gradient"></div>

        {/* Soft map edge glow */}
        <div className="nz-map-edge"></div>

        {/* Network/grid effect */}
        <div className="nz-map-network"></div>


        {/* =================================================
            MAP NODES
        ================================================= */}

        <span className="nz-node node-1"></span>
        <span className="nz-node node-2"></span>
        <span className="nz-node node-3"></span>
        <span className="nz-node node-4"></span>
        <span className="nz-node node-5"></span>
        <span className="nz-node node-6"></span>


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
        aria-hidden="true"
      >

        <path
          className="connection-blue connection-seo"
          d="M110 180 C270 100 430 155 570 250"
        />

        <path
          className="connection-orange connection-ads"
          d="M790 175 C690 190 640 245 570 315"
        />

        <path
          className="connection-blue connection-web"
          d="M90 510 C260 450 405 405 535 360"
        />

        <path
          className="connection-blue connection-leads"
          d="M800 535 C700 505 620 440 555 400"
        />

      </svg>


      {/* =====================================================
          FLOATING CARDS
      ===================================================== */}

      <div className="nz-floating-card card-seo">

        <div className="card-icon blue-icon">
          ⌕
        </div>

        <div className="card-copy">
          <strong>SEO</strong>
          <span>More Visibility</span>
        </div>

      </div>


      <div className="nz-floating-card card-ads">

        <div className="card-icon orange-icon">
          ◈
        </div>

        <div className="card-copy">
          <strong>ADS</strong>
          <span>More Traffic</span>
        </div>

      </div>


      <div className="nz-floating-card card-web">

        <div className="card-icon blue-icon">
          ▣
        </div>

        <div className="card-copy">
          <strong>WEB DESIGN</strong>
          <span>Stronger Presence</span>
        </div>

      </div>


      <div className="nz-floating-card card-leads">

        <div className="card-icon blue-icon">
          ♙
        </div>

        <div className="card-copy">
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
