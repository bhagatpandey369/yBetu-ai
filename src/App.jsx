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

export default function App() {
  // Clicking a "Get involved" card pre-selects that topic in the contact form
  const [interest, setInterest] = useState('')

  // The browser tries to jump to a #hash before React has rendered the
  // sections, so shared links like ybetu.com/#roadmap need a manual scroll.
  useEffect(() => {
    if (window.location.hash) {
      document.querySelector(window.location.hash)?.scrollIntoView()
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
