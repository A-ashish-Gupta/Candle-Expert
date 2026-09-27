const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="section-wrap">
                <div className="footer-top">
                    <a className="brand footer-brand" href="#home">
                        <span className="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span>
                        <span>CANDLE<span className="brand-light">EXPERT</span><small>MARKET EDUCATION</small></span>
                    </a><p>Learn thoughtfully.<br />Understand the markets.</p><a className="footer-youtube" href="https://www.youtube.com/@Candlexpert" target="_blank" rel="noopener noreferrer">YouTube <span>↗</span></a>
                </div>
                <div className="risk-disclaimer">
                    <span>EDUCATIONAL &amp; RISK DISCLAIMER</span>
                    <p>Candle Expert provides educational content related to financial markets, technical analysis, and trading concepts. All content is for informational and educational purposes only and should not be considered investment advice or a recommendation to buy or sell any financial instrument. Trading in stocks, futures, forex, and other financial instruments involves risk, including the potential loss of capital. Past performance does not guarantee future results.</p>
                </div>
                <div className="footer-bottom">
                    <span>© <span id="year"></span> Candle Expert</span>
                    <span>Learn with care. Markets involve risk.</span>
                    <span>Privacy &amp; terms <b>To be supplied</b></span>
                </div>
            </div>
        </footer>

    );
}
export default Footer;