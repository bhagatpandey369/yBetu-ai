import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { roadmap } from '../content'

export default function Roadmap() {
  return (
    <section id="roadmap" className="scroll-mt-16 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Roadmap" title="From data to an open model.">
          A step-by-step plan. We’ll update this page as each phase moves forward.
        </SectionHeading>

        <div className="relative">
          {/* Connecting line on large screens */}
          <div className="absolute top-[1.2rem] right-0 left-0 hidden h-px bg-gradient-to-r from-ink via-ink/40 to-transparent lg:block" />
          <ol className="relative grid gap-6 lg:grid-cols-4">
            {roadmap.map((step, i) => {
              const current = i === 0
              return (
                <Reveal as="li" key={step.phase} delay={i * 120} className="relative">
                  <div
                    className={`relative mb-5 flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold ${
                      current ? 'border-ink bg-ink text-bg' : 'border-line-md bg-bg text-ink-dim'
                    }`}
                  >
                    {i + 1}
                    {current && <span className="absolute inset-0 animate-ping rounded-full border border-ink opacity-40" />}
                  </div>
                  <div className={`rounded-xl border p-6 ${current ? 'border-ink/40 bg-card-2' : 'border-line bg-card'}`}>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em]">
                      <span className="text-muted">{step.phase}</span>
                      <span className={current ? 'text-ink' : 'text-ink-faint'}> · {step.label}</span>
                    </p>
                    <h3 className="mb-4 text-lg font-semibold">{step.title}</h3>
                    <ul className="space-y-2.5">
                      {step.items.map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm text-ink-dim">
                          <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${current ? 'bg-ink' : 'bg-ink-faint'}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
