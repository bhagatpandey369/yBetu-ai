import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { problems, principles } from '../content'

export default function Mission() {
  return (
    <section id="mission" className="scroll-mt-16 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Why it matters" title="AI that speaks Nepali, not just translates it.">
          Today’s large AI models are built for English first. Nepal deserves a model trained on its own language,
          its own knowledge and its own needs.
        </SectionHeading>

        <div className="grid gap-5 md:grid-cols-3">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={i * 100} className="rounded-xl border border-line bg-card p-7">
              <p className="mb-4 font-serif text-4xl text-ink-faint">0{i + 1}</p>
              <h3 className="mb-2 text-lg font-semibold">{p.title}</h3>
              <p className="text-sm leading-relaxed text-ink-dim">{p.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 rounded-2xl border border-line bg-gradient-to-br from-card-2 to-bg-alt p-8 sm:p-10">
          <h3 className="mb-8 font-serif text-2xl sm:text-3xl">Our principles</h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <div key={p.title}>
                <div className="mb-3 h-0.5 w-8 bg-ink" />
                <h4 className="mb-1.5 font-semibold">{p.title}</h4>
                <p className="text-sm leading-relaxed text-ink-dim">{p.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
