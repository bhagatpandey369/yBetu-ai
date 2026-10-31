import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { involvement } from '../content'

export default function Involved({ onSelect }) {
  return (
    <section id="involved" className="scroll-mt-16 bg-bg-alt py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Get involved" title="Nepal’s model, built by Nepal’s people.">
          A foundation model takes data, compute and many hands. Here’s how you can help.
        </SectionHeading>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {involvement.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 100}>
              <a
                href="#contact"
                onClick={() => onSelect(item.interest)}
                className="flex h-full flex-col rounded-xl border border-line bg-card p-7 transition-colors hover:border-ink/40 hover:bg-card-2"
              >
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-ink-dim">{item.body}</p>
                <span className="text-sm font-medium text-ink">Get in touch →</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
