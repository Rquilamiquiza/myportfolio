import { useEffect } from 'react'

export default function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            entry.target
              .querySelectorAll('.skill-bar-fill')
              .forEach((bar) => bar.classList.add('visible'))
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const els = document.querySelectorAll('.animate-on-scroll')
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
