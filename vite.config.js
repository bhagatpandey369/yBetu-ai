import { readFileSync, writeFileSync } from 'node:fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { pages, pageTitle, siteUrl } from './src/content.js'

// GitHub Pages has no single-page-app fallback, so write a copy of
// index.html for every section path (mission.html is served at /mission),
// each with its own title and canonical URL. 404.html catches the rest.
function sectionPages() {
  return {
    name: 'section-pages',
    apply: 'build',
    closeBundle() {
      const html = readFileSync('dist/index.html', 'utf8')
      for (const { href } of pages) {
        const title = pageTitle(href)
        const page = html
          .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
          .replace(/(property="og:title" content=")[^"]*/, `$1${title}`)
          .replace(/(property="og:url" content=")[^"]*/, `$1${siteUrl}${href}`)
          .replace(/(rel="canonical" href=")[^"]*/, `$1${siteUrl}${href}`)
        writeFileSync(`dist${href}.html`, page)
      }
      writeFileSync('dist/404.html', html)
    },
  }
}

// Relative base so the same build works at ybetu.com/ and at
// bhagatpandey369.github.io/yBetu-ai/.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss(), sectionPages()],
})
