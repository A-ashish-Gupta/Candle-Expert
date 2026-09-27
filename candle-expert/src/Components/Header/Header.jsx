import React from 'react'

const Header = () => {
    return (
        <header class="site-header">
            <a class="brand" href="#home" aria-label="Candle Expert home"><span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span><span>CANDLE<span class="brand-light">EXPERT</span><small>MARKET EDUCATION</small></span></a>
            <button class="menu-toggle" aria-label="Open navigation" aria-expanded="false" aria-controls="primary-nav"><span></span><span></span></button>
            <nav id="primary-nav" class="primary-nav" aria-label="Main navigation">
                <a href="#about">About</a>
                <a href="#training">Training</a>
                <a href="#markets">Markets</a>
                <a href="#videos">Videos</a>
                <a href="#approach">Our approach</a>
                <a class="nav-cta" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a>
            </nav>
        </header>
    )
}

export default Header