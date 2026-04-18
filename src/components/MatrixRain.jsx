import { useEffect, useRef } from 'react'

const CHARS = '01アイウエオカキクケコサシスセソタチツテト'

export default function MatrixRain() {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const columns = Math.floor(window.innerWidth / 30)
    const timers = []
    const listeners = []

    const createDrop = (col) => {
      const char = document.createElement('span')
      char.className = 'matrix-char'
      char.textContent = CHARS[Math.floor(Math.random() * CHARS.length)]
      char.style.left = col * 30 + Math.random() * 15 + 'px'
      char.style.opacity = Math.random() * 0.3
      char.style.animationDuration = 8 + Math.random() * 12 + 's'
      char.style.fontSize = 10 + Math.random() * 6 + 'px'
      container.appendChild(char)
      const onEnd = () => {
        char.remove()
        createDrop(col)
      }
      char.addEventListener('animationend', onEnd)
      listeners.push({ el: char, fn: onEnd })
    }

    for (let i = 0; i < columns; i++) {
      const t = setTimeout(() => createDrop(i), Math.random() * 8000)
      timers.push(t)
    }

    return () => {
      timers.forEach(clearTimeout)
      listeners.forEach(({ el, fn }) => el.removeEventListener('animationend', fn))
      container.innerHTML = ''
    }
  }, [])

  return (
    <div
      ref={ref}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-30"
    />
  )
}
