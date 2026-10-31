import HeroCanvas from './HeroCanvas'
import { hero } from '../content'

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pt-16">
      <HeroCanvas />
      {/* Soft glow + fade so text stays readable over the animation */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(11,11,11,0.05),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line-md bg-card/70 px-3.5 py-1.5 text-xs text-ink-dim backdrop-blur">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink" />
          {hero.badge}
        </p>

        <h1 className="max-w-4xl font-serif text-[2.6rem] leading-[1.05] sm:text-6xl md:text-7xl">
          {hero.title[0]}
          <br />
          <span className="italic text-ink-dim">{hero.title[1]}</span>
        </h1>

        <p className="mt-5 font-deva text-xl text-muted sm:text-2xl" lang="ne">
          {hero.devanagari}
        </p>

        <p className="mt-6 max-w-2xl text-base text-ink-dim sm:text-lg">{hero.subtitle}</p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#involved"
            className="rounded-md bg-ink px-6 py-3 text-center font-medium text-bg transition-opacity hover:opacity-85"
          >
            Join the effort
          </a>
          <a
            href="#roadmap"
            className="rounded-md border border-line-md px-6 py-3 text-center font-medium text-ink transition-colors hover:bg-card"
          >
            See the roadmap →
          </a>
        </div>
      </div>
    </section>
  )
}
