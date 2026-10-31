import { useEffect, useRef } from 'react'

// Lightweight neural-network animation: drifting nodes, some drawn as
// Devanagari letters, linked when close together. Pauses when off-screen
// or when the tab is hidden, and renders a single still frame for users
// who prefer reduced motion.
const LETTERS = 'अआइईउएओकखगघचछजझटठडढणतथदधनपफबभमयरलवशसह'.split('')
const COLORS = ['#0b0b0b', '#4a4a46', '#75756f']
const LINK_DIST = 130

export default function HeroCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let width = 0
    let height = 0
    let nodes = []
    let frame = null
    let running = false

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      // Fewer nodes on small screens keeps phones smooth
      const count = Math.round(Math.min(70, Math.max(28, (width * height) / 16000)))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        letter: Math.random() < 0.3 ? LETTERS[Math.floor(Math.random() * LETTERS.length)] : null,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        r: 1.2 + Math.random() * 1.8,
      }))
      draw()
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < LINK_DIST) {
            ctx.strokeStyle = `rgba(11, 11, 11, ${0.12 * (1 - d / LINK_DIST)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.font = '500 16px "Noto Sans Devanagari", sans-serif'
      for (const n of nodes) {
        if (n.letter) {
          ctx.fillStyle = n.color + '40'
          ctx.fillText(n.letter, n.x, n.y)
        } else {
          ctx.fillStyle = n.color + '59'
          ctx.beginPath()
          ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    function step() {
      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < -20) n.x = width + 20
        if (n.x > width + 20) n.x = -20
        if (n.y < -20) n.y = height + 20
        if (n.y > height + 20) n.y = -20
      }
      draw()
      frame = requestAnimationFrame(step)
    }

    function start() {
      if (running || reduceMotion) return
      running = true
      frame = requestAnimationFrame(step)
    }

    function stop() {
      running = false
      cancelAnimationFrame(frame)
    }

    resize()
    // Redraw once the Devanagari font has loaded so letters render correctly
    document.fonts?.ready.then(draw)

    const visibility = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()))
    visibility.observe(canvas)
    const onVisibilityChange = () => (document.hidden ? stop() : start())
    document.addEventListener('visibilitychange', onVisibilityChange)
    window.addEventListener('resize', resize)

    return () => {
      stop()
      visibility.disconnect()
      document.removeEventListener('visibilitychange', onVisibilityChange)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
}
