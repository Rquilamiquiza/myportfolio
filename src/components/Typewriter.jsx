import { useEffect, useRef, useState } from 'react'

const TEXTS = [
  '> Fabricação Digital & FabLab_',
  '> Django & Python Developer_',
  '> DevOps & CI/CD Pipelines_',
  '> Computação Visual_',
  '> Sempre a aprender..._'
]

export default function Typewriter() {
  const [text, setText] = useState('')
  const idx = useRef(0)
  const char = useRef(0)
  const deleting = useRef(false)

  useEffect(() => {
    let timer
    const tick = () => {
      const current = TEXTS[idx.current]
      if (deleting.current) {
        char.current -= 1
        setText(current.substring(0, char.current))
      } else {
        char.current += 1
        setText(current.substring(0, char.current))
      }

      let speed = deleting.current ? 30 : 60
      if (!deleting.current && char.current === current.length) {
        speed = 2000
        deleting.current = true
      } else if (deleting.current && char.current === 0) {
        deleting.current = false
        idx.current = (idx.current + 1) % TEXTS.length
        speed = 500
      }
      timer = setTimeout(tick, speed)
    }
    timer = setTimeout(tick, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <span
      className="inline-block border-r-[3px] border-green-500 pr-1"
      style={{ animation: 'blink 0.7s step-end infinite' }}
    >
      {text}
    </span>
  )
}
