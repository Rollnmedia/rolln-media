"use client";

import { useEffect, useState } from "react";

export default function HeroNZMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`nz-visual ${mounted ? "is-mounted" : ""}`}>

      {/* Ambient glow */}
      <div className="nz-glow nz-glow-blue"></div>
      <div className="nz-glow nz-glow-orange"></div>

      {/* Background particles */}
      <div className="nz-particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>


      {/* Orbit system */}
      <div className="nz-orbit orbit-a"></div>
      <div className="nz-orbit orbit-b"></div>
      <div className="nz-orbit orbit-c"></div>


      {/* Main map */}
      <div className="nz-map-wrap">

        <svg
          className="nz-map"
          viewBox="0 0 500 760"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="New Zealand"
          role="img"
        >

          <defs>

            {/* Blue gradient */}
            <linearGradient
              id="nzGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#5f8fff" />
              <stop offset="45%" stopColor="#2361d1" />
              <stop offset="100%" stopColor="#0b2d72" />
            </linearGradient>


            {/* Orange accent */}
            <linearGradient
              id="nzOrange"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#ffb15c" />
              <stop offset="50%" stopColor="#f47a20" />
              <stop offset="100%" stopColor="#a93800" />
            </linearGradient>


            {/* Map glow */}
            <filter
              id="mapGlow"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feGaussianBlur
                stdDeviation="8"
                result="blur"
              />

              <feColorMatrix
                in="blur"
                type="matrix"
                values="
                  0 0 0 0 0.15
                  0 0 0 0 0.40
                  0 0 0 0 1
                  0 0 0 0.9 0
                "
              />

              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>


            {/* Fine grid */}
            <pattern
              id="mapGrid"
              width="18"
              height="18"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 18 0 L 0 0 0 18"
                fill="none"
                stroke="#9db9ff"
                strokeWidth="0.7"
                opacity="0.18"
              />
            </pattern>

          </defs>


          {/* SOUTH ISLAND */}

          <path
            className="nz-outline"
            d="
              M171 363
              C151 376 136 393 129 412
              C120 436 108 458 94 480
              C80 503 69 523 72 543
              C75 563 92 573 111 574
              C130 575 143 567 157 559
              C171 551 187 546 202 536
              C218 525 233 512 243 497
              C252 484 263 470 269 454
              C274 440 276 425 270 412
              C264 399 253 391 241 386
              C225 379 211 372 198 366
              C188 361 179 358 171 363
              Z
            "
            fill="url(#nzGradient)"
            filter="url(#mapGlow)"
          />


          {/* SOUTH ISLAND GRID */}

          <path
            d="
              M171 363
              C151 376 136 393 129 412
              C120 436 108 458 94 480
              C80 503 69 523 72 543
              C75 563 92 573 111 574
              C130 575 143 567 157 559
              C171 551 187 546 202 536
              C218 525 233 512 243 497
              C252 484 263 470 269 454
              C274 440 276 425 270 412
              C264 399 253 391 241 386
              C225 379 211 372 198 366
              C188 361 179 358 171 363
              Z
            "
            fill="url(#mapGrid)"
          />


          {/* NORTH ISLAND */}

          <path
            className="nz-outline"
            d="
              M286 112
              C275 125 271 142 275 158
              C279 173 288 184 297 195
              C305 205 309 216 307 228
              C304 241 294 251 286 261
              C278 272 276 285 282 297
              C288 309 299 318 310 327
              C321 336 331 346 337 358
              C343 371 347 384 356 392
              C365 400 378 399 389 392
              C401 385 410 374 414 362
              C418 349 415 336 407 325
              C400 315 392 306 391 295
              C390 284 396 274 403 265
              C411 254 418 242 417 229
              C416 215 409 203 399 194
              C390 186 381 179 378 167
              C375 155 381 142 387 130
              C394 116 396 101 390 89
              C384 77 372 72 359 75
              C345 78 332 86 321 95
              C309 104 298 111 286 112
              Z
            "
            fill="url(#nzGradient)"
            filter="url(#mapGlow)"
          />


          {/* NORTH ISLAND GRID */}

          <path
            d="
              M286 112
              C275 125 271 142 275 158
              C279 173 288 184 297 195
              C305 205 309 216 307 228
              C304 241 294 251 286 261
              C278 272 276 285 282 297
              C288 309 299 318 310 327
              C321 336 331 346 337 358
              C343 371 347 384 356 392
              C365 400 378 399 389 392
              C401 385 410 374 414 362
              C418 349 415 336 407 325
              C400 315 392 306 391 295
              C390 284 396 274 403 265
              C411 254 418 242 417 229
              C416 215 409 203 399 194
              C390 186 381 179 378 167
              C375 155 381 142 387 130
              C394 116 396 101 390 89
              C384 77 372 72 359 75
              C345 78 332 86 321 95
              C309 104 298 111 286 112
              Z
            "
            fill="url(#mapGrid)"
          />


          {/* Small island accents */}

          <circle
            cx="327"
            cy="45"
            r="4"
            fill="#f47a20"
            className="map-dot"
          />

          <circle
            cx="421"
            cy="185"
            r="3"
            fill="#5f8fff"
            className="map-dot"
          />

          <circle
            cx="68"
            cy="514"
            r="3"
            fill="#f47a20"
            className="map-dot"
          />


          {/* Orange growth line */}

          <path
            className="growth-line"
            d="
              M86 530
              C137 496 181 474 224 439
              C264 406 288 362 312 317
              C331 281 350 244 376 210
            "
          />

          <circle
            className="growth-point"
            cx="376"
            cy="210"
            r="6"
          />

        </svg>


        {/* Map center signal */}

        <div className="nz-center-point">
          <span></span>
        </div>

      </div>


      {/* Floating labels */}

      <div className="nz-label label-seo">
        <span className="label-dot"></span>
        SEO
      </div>

      <div className="nz-label label-ads">
        <span className="label-dot orange"></span>
        ADS
      </div>

      <div className="nz-label label-web">
        <span className="label-dot"></span>
        WEB
      </div>

      <div className="nz-label label-leads">
        <span className="label-dot orange"></span>
        LEADS
      </div>


      {/* Bottom signal */}

      <div className="nz-signal">
        <span></span>
        <span></span>
        <span></span>
      </div>

    </div>
  );
}
