import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, children, center = false }) {
  return (
    <Reveal className={`mb-12 max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted">{eyebrow}</p>
      <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl md:text-5xl">{title}</h2>
      {children && <p className="mt-4 text-base text-ink-dim sm:text-lg">{children}</p>}
    </Reveal>
  )
}
