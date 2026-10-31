import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { pillars } from '../content'

export default function Research() {
  return (
    <section id="research" className="scroll-mt-16 bg-bg-alt py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="What we’re building" title="The building blocks of a Nepali foundation model.">
          Each piece will be released openly as it’s ready, so the whole community can build on it.
        </SectionHeading>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal
              key={p.title}
              delay={(i % 3) * 100}
              className="group rounded-xl border border-line bg-card p-7 transition-colors hover:border-line-md hover:bg-card-2"
            >
              <div className="mb-5 flex items-start justify-between">
                <span className="text-3xl" aria-hidden="true">
                  {p.icon}
                </span>
                <span className="rounded-full border border-line-md px-2.5 py-0.5 text-[11px] font-medium text-muted">
                  {p.status}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold">{p.title}</h3>
              <p className="text-sm leading-relaxed text-ink-dim">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
