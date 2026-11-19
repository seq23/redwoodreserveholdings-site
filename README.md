# redwoodreserveholdings-site

The company page for Redwood Reserve Holdings LLC at https://redwoodreserveholdings.com — one static page (`public/index.html`), plus `functions/_middleware.js`, which sends www to the apex.

Hosted on Cloudflare Pages, project `redwoodreserveholdings`. Deploy (from boss-os, token from the vault):

```sh
cd ~/GitHub/boss-os && npm run -s vault:run -- npx wrangler@4 pages deploy ~/GitHub/redwoodreserveholdings-site/public \
  --project-name redwoodreserveholdings --branch main --cwd ~/GitHub/redwoodreserveholdings-site
```
