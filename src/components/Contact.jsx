import { useState } from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { contact, interests } from '../content'

const field =
  'w-full rounded-md border border-line-md bg-bg-alt px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-ink/60 focus:outline-none'
const labelCls = 'mb-1.5 block text-xs font-medium text-ink-dim'

// If Formspree fails (offline, blocked), fall back to a pre-filled email.
function openMailtoFallback(data) {
  const subject = encodeURIComponent('Ybetu AI Enquiry — ' + (data.interest || 'General'))
  const body = encodeURIComponent(
    `Name: ${data.first_name || ''} ${data.last_name || ''}\n` +
      `Email: ${data.email || ''}\n` +
      `Organisation: ${data.organisation || ''}\n` +
      `Interest: ${data.interest || ''}\n\n` +
      `Message:\n${data.message || ''}`,
  )
  window.open(`mailto:${contact.email}?subject=${subject}&body=${body}`, '_blank')
}

export default function Contact({ interest, onInterestChange }) {
  const [status, setStatus] = useState('idle') // idle | sending | sent

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    setStatus('sending')
    try {
      const res = await fetch(contact.formspree, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) openMailtoFallback(Object.fromEntries(formData))
    } catch {
      openMailtoFallback(Object.fromEntries(formData))
    }
    form.reset()
    onInterestChange('')
    setStatus('sent')
  }

  return (
    <section id="contact" className="scroll-mt-16 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <SectionHeading eyebrow="Contact" title="Let’s build it together.">
            Want to contribute, partner or just learn more? Send us a message and we’ll reply within 24 hours.
          </SectionHeading>
          <Reveal as="ul" className="space-y-4 text-sm text-ink-dim">
            <li>
              📧{' '}
              <a href={`mailto:${contact.email}`} className="hover:text-ink">
                {contact.email}
              </a>
            </li>
            <li>
              📞{' '}
              <a href={`tel:${contact.phone.replace(/[^+\d]/g, '')}`} className="hover:text-ink">
                {contact.phone}
              </a>
            </li>
            <li>📍 {contact.address}</li>
          </Reveal>
        </div>

        <Reveal className="rounded-2xl border border-line bg-card p-6 sm:p-8">
          {status === 'sent' ? (
            <div className="flex min-h-80 flex-col items-center justify-center text-center">
              <p className="mb-4 text-4xl">✅</p>
              <h3 className="mb-2 text-xl font-semibold">Message sent!</h3>
              <p className="mb-6 text-sm text-ink-dim">Thank you. We’ll reply to your email within 24 hours.</p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="rounded-md border border-line-md px-5 py-2.5 text-sm hover:bg-card-2"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
              <input type="hidden" name="_subject" value="New enquiry from Ybetu AI website" />
              <div>
                <label htmlFor="first_name" className={labelCls}>First name *</label>
                <input id="first_name" name="first_name" required className={field} autoComplete="given-name" />
              </div>
              <div>
                <label htmlFor="last_name" className={labelCls}>Last name</label>
                <input id="last_name" name="last_name" className={field} autoComplete="family-name" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className={labelCls}>Email *</label>
                <input id="email" name="email" type="email" required placeholder="you@example.com" className={field} autoComplete="email" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="organisation" className={labelCls}>Organisation / university</label>
                <input id="organisation" name="organisation" className={field} autoComplete="organization" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="interest" className={labelCls}>I’m interested in</label>
                <select
                  id="interest"
                  name="interest"
                  value={interest}
                  onChange={(e) => onInterestChange(e.target.value)}
                  className={`${field} appearance-none`}
                >
                  <option value="">Select a topic…</option>
                  {interests.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className={labelCls}>Message *</label>
                <textarea id="message" name="message" rows="4" required placeholder="Tell us how you’d like to help…" className={field} />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="rounded-md bg-ink px-6 py-3 font-medium text-bg transition-opacity hover:opacity-85 disabled:opacity-60 sm:col-span-2"
              >
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
