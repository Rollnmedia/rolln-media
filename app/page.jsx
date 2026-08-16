import HeroNZMap from "./components/HeroNZMap";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070c] text-white">

      {/* ================= HERO ================= */}

      <section className="relative min-h-[900px] overflow-hidden px-[6vw] pb-20 pt-48 lg:pt-52">

        {/* Background glow */}
        <div className="pointer-events-none absolute right-[10%] top-[5%] h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative z-20 mx-auto max-w-[1600px]">

          {/* Hero Content */}
          <div className="relative z-30 w-full lg:w-[55%]">

            <div className="mb-9 flex items-center gap-3 text-[11px] tracking-[0.18em] text-white/50">
              <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.8)]" />
              DIGITAL GROWTH AGENCY · NEW ZEALAND
            </div>

            <h1 className="max-w-[850px] font-sans text-[clamp(58px,9vw,148px)] font-semibold leading-[0.84] tracking-[-0.075em]">
              Digital growth
              <br />
              <span className="bg-gradient-to-r from-white via-[#d7e0f6] to-[#6688d5] bg-clip-text text-transparent">
                that clicks.
              </span>
            </h1>

            <p className="mt-10 max-w-[530px] text-[18px] leading-[1.7] text-white/55">
              We help businesses turn attention into meaningful traffic,
              qualified leads and measurable growth.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-4 rounded-full bg-orange-500 px-6 py-4 text-sm font-semibold text-[#05070c] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(249,115,22,0.22)]"
              >
                Start a Conversation
                <span>↗</span>
              </a>

              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-4 text-sm text-white/70 transition-all duration-300 hover:border-white/30 hover:text-white"
              >
                Explore Our Work
              </a>

            </div>
          </div>


          {/* ================= NZ HERO VISUAL ================= */}

          <div className="pointer-events-none absolute -right-[5%] top-[70px] z-10 hidden h-[780px] w-[58%] lg:block">
            <HeroNZMap />
          </div>

        </div>


        {/* ================= MOBILE NZ VISUAL ================= */}

        <div className="pointer-events-none relative z-10 mt-16 h-[500px] lg:hidden">
          <HeroNZMap />
        </div>


        {/* ================= HERO BOTTOM ================= */}

        <div className="absolute bottom-0 left-0 z-30 flex h-14 w-full items-center justify-center gap-3 border-y border-white/10 px-4 text-[9px] tracking-[0.15em] text-white/35 sm:gap-7 sm:text-[10px]">

          <span>SEO</span>

          <i className="not-italic text-orange-500">✦</i>

          <span>PAID MEDIA</span>

          <i className="not-italic text-orange-500">✦</i>

          <span>WEB DESIGN</span>

          <i className="not-italic text-orange-500">✦</i>

          <span>GROWTH</span>

        </div>

      </section>


      {/* ================= SERVICES ================= */}

      <section
        id="services"
        className="relative px-[6vw] py-32 lg:py-40"
      >

        <div className="mx-auto max-w-[1600px]">

          <div className="mb-10 text-[10px] tracking-[0.2em] text-orange-500">
            01 / WHAT WE DO
          </div>

          <h2 className="font-sans text-[clamp(52px,7vw,108px)] font-semibold leading-[0.9] tracking-[-0.065em]">
            Digital marketing
            <br />
            <span className="text-white/25">
              built to perform.
            </span>
          </h2>


          <div className="mt-24 grid grid-cols-1 border-t border-white/10 md:grid-cols-2">

            {/* Service 01 */}
            <div className="group relative min-h-[310px] border-b border-white/10 p-8 transition-colors duration-300 hover:bg-white/[0.025] md:border-r lg:p-10">

              <span className="text-[11px] tracking-[0.1em] text-orange-500">
                01
              </span>

              <div className="absolute right-8 top-8 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-[#05070c]">
                ↗
              </div>

              <h3 className="mt-16 font-sans text-4xl font-semibold tracking-[-0.04em] lg:text-[43px]">
                SEO
              </h3>

              <p className="mt-4 max-w-[450px] leading-[1.7] text-white/45">
                Build search visibility and attract customers who are actively
                looking for your services.
              </p>

            </div>


            {/* Service 02 */}
            <div className="group relative min-h-[310px] border-b border-white/10 p-8 transition-colors duration-300 hover:bg-white/[0.025] lg:p-10">

              <span className="text-[11px] tracking-[0.1em] text-orange-500">
                02
              </span>

              <div className="absolute right-8 top-8 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-[#05070c]">
                ↗
              </div>

              <h3 className="mt-16 font-sans text-4xl font-semibold tracking-[-0.04em] lg:text-[43px]">
                Google Ads
              </h3>

              <p className="mt-4 max-w-[450px] leading-[1.7] text-white/45">
                Put your business in front of high-intent customers and turn
                clicks into enquiries.
              </p>

            </div>


            {/* Service 03 */}
            <div className="group relative min-h-[310px] border-b border-white/10 p-8 transition-colors duration-300 hover:bg-white/[0.025] md:border-r lg:p-10">

              <span className="text-[11px] tracking-[0.1em] text-orange-500">
                03
              </span>

              <div className="absolute right-8 top-8 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-[#05070c]">
                ↗
              </div>

              <h3 className="mt-16 font-sans text-4xl font-semibold tracking-[-0.04em] lg:text-[43px]">
                Meta Ads
              </h3>

              <p className="mt-4 max-w-[450px] leading-[1.7] text-white/45">
                Creative campaigns designed to generate attention,
                conversations and leads.
              </p>

            </div>


            {/* Service 04 */}
            <div className="group relative min-h-[310px] border-b border-white/10 p-8 transition-colors duration-300 hover:bg-white/[0.025] lg:p-10">

              <span className="text-[11px] tracking-[0.1em] text-orange-500">
                04
              </span>

              <div className="absolute right-8 top-8 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-[#05070c]">
                ↗
              </div>

              <h3 className="mt-16 font-sans text-4xl font-semibold tracking-[-0.04em] lg:text-[43px]">
                Web Design
              </h3>

              <p className="mt-4 max-w-[450px] leading-[1.7] text-white/45">
                High-performance websites designed around your brand,
                customers and business goals.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= WORK ================= */}

      <section
        id="work"
        className="relative bg-[#090c13] px-[6vw] py-32 lg:py-40"
      >

        <div className="mx-auto max-w-[1600px]">

          <div className="mb-10 text-[10px] tracking-[0.2em] text-orange-500">
            02 / SELECTED WORK
          </div>

          <h2 className="font-sans text-[clamp(52px,7vw,108px)] font-semibold leading-[0.9] tracking-[-0.065em]">
            Work that speaks
            <br />
            <span className="text-white/25">
              for itself.
            </span>
          </h2>


          <div className="mt-24 grid min-h-[600px] overflow-hidden rounded-[25px] border border-white/10 bg-[#0d1119] lg:grid-cols-[40%_60%]">

            <div className="flex flex-col justify-center p-9 lg:p-16">

              <span className="text-[10px] tracking-[0.15em] text-orange-500">
                PROPERTY MANAGEMENT · NEW ZEALAND
              </span>

              <h3 className="mt-6 font-sans text-5xl font-semibold tracking-[-0.05em] lg:text-[60px]">
                Rent My Home
              </h3>

              <p className="mt-5 max-w-[450px] leading-[1.7] text-white/50">
                Website, SEO and digital growth work for a New Zealand
                property management brand.
              </p>

              <a
                href="#"
                className="mt-10 font-semibold text-white transition-colors hover:text-orange-500"
              >
                View Case Study ↗
              </a>

            </div>


            <div className="flex min-h-[400px] items-center justify-center bg-[#07090e] p-6">

              <div className="w-full max-w-[650px] overflow-hidden rounded-[15px] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)]">

                <div className="flex h-[35px] items-center gap-1.5 bg-[#151922] pl-4">

                  <span className="h-[7px] w-[7px] rounded-full bg-white/25" />
                  <span className="h-[7px] w-[7px] rounded-full bg-white/25" />
                  <span className="h-[7px] w-[7px] rounded-full bg-white/25" />

                </div>

                <div className="flex h-[280px] flex-col justify-center bg-gradient-to-br from-[#e9edf5] to-white p-8 text-[#10131a] lg:h-[360px] lg:p-12">

                  <div className="mb-5 text-[10px] tracking-[0.15em] text-[#365ba4]">
                    PROPERTY MANAGEMENT · NZ
                  </div>

                  <strong className="font-sans text-3xl font-semibold lg:text-[42px]">
                    Rent My Home
                  </strong>

                  <small className="mt-2 text-[15px]">
                    You Own. We Manage.
                  </small>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="relative flex min-h-[700px] flex-col justify-center px-[6vw] py-32 lg:min-h-[800px]"
      >

        <div className="mx-auto w-full max-w-[1600px]">

          <div className="mb-10 text-[10px] tracking-[0.2em] text-orange-500">
            03 / WHY ROLL’N MEDIA
          </div>

          <h2 className="font-sans text-[clamp(52px,7vw,108px)] font-semibold leading-[0.9] tracking-[-0.065em]">
            Strategy.
            <br />
            Creativity.
            <br />
            <span className="text-white/25">
              Growth.
            </span>
          </h2>

          <p className="mt-14 max-w-[650px] text-xl leading-[1.5] text-white/55 lg:text-[25px]">
            We combine strategy, creative thinking and digital execution to
            help businesses move from being seen to being chosen.
          </p>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section
        id="contact"
        className="relative flex min-h-[650px] items-center justify-center overflow-hidden px-[6vw] py-32 text-center lg:min-h-[700px]"
      >

        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(circle at center, black, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black, transparent 70%)",
          }}
        />

        {/* Orange Orb */}
        <div className="pointer-events-none absolute h-[500px] w-[500px] rounded-full bg-orange-500/15 blur-[80px] lg:h-[600px] lg:w-[600px]" />

        <div className="relative z-10">

          <div className="mb-10 text-[10px] tracking-[0.2em] text-orange-500">
            LET’S WORK TOGETHER
          </div>

          <h2 className="mb-12 font-sans text-[clamp(52px,9vw,130px)] font-semibold leading-[0.9] tracking-[-0.06em]">
            Ready to make
            <br />
            your next move?
          </h2>

          <a
            href="mailto:hello@rollnmedia.co.nz"
            className="inline-flex items-center gap-4 rounded-full bg-orange-500 px-6 py-4 text-sm font-semibold text-[#05070c] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(249,115,22,0.22)]"
          >
            Start a Conversation
            <span>↗</span>
          </a>

        </div>

      </section>

    </main>
  );
}
