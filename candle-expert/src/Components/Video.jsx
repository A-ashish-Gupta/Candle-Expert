

const Video = () => {
    return (
        <div>
            <section className="video-section" id="videos">
                <div className="section-wrap content-section">
                    <div className="section-heading heading-row reveal">
                        <div>
                            <p className="eyebrow">Learn by watching <span className="eyebrow-rule"></span></p>
                            <h2>Ideas, in <span className="serif-accent">motion.</span></h2>
                        </div><a className="button button-outline" href="https://www.youtube.com/@Candlexpert" target="_blank"
                            rel="noopener noreferrer">Visit the channel <span>↗</span></a>
                    </div>
                    <div className="video-placeholder reveal">
                        <div className="video-visual">
                            <div className="video-lines" aria-hidden="true">
                                <span></span><span></span><span></span><span></span><span></span><span></span></div><a className="video-play"
                                    href="https://www.youtube.com/@Candlexpert" target="_blank" rel="noopener noreferrer"
                                    aria-label="Visit Candle Expert on YouTube">▶</a><span className="video-overline">CANDLE EXPERT /
                                        YOUTUBE</span><span className="video-count">CHANNEL</span>
                        </div>
                        <div className="video-copy"><span className="video-kicker">THE LATEST FROM CANDLE EXPERT</span>
                            <h3>Find your next<br />learning moment </h3>
                            <p>Explore market education and chart insights on the Candle Expert YouTube channel.</p><a
                                href="https://www.youtube.com/@Candlexpert" className="text-link" target="_blank"
                                rel="noopener noreferrer">Watch on YouTube <span>↗</span></a>
                        </div>
                    </div>
                    <p className="section-footnote video-note"><span>✳</span> Selected video embeds can be added here when titles and
                        links are supplied.</p>
                </div>
            </section>
        </div>
    )
}

export default Video
