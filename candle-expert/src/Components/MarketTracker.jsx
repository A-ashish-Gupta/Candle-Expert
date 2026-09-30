

const MarketTracker = () => {
    return (
        <>
            <section className="market-section" id="markets">
                <div className="section-wrap content-section">
                    <div className="market-heading reveal">
                        <div>
                            <p className="eyebrow">A window on the world <span className="eyebrow-rule"></span></p>
                            <h2>Market <span className="serif-accent">tracker.</span></h2>
                            <p className="market-lede">A useful view of the markets starts with clear data and clear context.</p>
                        </div><span className="market-badge"><i></i> TRADINGVIEW WIDGET</span>
                    </div>
                    <div className="market-panel reveal">
                        <div className="market-panel-top">
                            <div><span className="panel-overline">FOREX CROSS RATES</span>
                                <h3>Keep an eye on the bigger picture.</h3>
                            </div><span className="panel-state"><i></i> External data</span>
                        </div>
                        <div className="market-tabs" aria-label="Widget category"><span className="market-tab active">Forex cross
                            rates</span><span className="market-tab">EUR · GBP · JPY · INR</span></div>
                        <div className="tradingview-widget-container" id="forex-widget" role="region"
                            aria-label="TradingView forex cross rates widget">
                            <div className="tradingview-widget-container__widget">
                                <div className="market-empty" id="widget-loading">
                                    <div className="empty-chart" aria-hidden="true"><span>···</span><svg viewBox="0 0 80 32">
                                        <path d="M1 27 15 20 26 24 37 11 49 17 60 6 79 10" />
                                    </svg></div>
                                    <p className="empty-title">Loading forex cross rates</p>
                                    <p className="empty-copy">Quotes and availability are provided by TradingView. They may vary by symbol and
                                        data entitlement.</p>
                                </div>
                            </div>
                            <div className="tradingview-attribution">Market data by <a href="https://www.tradingview.com/" target="_blank"
                                rel="noopener noreferrer">TradingView</a></div>
                        </div>
                        <div className="market-panel-bottom"><span>Forex quotes may be real-time; exchange-listed instruments can be
                            delayed.</span><a href="https://www.tradingview.com/widget-docs/faq/data/" target="_blank"
                                rel="noopener noreferrer">About data availability <span>↗</span></a></div>
                    </div>
                    <p className="market-disclaimer">Market information is for education and general information only, not a
                        recommendation to buy or sell any financial instrument. TradingView notes forex widget data is real-time;
                        other exchange data may be delayed, and some symbols may not be available.</p>
                </div>
            </section>
        </>
    )
}

export default MarketTracker
