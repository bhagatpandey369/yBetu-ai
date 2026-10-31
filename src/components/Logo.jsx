// Ybetu AI mark: hexagon cube with a "Y" and an "i" dot.
// Drawn in currentColor, so set its colour with a text-* class.
export default function Logo({ className = 'h-8 w-8' }) {
  return (
    <svg viewBox="290 210 675 800" fill="currentColor" className={className} aria-hidden="true">
      <path d="M872,368 L655,238 Q630,224 605,238 L335,408 Q305,428 305,462 L305,770 Q305,800 332,815 L610,987 Q630,998 648,987 L674,971 L674,640 L478,465 L355,465 L580,668 L580,938 L342,792 Q330,784 330,768 L330,462 Q330,442 346,432 L612,268 Q630,257 648,268 L857,390 Z" />
      <path d="M643,598 L785,465 L903,465 L685,664 L685,636 Z" />
      <path d="M952,468 L952,770 Q952,800 928,815 L700,956 L700,928 L913,795 Q928,786 928,768 L928,484 Z" />
      <circle cx="915" cy="416" r="21" />
    </svg>
  )
}
