import Logo from './Logo'
import { contact, nav } from '../content'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg-alt">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 sm:px-6 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <a href="#top" className="mb-4 flex items-center gap-2.5">
            <Logo className="h-8 w-8" />
            <span className="font-semibold tracking-[0.09em]">
              YBETU <span className="font-normal text-muted">AI</span>
            </span>
          </a>
          <p className="text-sm text-ink-dim">
            Building Nepal’s open foundation model: datasets, tools and AI for every Nepali speaker.
          </p>
          <p className="mt-3 font-deva text-sm text-muted" lang="ne">
            नेपालको लागि, नेपालमै बनेको AI
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 text-sm">
          <ul className="space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-ink-dim hover:text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="space-y-2.5 text-ink-dim">
            <li>
              <a href="#contact" className="hover:text-ink">Contact</a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="break-all hover:text-ink">{contact.email}</a>
            </li>
            <li>Kathmandu, Nepal</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line py-6 text-center text-xs text-ink-faint">
        © {new Date().getFullYear()} Ybetu AI. All rights reserved.
      </div>
    </footer>
  )
}
