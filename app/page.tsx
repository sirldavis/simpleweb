const styles = `
  .ledger-page{
    --ivory:#EDE6D6;
    --ivory-deep:#E4DBC8;
    --ink:#1C1A17;
    --ink-soft:#4a453d;
    --brass:#A8823C;
    --brass-light:#C9A25E;
    --bull:#2F4538;
    --bear:#7A2E2E;
    --rule: 1px solid rgba(28,26,23,0.16);

    background:var(--ivory);
    color:var(--ink);
    font-family: var(--font-plex-sans), sans-serif;
    font-variant-numeric: tabular-nums;
  }
  .ledger-page *{box-sizing:border-box;}
  .ledger-page .display{ font-family: var(--font-fraunces), serif; }
  .ledger-page .wrap{ max-width:1180px; margin:0 auto; padding:0 32px; }

  /* ---------- Masthead ---------- */
  .ledger-page header.masthead{
    border-bottom: 2px solid var(--ink);
    padding-top:28px;
  }
  .ledger-page .masthead-top{
    display:flex; justify-content:space-between; align-items:baseline;
    padding-bottom:18px;
  }
  .ledger-page .masthead-top .edition{
    font-size:11px; letter-spacing:0.14em; text-transform:uppercase; color:var(--ink-soft);
  }
  .ledger-page .masthead-title{
    text-align:center; padding:6px 0 20px;
  }
  .ledger-page .masthead-title h1{
    font-family: var(--font-fraunces), serif;
    font-weight:600;
    font-size:44px;
    letter-spacing:0.01em;
    margin:0;
  }
  .ledger-page .masthead-title .sub{
    font-size:12px; letter-spacing:0.22em; text-transform:uppercase; color:var(--brass);
    margin-top:6px;
  }
  .ledger-page .ticker-strip{
    border-top:var(--rule);
    display:flex; gap:36px; padding:9px 0;
    font-size:12px; letter-spacing:0.02em; color:var(--ink-soft);
    overflow:hidden; white-space:nowrap;
  }
  .ledger-page .ticker-strip b{ color:var(--ink); }
  .ledger-page .up{ color:var(--bull); } .ledger-page .down{ color:var(--bear); }

  /* ---------- Hero spread ---------- */
  .ledger-page .hero{ padding:46px 0 30px; text-align:center; }
  .ledger-page .hero-eyebrow{ font-size:12px; letter-spacing:0.18em; text-transform:uppercase; color:var(--brass); margin-bottom:6px;}
  .ledger-page .hero h2{ font-family: var(--font-fraunces), serif; font-size:28px; margin:0 0 34px; font-weight:500; }
  .ledger-page .spread{ display:flex; gap:28px; justify-content:center; }
  .ledger-page .spread-card{ width:230px; }
  .ledger-page .card-frame{
    border:1.5px solid var(--ink);
    outline:1px solid var(--brass);
    outline-offset:-6px;
    background:var(--ivory-deep);
    padding:22px 14px 16px;
    height:260px;
    display:flex; flex-direction:column; align-items:center; justify-content:space-between;
  }
  .ledger-page .card-frame svg{ width:64px; height:64px; }
  .ledger-page .card-position{ font-size:11px; letter-spacing:0.14em; text-transform:uppercase; color:var(--ink-soft); margin-top:14px;}
  .ledger-page .card-name{ font-family: var(--font-fraunces), serif; font-size:19px; margin-top:2px; }
  .ledger-page .spread-caption{ font-size:12px; color:var(--ink-soft); margin-top:12px; line-height:1.5; }

  /* ---------- Methodology strip ---------- */
  .ledger-page .method{
    margin-top:44px;
    border-top:var(--rule); border-bottom:var(--rule);
    padding:16px 0;
    display:flex; gap:44px; justify-content:center; flex-wrap:wrap;
    font-size:12px; color:var(--ink-soft);
  }
  .ledger-page .method span b{ color:var(--ink); font-weight:600; }

  /* ---------- Deck ---------- */
  .ledger-page .deck{ padding:48px 0 20px; }
  .ledger-page .deck > .section-title{ text-align:center; margin-bottom:38px; }
  .ledger-page .section-title h2{ font-family: var(--font-fraunces), serif; font-size:26px; margin:0 0 6px; }
  .ledger-page .section-title p{ font-size:13px; color:var(--ink-soft); margin:0; }

  .ledger-page .suit-row{ margin-bottom:44px; }
  .ledger-page .suit-label{
    display:flex; align-items:center; gap:12px;
    font-size:12px; letter-spacing:0.16em; text-transform:uppercase; color:var(--brass);
    margin-bottom:16px;
  }
  .ledger-page .suit-label::after{ content:""; flex:1; height:1px; background:rgba(168,130,60,0.4); }
  .ledger-page .suit-label svg{ width:16px; height:16px; }

  .ledger-page .stock-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }

  .ledger-page .stock-card{
    border:1px solid rgba(28,26,23,0.28);
    background:var(--ivory-deep);
    transition:transform .15s ease, box-shadow .15s ease;
  }
  .ledger-page .stock-card:hover{ transform:translateY(-3px); box-shadow:0 10px 18px rgba(28,26,23,0.12); }
  .ledger-page .stock-illo{
    height:110px; display:flex; align-items:center; justify-content:center;
    border-bottom:1px solid rgba(28,26,23,0.28);
  }
  .ledger-page .stock-illo svg{ width:52px; height:52px; }
  .ledger-page .reversed .stock-illo svg{ transform:rotate(180deg); }
  .ledger-page .stock-body{ padding:14px 16px 16px; }
  .ledger-page .stock-ticker{ font-size:11px; letter-spacing:0.1em; color:var(--brass); font-weight:600; }
  .ledger-page .stock-name{ font-family: var(--font-fraunces), serif; font-size:17px; margin:2px 0 10px; }
  .ledger-page .orient-row{ display:flex; align-items:center; gap:6px; font-size:11px; margin-bottom:10px; }
  .ledger-page .orient-row.up{ color:var(--bull); } .ledger-page .orient-row.down{ color:var(--bear); }
  .ledger-page .data-row{ display:flex; justify-content:space-between; align-items:baseline; border-top:var(--rule); padding-top:10px; }
  .ledger-page .price{ font-size:15px; font-weight:600; }
  .ledger-page .change{ font-size:13px; font-weight:600; }
  .ledger-page .note{ font-size:12px; font-style:italic; color:var(--ink-soft); margin-top:8px; line-height:1.4; }

  /* ---------- In-depth reading ---------- */
  .ledger-page .indepth{ padding:20px 0 54px; border-top:var(--rule); margin-top:10px; }
  .ledger-page .indepth .section-title{ text-align:left; margin-bottom:26px; }
  .ledger-page .feature{ display:grid; grid-template-columns:260px 1fr; gap:36px; align-items:start; }
  .ledger-page .feature .card-frame{ height:340px; }
  .ledger-page .feature-copy h3{ font-family: var(--font-fraunces), serif; font-size:24px; margin:0 0 4px; }
  .ledger-page .feature-copy .ticker-line{ font-size:12px; color:var(--brass); letter-spacing:0.08em; margin-bottom:16px; }
  .ledger-page .feature-copy p{ font-size:14px; line-height:1.7; color:var(--ink-soft); margin:0 0 20px; max-width:60ch; }
  .ledger-page .fund-table{ width:100%; border-collapse:collapse; font-size:13px; max-width:420px; }
  .ledger-page .fund-table td{ padding:7px 0; border-bottom:var(--rule); }
  .ledger-page .fund-table td:last-child{ text-align:right; font-weight:600; }

  /* ---------- Footer ---------- */
  .ledger-page footer{ border-top:2px solid var(--ink); padding:26px 0 40px; }
  .ledger-page .colophon{ display:flex; justify-content:space-between; flex-wrap:wrap; gap:16px; font-size:11.5px; color:var(--ink-soft); }
  .ledger-page .colophon .legend-note{ max-width:560px; line-height:1.6; }

  @media (max-width:920px){
    .ledger-page .spread{ flex-direction:column; align-items:center; }
    .ledger-page .stock-grid{ grid-template-columns:repeat(2,1fr); }
    .ledger-page .feature{ grid-template-columns:1fr; }
  }
  @media (max-width:600px){
    .ledger-page .stock-grid{ grid-template-columns:1fr; }
    .ledger-page .masthead-title h1{ font-size:32px; }
  }
`;

export default function Home() {
  return (
    <div className="ledger-page">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div className="wrap">
        <header className="masthead">
          <div className="masthead-top">
            <span className="edition">Vol. XII — No. 47</span>
            <span className="edition">Week of July 20, 1926</span>
          </div>
          <div className="masthead-title">
            <h1>THE LEDGER</h1>
            <div className="sub">A Weekly Reading of the Market</div>
          </div>
          <div className="ticker-strip">
            <span>COMPOSITE&nbsp; <b>4,812.30</b> <span className="up">▲ 0.62%</span></span>
            <span>VOLATILITY&nbsp; <b>14.2</b> <span className="down">▼ 1.1%</span></span>
            <span>10Y YIELD&nbsp; <b>4.18%</b> <span className="up">▲ 0.03</span></span>
            <span>BREADTH&nbsp; <b>61% adv.</b></span>
          </div>
        </header>

        <section className="hero">
          <div className="hero-eyebrow">The Spread of the Week</div>
          <h2>A Three-Card Reading of the Composite Index</h2>
          <div className="spread">
            <div className="spread-card">
              <div className="card-frame">
                <svg viewBox="0 0 60 60"><rect x="26" y="10" width="8" height="40" fill="none" stroke="var(--brass)" strokeWidth="2"/><rect x="16" y="46" width="28" height="6" fill="none" stroke="var(--brass)" strokeWidth="2"/></svg>
                <div>
                  <div className="card-position">Foundation</div>
                  <div className="card-name">The Pillar</div>
                </div>
              </div>
              <div className="spread-caption">12-month base: index up 9.4% off support, breadth broadly participating.</div>
            </div>
            <div className="spread-card">
              <div className="card-frame">
                <svg viewBox="0 0 60 60"><circle cx="30" cy="30" r="18" fill="none" stroke="var(--brass)" strokeWidth="2"/><circle cx="30" cy="30" r="4" fill="var(--brass)"/></svg>
                <div>
                  <div className="card-position">Present</div>
                  <div className="card-name">The Wheel</div>
                </div>
              </div>
              <div className="spread-caption">Current session: rotation underway from growth into value-oriented names.</div>
            </div>
            <div className="spread-card">
              <div className="card-frame">
                <svg viewBox="0 0 60 60"><path d="M30 6 L35 24 L54 24 L38 35 L44 54 L30 42 L16 54 L22 35 L6 24 L25 24 Z" fill="none" stroke="var(--brass)" strokeWidth="2"/></svg>
                <div>
                  <div className="card-position">Outlook</div>
                  <div className="card-name">The Star</div>
                </div>
              </div>
              <div className="spread-caption">Six-week view: momentum indicators favor continuation, contingent on yields.</div>
            </div>
          </div>
        </section>

        <div className="method">
          <span><b>Suit</b> — sector</span>
          <span><b>Orientation</b> — momentum (upright: bullish, reversed: bearish)</span>
          <span><b>Numeral</b> — relative valuation tier</span>
          <span><b>Court cards</b> — index &amp; sector leaders</span>
        </div>

        <section className="deck">
          <div className="section-title">
            <h2>The Deck</h2>
            <p>This week&apos;s full draw, grouped by suit</p>
          </div>

          {/* SWORDS — Technology */}
          <div className="suit-row">
            <div className="suit-label">
              <svg viewBox="0 0 24 24"><line x1="3" y1="21" x2="21" y2="3" stroke="var(--brass)" strokeWidth="2"/><line x1="3" y1="3" x2="21" y2="21" stroke="var(--brass)" strokeWidth="2"/></svg>
              Swords — Technology
            </div>
            <div className="stock-grid">
              <div className="stock-card">
                <div className="stock-illo"><svg viewBox="0 0 24 24"><line x1="4" y1="20" x2="20" y2="4" stroke="var(--ink)" strokeWidth="2"/><line x1="4" y1="4" x2="9" y2="9" stroke="var(--ink)" strokeWidth="2"/></svg></div>
                <div className="stock-body">
                  <div className="stock-ticker">NOVA</div>
                  <div className="stock-name">Nova Systems</div>
                  <div className="orient-row up">▲ Upright — Momentum</div>
                  <div className="data-row"><span className="price">$142.18</span><span className="change up">+2.4%</span></div>
                  <div className="note">Backlog growth outpacing guidance for the third straight quarter.</div>
                </div>
              </div>
              <div className="stock-card reversed">
                <div className="stock-illo"><svg viewBox="0 0 24 24"><line x1="4" y1="20" x2="20" y2="4" stroke="var(--ink)" strokeWidth="2"/><line x1="4" y1="4" x2="9" y2="9" stroke="var(--ink)" strokeWidth="2"/></svg></div>
                <div className="stock-body">
                  <div className="stock-ticker">QUBE</div>
                  <div className="stock-name">Qubit Compute</div>
                  <div className="orient-row down">▼ Reversed — Correction</div>
                  <div className="data-row"><span className="price">$61.02</span><span className="change down">−3.1%</span></div>
                  <div className="note">Margin compression as capacity spend outruns near-term revenue.</div>
                </div>
              </div>
              <div className="stock-card">
                <div className="stock-illo"><svg viewBox="0 0 24 24"><line x1="4" y1="20" x2="20" y2="4" stroke="var(--ink)" strokeWidth="2"/><line x1="4" y1="4" x2="9" y2="9" stroke="var(--ink)" strokeWidth="2"/></svg></div>
                <div className="stock-body">
                  <div className="stock-ticker">LUX</div>
                  <div className="stock-name">Lumen Cybernetics</div>
                  <div className="orient-row up">▲ Upright — Momentum</div>
                  <div className="data-row"><span className="price">$88.47</span><span className="change up">+0.9%</span></div>
                  <div className="note">Steady enterprise renewals; volatility well below sector average.</div>
                </div>
              </div>
            </div>
          </div>

          {/* PENTACLES — Financials */}
          <div className="suit-row">
            <div className="suit-label">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="var(--brass)" strokeWidth="2"/></svg>
              Pentacles — Financials
            </div>
            <div className="stock-grid">
              <div className="stock-card">
                <div className="stock-illo"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="var(--ink)" strokeWidth="2"/></svg></div>
                <div className="stock-body">
                  <div className="stock-ticker">MERD</div>
                  <div className="stock-name">Meridian Capital</div>
                  <div className="orient-row up">▲ Upright — Momentum</div>
                  <div className="data-row"><span className="price">$204.55</span><span className="change up">+1.2%</span></div>
                  <div className="note">Net interest margin holding despite rate volatility.</div>
                </div>
              </div>
              <div className="stock-card">
                <div className="stock-illo"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="var(--ink)" strokeWidth="2"/></svg></div>
                <div className="stock-body">
                  <div className="stock-ticker">FORG</div>
                  <div className="stock-name">Forge Industrial</div>
                  <div className="orient-row up">▲ Upright — Momentum</div>
                  <div className="data-row"><span className="price">$76.90</span><span className="change up">+0.4%</span></div>
                  <div className="note">Order book stabilizing after two quarters of destocking.</div>
                </div>
              </div>
              <div className="stock-card reversed">
                <div className="stock-illo"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="var(--ink)" strokeWidth="2"/></svg></div>
                <div className="stock-body">
                  <div className="stock-ticker">ATLA</div>
                  <div className="stock-name">Atlas Materials</div>
                  <div className="orient-row down">▼ Reversed — Correction</div>
                  <div className="data-row"><span className="price">$33.10</span><span className="change down">−1.8%</span></div>
                  <div className="note">Input costs squeezing margin ahead of next earnings print.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="indepth">
          <div className="section-title">
            <h2>In-Depth Reading</h2>
            <p>Card of the week, drawn from Wands</p>
          </div>
          <div className="feature">
            <div className="card-frame">
              <svg viewBox="0 0 60 60"><line x1="30" y1="8" x2="30" y2="50" stroke="var(--brass)" strokeWidth="2"/><path d="M22 12 Q30 4 38 12" fill="none" stroke="var(--brass)" strokeWidth="2"/></svg>
              <div>
                <div className="card-position">Wands — Energy</div>
                <div className="card-name">Helios Energy</div>
              </div>
            </div>
            <div className="feature-copy">
              <h3>Helios Energy</h3>
              <div className="ticker-line">HELI — Upright — The rod grounded, current flowing steady</div>
              <p>Drawn upright this week: capacity additions are landing on schedule and contracted demand now covers the next two years of output. The read here isn&apos;t euphoric — it&apos;s a foundation card, the kind that shows up when a story has stopped needing a catalyst to work.</p>
              <table className="fund-table">
                <tbody>
                  <tr><td>Price</td><td>$54.30</td></tr>
                  <tr><td>Change (1w)</td><td className="up" style={{ color: "var(--bull)" }}>+3.6%</td></tr>
                  <tr><td>P/E (fwd)</td><td>14.2x</td></tr>
                  <tr><td>Contracted backlog</td><td>2.1 yrs</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <footer>
          <div className="colophon">
            <span>© The Ledger — For illustration purposes only. Not investment advice.</span>
            <span className="legend-note">Card assignments reflect a proprietary blend of momentum, valuation, and sector positioning; orientation is reassessed weekly and is not a prediction of future performance.</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
