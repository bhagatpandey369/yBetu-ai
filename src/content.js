// All site copy lives here so it can be edited without touching components.
// Keep claims honest: only mark something "Released" once it is actually public.

export const contact = {
  email: 'ybetu.ai@gmail.com',
  phone: '+977-9857067761',
  address: 'Maharajgunj, Kathmandu, Nepal',
  formspree: 'https://formspree.io/f/mqewgvjq',
}

export const siteUrl = 'https://www.ybetu.com'
export const siteTitle = "Ybetu AI — Building Nepal's Foundation Model"

// Each path matches a section id: /mission scrolls to <section id="mission">
export const nav = [
  { label: 'Mission', href: '/mission' },
  { label: 'Research', href: '/research' },
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'Get Involved', href: '/get-involved' },
  { label: 'Team', href: '/team' },
]

// Every path that gets its own URL (and its own HTML file at build time)
export const pages = [...nav, { label: 'Contact', href: '/contact' }]

export function pageTitle(path) {
  const page = pages.find((p) => p.href === path)
  return page ? `${page.label} — Ybetu AI` : siteTitle
}

export const hero = {
  badge: 'Research lab · Kathmandu · Founded 2026',
  title: ['Building Nepal’s own', 'foundation model.'],
  devanagari: 'नेपालको आफ्नै कृत्रिम बुद्धिमत्ता',
  subtitle:
    'Ybetu AI is creating open Nepali datasets, a Devanagari-native tokenizer and a foundation language model that understands the language, culture and context of Nepal.',
}

export const problems = [
  {
    title: 'Underrepresented in data',
    body: 'Nepali is spoken by millions, yet it makes up a tiny share of the text that global AI models learn from. The result: weaker answers, poor grammar and missing local knowledge.',
  },
  {
    title: 'Devanagari gets broken apart',
    body: 'Tokenizers built for English split Devanagari words into many small pieces. That makes Nepali slower and more expensive to process, and harder for models to learn well.',
  },
  {
    title: '124 languages, little support',
    body: 'Nepal’s 2021 census recorded 124 mother tongues. Languages like Maithili, Bhojpuri, Tamang and Newari have almost no AI support today.',
  },
]

export const pillars = [
  {
    icon: '📚',
    title: 'Nepali Open Corpus',
    body: 'A large, cleaned and deduplicated collection of Nepali text from news, literature, public documents and the web, gathered with clear sourcing.',
    status: 'Phase 1',
  },
  {
    icon: '🔤',
    title: 'Devanagari Tokenizer',
    body: 'A tokenizer trained on Nepali text so words stay whole, making models faster, cheaper and better at the language.',
    status: 'Phase 1',
  },
  {
    icon: '🧠',
    title: 'Ybetu Foundation Model',
    body: 'A language model pretrained on Nepali first, then tuned to follow instructions, answer questions, translate and summarise.',
    status: 'Phase 2–3',
  },
  {
    icon: '📏',
    title: 'Nepali Benchmark',
    body: 'An open evaluation suite to measure how well any AI model understands Nepali grammar, facts, reasoning and culture.',
    status: 'Phase 3',
  },
  {
    icon: '🎙️',
    title: 'Speech & Documents',
    body: 'Extending the model to Nepali speech recognition and synthesis, and to reading scanned and handwritten Devanagari documents.',
    status: 'Phase 4',
  },
  {
    icon: '🌏',
    title: 'Languages of Nepal',
    body: 'Growing beyond Nepali to Maithili, Bhojpuri, Newari, Tamang and more, in partnership with native-speaker communities.',
    status: 'Phase 4',
  },
]

export const roadmap = [
  {
    phase: 'Phase 1',
    label: 'Now',
    title: 'Data foundation',
    items: [
      'Collect and clean a large Nepali text corpus',
      'Train and open-source a Devanagari tokenizer',
      'Build the contributor community',
    ],
  },
  {
    phase: 'Phase 2',
    label: 'Next',
    title: 'Pretraining',
    items: [
      'Secure GPU compute through partners and grants',
      'Pretrain a first Nepali base model',
      'Publish training notes and early results',
    ],
  },
  {
    phase: 'Phase 3',
    label: 'Later',
    title: 'Instruction tuning & evaluation',
    items: [
      'Tune the model for Q&A, translation and summarisation',
      'Release the open Nepali benchmark',
      'Test with real users in education and public services',
    ],
  },
  {
    phase: 'Phase 4',
    label: 'Future',
    title: 'Open release & expansion',
    items: [
      'Release open model weights for everyone',
      'Add speech and document understanding',
      'Support more languages of Nepal',
    ],
  },
]

export const principles = [
  { title: 'Open by default', body: 'Datasets, code and model weights released for researchers, students and builders.' },
  { title: 'Nepal first', body: 'Designed around Nepali language, culture, law and everyday needs, not translated from English.' },
  { title: 'Responsible data', body: 'Clear sourcing, respect for copyright and privacy, and removal of personal information.' },
  { title: 'Community built', body: 'Shaped by Nepali researchers, linguists, students and developers working together.' },
]

export const involvement = [
  {
    title: 'Researchers',
    body: 'Work with us on tokenization, pretraining, evaluation and low-resource language methods.',
    interest: 'Research collaboration',
  },
  {
    title: 'Developers',
    body: 'Help build data pipelines, training infrastructure and open-source tools.',
    interest: 'Contribute as a developer',
  },
  {
    title: 'Students & volunteers',
    body: 'Contribute to data collection, cleaning and annotation, and learn AI along the way.',
    interest: 'Volunteer / student',
  },
  {
    title: 'Linguists & writers',
    body: 'Help keep the corpus high-quality and diverse, and build the Nepali benchmark.',
    interest: 'Linguistics / data quality',
  },
  {
    title: 'Data contributors',
    body: 'Publishers, institutions and archives can share Nepali text under clear licences.',
    interest: 'Contribute data',
  },
  {
    title: 'Partners & funders',
    body: 'GPU compute, research grants and institutional partnerships make training possible.',
    interest: 'Partnership / compute / funding',
  },
]

export const team = [
  {
    initials: 'BP',
    name: 'Bhagat Pandey',
    role: 'Founder',
    bio: 'MTech in Artificial Intelligence from Kathmandu University (KU).',
  },
  {
    initials: 'IK',
    name: 'Isha Khanal',
    role: 'Co-founder & CEO',
    bio: 'MSc in Information System Engineering from Institute of Engineering (IOE).',
  },
]

export const interests = [
  'Research collaboration',
  'Contribute as a developer',
  'Volunteer / student',
  'Linguistics / data quality',
  'Contribute data',
  'Partnership / compute / funding',
  'Media / press',
  'General inquiry',
]
