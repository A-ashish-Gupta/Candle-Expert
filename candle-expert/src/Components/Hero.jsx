const Hero = () => {
  return (
    <>
      {/* Hero Section - CSS imported from App.css */}
      <section className="hero section-wrap" id="home">
        {/* Left Column - Copy and Actions */}
        <div className="hero-copy reveal">
          <p className="eyebrow">
            <span className="eyebrow-dot"></span> A clearer view of the markets
          </p>
          <h1>
            Learn the language
            <br />
            of <span className="headline-accent">markets.</span>
          </h1>
          <p className="hero-lede">
            Build a better understanding of charts, price action and market
            structure with practical, straightforward education.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#training">
              Explore training <span aria-hidden="true">↗</span>
            </a>
            <a
              className="button button-quiet"
              href="https://www.youtube.com/@Candlexpert"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="play-icon" aria-hidden="true">
                ▶
              </span>{" "}
              Watch on YouTube
            </a>
          </div>
          <p className="hero-note">
            <span aria-hidden="true">⌁</span> Education first. Markets always
            carry risk.
          </p>
        </div>

        {/* Right Column - Chart Illustration */}
        <div
          className="hero-art reveal"
          aria-label="Illustration of a market chart"
        >
          <div className="chart-frame">
            <div className="chart-top">
              <span className="chart-label">
                PRICE ACTION <b> / </b> LEARNING VIEW
              </span>
              <span className="chart-period">01 — 12</span>
            </div>
            <svg
              className="chart-svg"
              viewBox="0 0 620 330"
              role="img"
              aria-label="Illustrative candlestick chart with no live data"
            >
              <defs>
                <linearGradient id="wash" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#a6e5c1" stopOpacity=".12" />
                  <stop offset="1" stopColor="#a6e5c1" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path className="gridline" d="M42 54H605" />
              <path className="gridline" d="M42 112H605" />
              <path className="gridline" d="M42 170H605" />
              <path className="gridline" d="M42 228H605" />
              <path className="gridline" d="M42 286H605" />
              <path
                className="chart-fill"
                d="M42 246L82 222L122 238L162 185L202 201L242 154L282 173L322 127L362 148L402 102L442 124L482 77L522 92L562 54L605 68V286H42Z"
              />
              <path
                className="chart-line"
                d="M42 246L82 222L122 238L162 185L202 201L242 154L282 173L322 127L362 148L402 102L442 124L482 77L522 92L562 54L605 68"
              />
              <g className="candles">
                <path d="M88 204v44m-8-32h16v20H80z" />
                <path d="M160 162v52m-8-40h16v24h-16z" />
                <path d="M234 130v53m-8-39h16v20h-16z" />
                <path d="M308 103v47m-8-37h16v20h-16z" />
                <path d="M382 91v55m-8-40h16v26h-16z" />
                <path d="M456 65v48m-8-36h16v18h-16z" />
                <path d="M530 39v60m-8-42h16v28h-16z" />
              </g>
              <circle cx="562" cy="54" r="4" className="chart-point" />
              <path className="chart-guide" d="M562 54v232" />
              <text x="48" y="316">
                ILLUSTRATIVE CHART · NOT LIVE MARKET DATA
              </text>
            </svg>
            <div className="chart-legend">
              <span>
                <i></i> Price movement
              </span>
              <span>Conceptual illustration</span>
            </div>
          </div>
          <span className="art-stamp">
            READ
            <br />
            THE
            <br />
            CHART<span>↗</span>
          </span>
          <div className="art-orbit"></div>
        </div>

        {/* Hero Bottom */}
        <div className="hero-bottom">
          <span>
            STOCKS <b>·</b> FOREX <b>·</b> FUTURES
          </span>
          <span>
            Curiosity is a good place to start <span aria-hidden="true">↓</span>
          </span>
        </div>
      </section>
    </>
  );
};

export default Hero;
