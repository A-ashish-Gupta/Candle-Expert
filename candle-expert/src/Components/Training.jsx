

const Training = () => {
    return (
        <>
            <section className="training-section" id="training">
                <div className="section-wrap content-section">
                    <div className="section-heading heading-row reveal">
                        <div>
                            <p className="eyebrow">Learn at your pace <span className="eyebrow-rule"></span></p>
                            <h2>Find your <span className="serif-accent">starting point.</span></h2>
                        </div>
                        <p className="heading-aside">Learning paths are being shaped.<br/>Ask us about what’s available.</p>
                    </div>
                    <div className="course-grid">
                        <article className="course-card reveal">
                            <div className="course-number">01 <span>FOUNDATIONS</span></div>
                            <div className="course-icon" aria-hidden="true">⌁</div>
                            <h3>Stock market &amp;<br/>technical analysis</h3>
                            <p>Get familiar with market basics, chart structure and the concepts traders use to study price action.</p>
                            <div className="tag-row"><span>BEGINNER FRIENDLY</span><span>CHARTS</span></div>
                            <div className="course-bottom"><span>Format &amp; duration <b>To be confirmed</b></span><a href="#contact"
                                className="round-link" aria-label="Enquire about stock market and technical analysis"
                                data-course="Stock Market & Technical Analysis">↗</a></div>
                        </article>
                        <article className="course-card course-card-featured reveal">
                            <div className="course-number">02 <span>GLOBAL MARKETS</span></div>
                            <div className="course-icon" aria-hidden="true">↗</div>
                            <h3>Forex trading<br/>education</h3>
                            <p>Understand currency pairs, market sessions and the forces that can move exchange rates.</p>
                            <div className="tag-row"><span>BEGINNER FRIENDLY</span><span>FOREX</span></div>
                            <div className="course-bottom"><span>Format &amp; duration <b>To be confirmed</b></span><a href="#contact"
                                className="round-link" aria-label="Enquire about forex trading education"
                                data-course="Forex Trading Education">↗</a></div>
                        </article>
                        <article className="course-card reveal">
                            <div className="course-number">03 <span>DERIVATIVES</span></div>
                            <div className="course-icon" aria-hidden="true">⌁</div>
                            <h3>Futures &amp;<br/>derivatives</h3>
                            <p>Explore how derivative contracts work and why risk awareness matters when studying them.</p>
                            <div className="tag-row"><span>INTERMEDIATE</span><span>RISK AWARENESS</span></div>
                            <div className="course-bottom"><span>Format &amp; duration <b>To be confirmed</b></span><a href="#contact"
                                className="round-link" aria-label="Enquire about futures and derivatives"
                                data-course="Futures & Derivatives">↗</a></div>
                        </article>
                    </div>
                    <p className="section-footnote"><span>✳</span> Educational content only. No course promises trading results or
                        investment returns.</p>
                </div>
            </section>
        </>
    )
}

export default Training
