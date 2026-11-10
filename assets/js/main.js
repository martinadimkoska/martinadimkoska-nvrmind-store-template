/**
 * nvrmind template — page behaviour.
 *
 * Bootstrap's bundle already drives the navbar collapse and the FAQ accordion.
 * This file only adds what Bootstrap does not: scroll reveal, the Skopje clock,
 * the footer year and the newsletter form.
 */
(() => {
  'use strict';

  /**
   * Fades elements in as they scroll into view.
   *   [data-reveal]          reveals itself (optional style="--reveal-delay: .15s")
   *   [data-reveal-stagger]  reveals each direct child, one after another
   */
  const initReveal = () => {
    document.querySelectorAll('[data-reveal-stagger]').forEach((group) => {
      [...group.children].forEach((child, index) => {
        child.setAttribute('data-reveal', '');
        child.style.setProperty('--reveal-delay', `${index * 0.09}s`);
      });
    });

    const items = document.querySelectorAll('[data-reveal]');

    if (!('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -5% 0px' }
    );

    items.forEach((item) => observer.observe(item));
  };

  const initClock = () => {
    const clock = document.querySelector('[data-clock]');
    if (!clock) return;

    const formatter = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Skopje',
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23',
    });

    const render = () => {
      const now = new Date();
      const part = Object.fromEntries(
        formatter.formatToParts(now).map(({ type, value }) => [type, value])
      );
      clock.textContent = `${part.day}.${part.month} — ${part.hour}:${part.minute}`;
      clock.dateTime = now.toISOString();
    };

    render();
    setInterval(render, 30_000);
  };

  const initYear = () => {
    const year = document.querySelector('[data-year]');
    if (year) year.textContent = new Date().getFullYear();
  };

  const initNewsletter = () => {
    const form = document.querySelector('[data-newsletter]');
    if (!form) return;

    const status = form.querySelector('[data-newsletter-status]');

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      // Connect your email provider here, e.g. fetch(url, { method: 'POST', body: new FormData(form) }).
      status.textContent = "You're on the list. See you at drop 003.";
      form.reset();
    });
  };

  initReveal();
  initClock();
  initYear();
  initNewsletter();
})();
