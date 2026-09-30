

const About = () => {
    return (
        <>
            <section className="section-wrap content-section about-section" id="about">
                <div className="section-heading reveal">
                    <p className="eyebrow">A little about us <span className="eyebrow-rule"></span></p>
                    <h2>Understanding comes<br /><span className="serif-accent">before action.</span></h2>
                </div>
                <div className="about-grid">
                    <div className="about-copy reveal">
                        <p className="large-copy">Candle Expert is a financial markets education brand for people who want to understand
                            what they’re looking at—not just follow a signal.</p>
                        <p>Explore the ideas behind technical analysis, stock markets, futures and forex through approachable learning
                            resources. Take your time, ask better questions, and build your own foundation.</p><a href="#approach"
                                className="text-link">How we approach learning <span>↗</span></a>
                    </div>
                    <div className="about-note reveal"><span className="note-mark">“</span>
                        <p>Good learning starts with knowing what you don’t know.</p><span className="note-caption">A PRINCIPLE, NOT A
                            PROMISE</span>
                        <div className="note-grid" aria-hidden="true"></div>
                    </div>
                </div>
                <div className="focus-row"><span className="focus-label">AREAS TO EXPLORE</span><span>Technical analysis</span><span>Stock
                    markets</span><span>Forex</span><span>Futures &amp; derivatives</span></div>
            </section>
        </>
    )
}

export default About
