import { useEffect, useState } from 'react'
import Logo from './Logo'
import { nav } from '../content'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? 'border-line bg-bg/85 backdrop-blur-lg' : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Logo className="h-8 w-8" />
          <span className="text-[1.05rem] font-semibold tracking-[0.09em]">
            YBETU <span className="font-normal text-muted">AI</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-sm text-ink-dim transition-colors hover:text-ink">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/contact"
          className="hidden rounded-md bg-ink px-4 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-85 md:inline-block"
        >
          Join the effort
        </a>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md text-ink md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="h-[calc(100dvh-4rem)] border-t border-line bg-bg-alt px-4 py-6 md:hidden">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-lg text-ink-dim hover:bg-card hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-6 block rounded-md bg-ink px-4 py-3 text-center font-medium text-bg"
          >
            Join the effort
          </a>
        </div>
      )}
    </header>
  )
}
