(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    menuButton.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
    nav.classList.toggle('is-open', !open);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    nav.classList.remove('is-open');
  }));

  const widget = document.querySelector('#forex-widget');
  let widgetLoaded = false;
  const loadForexWidget = () => {
    if (widgetLoaded) return;
    widgetLoaded = true;
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js';
    script.async = true;
    script.type = 'text/javascript';
    script.textContent = JSON.stringify({
      width: '100%', height: 420, currencies: ['EUR', 'USD', 'GBP', 'JPY', 'INR'],
      isTransparent: true, colorTheme: 'dark', locale: 'en'
    });
    script.onerror = () => {
      const loading = document.querySelector('#widget-loading');
      if (loading) loading.innerHTML = '<p class="empty-title">Market data widget unavailable</p><p class="empty-copy">TradingView could not be reached. Please try again later or open TradingView directly.</p><a class="text-link" href="https://www.tradingview.com/markets/currencies/" target="_blank" rel="noopener noreferrer">Open TradingView markets ↗</a>';
    };
    widget.querySelector('.tradingview-widget-container__widget').appendChild(script);
  };
  if ('IntersectionObserver' in window) {
    const widgetObserver = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        loadForexWidget();
        widgetObserver.disconnect();
      }
    }, { rootMargin: '250px' });
    widgetObserver.observe(widget);
  } else loadForexWidget();

  document.querySelectorAll('[data-course]').forEach(link => link.addEventListener('click', () => {
    const select = document.querySelector('select[name="course"]');
    const option = [...select.options].find(item => item.textContent.trim() === link.dataset.course);
    if (option) select.value = option.value;
  }));

  const form = document.querySelector('#enquiry-form');
  form.addEventListener('submit', event => {
    event.preventDefault();
    const status = form.querySelector('.form-status');
    form.querySelectorAll('.field-error').forEach(error => { error.textContent = ''; });
    form.querySelector('.consent-error').textContent = '';
    let valid = true;
    const name = form.elements.name;
    const email = form.elements.email;
    const mobile = form.elements.mobile;
    const setError = (input, message) => {
      input.closest('label').querySelector('.field-error').textContent = message;
      valid = false;
    };
    if (name.value.trim().length < 2) setError(name, 'Please enter your name (at least 2 characters).');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) setError(email, 'Enter a valid email address.');
    if (mobile.value.trim().replace(/[\s()+.-]/g, '').length < 7) setError(mobile, 'Enter a valid mobile number.');
    if (!form.elements.consent.checked) {
      form.querySelector('.consent-error').textContent = 'Please agree before continuing.';
      valid = false;
    }
    status.classList.remove('is-success', 'is-error');
    if (!valid) {
      status.textContent = 'Please check the highlighted fields.';
      status.classList.add('is-error');
      form.querySelector('[aria-invalid="true"]')?.focus();
      [name, email, mobile].forEach(input => input.setAttribute('aria-invalid', String(input.closest('label').querySelector('.field-error').textContent !== '')));
      return;
    }
    [name, email, mobile].forEach(input => input.removeAttribute('aria-invalid'));
    status.textContent = 'Your details passed validation, but enquiry delivery is not configured. Nothing was sent or stored. Please contact Candle Expert after contact details are added.';
    status.classList.add('is-success');
  });

  document.querySelector('#year').textContent = new Date().getFullYear();
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else revealItems.forEach(item => item.classList.add('is-visible'));
})();
