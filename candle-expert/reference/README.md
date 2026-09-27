# Candle Expert website

A responsive, single-page Candle Expert education website built with semantic HTML, CSS and plain JavaScript. It has no build step or package dependencies.

## Run locally

Open `index.html` in a browser, or serve this directory with any static web server. For example, from this folder:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Build and deploy

There is no compile step. Deploy `index.html`, `styles.css`, `script.js`, and any added assets to a static HTTPS host. Update the page metadata, canonical URL and social sharing image when the final domain and brand assets are known. Add a host-appropriate `robots.txt` and sitemap when the domain is ready.

## Integration setup

- **Market data:** The tracker embeds TradingView Forex Cross Rates lazily when scrolled into view, showing EUR, USD, GBP, JPY and INR. TradingView states forex widget data is real-time; stock exchange data may be delayed depending on exchange entitlements. Confirm symbol coverage and current display terms before launch. Never place private provider keys in browser code.
- **YouTube:** The page links to the Candle Expert channel. Add selected video IDs/titles or a supported official embed after those are supplied.
- **Enquiry form:** Client-side validation is present. The form does not send or store submissions. Connect it to a server endpoint or CRM, then add server-side validation, rate limiting/spam protection and a privacy notice before describing it as delivered.
- **WhatsApp, email, trainer/course details, policies and analytics:** Not configured because owner details and consent requirements were not supplied. Update the editable page content after those are confirmed. No analytics identifiers or `.env` file are needed for the current static implementation.

## Editing

Course copy and the channel URL are in `index.html`. Central design colors, typography and layout values are CSS variables at the top of `styles.css`. Interaction and validation behavior is in `script.js`.
