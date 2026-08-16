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

      {/* =====================================================
          FLOATING PARTICLES
      ===================================================== */}

      <div className="nz-particles" aria-hidden="true">
        {Array.from({ length: 26 }).map((_, i) => (
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
          MAP PLATFORM / CENTRAL GLOW
      ===================================================== */}

      <div className="nz-platform" aria-hidden="true">
        <div className="platform-ring ring-1"></div>
        <div className="platform-ring ring-2"></div>
        <div className="platform-ring ring-3"></div>

        <div className="platform-glow"></div>
      </div>

      {/* =====================================================
          NEW ZEALAND MAP
      ===================================================== */}

      <div className="nz-map-stage">
        {/* Large soft glow behind map */}
        <div className="nz-map-glow"></div>

        {/* Secondary map glow */}
        <div className="nz-map-glow-secondary"></div>

        {/* =================================================
            ACTUAL NZ SVG

            IMPORTANT:
            /nz.svg contains ONLY the NZ map.
        ================================================= */}

        <img
          src="/nz.svg"
          alt="New Zealand"
          className="nz-map-image"
        />

        {/* Glow copy behind the actual map */}
        <img
          src="/nz.svg"
          alt=""
          aria-hidden="true"
          className="nz-map-image-glow"
        />

        {/* =================================================
            MAP NETWORK / LIGHTING
        ================================================= */}

        <div className="nz-map-network"></div>

        <div className="nz-map-shine"></div>

        {/* =================================================
            MAP DATA NODES
        ================================================= */}

        <span className="nz-node node-1">
          <i></i>
        </span>

        <span className="nz-node node-2">
          <i></i>
        </span>

        <span className="nz-node node-3">
          <i></i>
        </span>

        <span className="nz-node node-4">
          <i></i>
        </span>

        <span className="nz-node node-5">
          <i></i>
        </span>

        <span className="nz-node node-6">
          <i></i>
        </span>

        {/* =================================================
            ORANGE ACTIVE HOTSPOTS
        ================================================= */}

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
          CONNECTION SYSTEM

          These connect the floating service cards
          visually back toward the NZ map.
      ===================================================== */}

      <svg
        className="nz-connections"
        viewBox="0 0 900 700"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* SEO */}
        <path
          className="connection-blue connection-seo"
          d="M90 165 C250 105 390 145 545 245"
        />

        {/* ADS */}
        <path
          className="connection-orange connection-ads"
          d="M815 185 C700 205 635 245 555 315"
        />

        {/* WEB DESIGN */}
        <path
          className="connection-blue connection-web"
          d="M115 525 C270 465 410 405 535 365"
        />

        {/* LEADS */}
        <path
          className="connection-blue connection-leads"
          d="M815 535 C710 500 635 445 550 405"
        />
      </svg>

      {/* =====================================================
          CONNECTION SIGNALS

          Small moving points travelling through the
          connection system.
      ===================================================== */}

      <span className="connection-signal signal-seo"></span>
      <span className="connection-signal signal-ads"></span>
      <span className="connection-signal signal-web"></span>
      <span className="connection-signal signal-leads"></span>

      {/* =====================================================
          FLOATING SERVICE CARD — SEO
      ===================================================== */}

      <div className="nz-floating-card card-seo">
        <div className="card-icon blue-icon">
          <span>⌕</span>
        </div>

        <div className="card-content">
          <strong>SEO</strong>
          <span>More Visibility</span>
        </div>
      </div>

      {/* =====================================================
          FLOATING SERVICE CARD — ADS
      ===================================================== */}

      <div className="nz-floating-card card-ads">
        <div className="card-icon orange-icon">
          <span>◈</span>
        </div>

        <div className="card-content">
          <strong>ADS</strong>
          <span>More Traffic</span>
        </div>
      </div>

      {/* =====================================================
          FLOATING SERVICE CARD — WEB DESIGN
      ===================================================== */}

      <div className="nz-floating-card card-web">
        <div className="card-icon blue-icon">
          <span>▣</span>
        </div>

        <div className="card-content">
          <strong>WEB DESIGN</strong>
          <span>Stronger Presence</span>
        </div>
      </div>

      {/* =====================================================
          FLOATING SERVICE CARD — LEADS
      ===================================================== */}

      <div className="nz-floating-card card-leads">
        <div className="card-icon blue-icon">
          <span>♙</span>
        </div>

        <div className="card-content">
          <strong>LEADS</strong>
          <span>More Customers</span>
        </div>
      </div>

      {/* =====================================================
          EXTRA AMBIENT SIGNALS
      ===================================================== */}

      <div className="nz-signal signal-a"></div>
      <div className="nz-signal signal-b"></div>
      <div className="nz-signal signal-c"></div>
      <div className="nz-signal signal-d"></div>
    </div>
  );
}
