import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { team } from '../content'

export default function Team() {
  return (
    <section id="team" className="scroll-mt-16 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Our team" title="The people behind Ybetu AI.">
          A Kathmandu-based team combining AI research and engineering to build technology for Nepal.
        </SectionHeading>

        <div className="grid max-w-3xl gap-5 sm:grid-cols-2">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 100} className="rounded-xl border border-line bg-card p-7">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-lg font-semibold text-bg">
                {m.initials}
              </div>
              <h3 className="text-lg font-semibold">{m.name}</h3>
              <p className="mb-3 text-sm text-muted">{m.role}</p>
              <p className="text-sm leading-relaxed text-ink-dim">{m.bio}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
