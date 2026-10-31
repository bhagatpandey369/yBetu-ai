# Ybetu AI

Website for [ybetu.com](https://ybetu.com): Ybetu AI is a Kathmandu-based research lab building an open foundation model for Nepal.

Built with React, Vite and Tailwind CSS. Deployed to GitHub Pages by GitHub Actions on every push to `main`.

## Run locally

```bash
npm install
npm run dev       # start dev server at http://localhost:5173
npm run build     # production build into dist/
npm run preview   # serve the production build
```

## Editing content

All text (hero, research pillars, roadmap, team, contact details) lives in [`src/content.js`](src/content.js). Edit that file, then commit and push. The site redeploys automatically.

Page sections are in [`src/components/`](src/components/).

## Deployment

- Workflow: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
- Custom domain: [`public/CNAME`](public/CNAME)
- In the GitHub repo, **Settings → Pages → Source** must be set to **GitHub Actions**.
