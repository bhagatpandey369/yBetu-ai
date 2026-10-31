import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Research from './components/Research'
import Roadmap from './components/Roadmap'
import Involved from './components/Involved'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { pageTitle } from './content'

// Scroll to the section named by a path (/mission → #mission) and
// update the tab title. "/" or an unknown path goes to the top.
function scrollToPath(path, behavior) {
  const id = path.replace(/^\/+|\/+$/g, '')
  const target = id ? document.getElementById(id) : null
  if (target) target.scrollIntoView({ behavior })
  else window.scrollTo({ top: 0, behavior })
  document.title = pageTitle(target ? `/${id}` : '/')
}

export default function App() {
  // Clicking a "Get involved" card pre-selects that topic in the contact form
  const [interest, setInterest] = useState('')

  useEffect(() => {
    // Turn old shared links like ybetu.com/#roadmap into ybetu.com/roadmap
    const { hash } = window.location
    if (hash) {
      const id = { '#top': '', '#involved': 'get-involved' }[hash] ?? hash.slice(1)
      window.history.replaceState(null, '', `/${id}`)
    }
    scrollToPath(window.location.pathname, 'instant')

    // Internal links (href="/...") scroll in place instead of reloading the page
    function onClick(e) {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const href = e.target.closest('a')?.getAttribute('href')
      if (!href?.startsWith('/')) return
      e.preventDefault()
      if (href !== window.location.pathname) window.history.pushState(null, '', href)
      scrollToPath(href)
    }
    const onPopState = () => scrollToPath(window.location.pathname)

    document.addEventListener('click', onClick)
    window.addEventListener('popstate', onPopState)
    return () => {
      document.removeEventListener('click', onClick)
      window.removeEventListener('popstate', onPopState)
    }
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Mission />
        <Research />
        <Roadmap />
        <Involved onSelect={setInterest} />
        <Team />
        <Contact interest={interest} onInterestChange={setInterest} />
      </main>
      <Footer />
    </>
  )
}
