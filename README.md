# nvrmind — streetwear storefront template

A monochrome, single-page storefront template built on **Bootstrap 5.3**. No build step, no framework: plain HTML, one CSS file, one small JS file.

Sections: announcement ticker, sticky navbar, hero with trust strip, manifesto, category banners, CTA block, product grid, reviews, photo gallery, FAQ accordion, newsletter, footer and a mobile sticky CTA.

## Structure

```
index.html
assets/
  css/style.css   design tokens, Bootstrap overrides, components
  js/main.js      Skopje clock, footer year, newsletter form
  img/            placeholder product silhouettes + favicon
```

Bootstrap CSS/JS are loaded from the jsDelivr CDN; fonts (Bricolage Grotesque, IBM Plex Mono) from Google Fonts.

## Run locally

Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
```

## Customize

- **Colors / fonts**: edit the `--nvr-*` tokens at the top of `assets/css/style.css`. Dark sections use the `.surface-ink` class, which flips the muted, rule and focus colors.
- **Products**: duplicate a `.product-card` in `index.html`. Set stars with `style="--rating: 4.5"`.
- **Photos**: replace the SVG in `src` with a real image (the `.media-fill` class fills the frame). In the gallery, add `<img class="media-fill" alt="…">` inside any `.gallery__frame`.
- **Newsletter**: connect your provider in `initNewsletter()` in `assets/js/main.js`.

## Deploy on GitHub Pages

Repo → Settings → Pages → Deploy from branch → `main` / root. The site is then live at `https://<username>.github.io/nvrmind-template/`.

## Credits

[Bootstrap](https://getbootstrap.com) (MIT). Fonts via Google Fonts (OFL).
