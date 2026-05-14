import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#home', label: '~/home' },
  { href: '#about', label: '~/sobre' },
  { href: '#skills', label: '~/skills' },
  { href: '#projects', label: '~/projetos' },
  { href: '#contact', label: '~/contacto' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.pageYOffset > 50)
      let current = ''
      document.querySelectorAll('section').forEach((section) => {
        if (window.pageYOffset >= section.offsetTop - 200) {
          current = section.id
        }
      })
      if (current) setActive(current)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-900/90 backdrop-blur-md shadow-lg shadow-green-500/5'
          : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#home"
          className="font-mono text-green-500 text-xl font-bold glitch-hover flex items-center gap-2"
        >
          <img
              src="/home.svg"
              alt="Logo"
              className="w-10 h-10 rounded-full object-cover"
            />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link font-mono text-sm transition-colors ${
                active === l.href.slice(1)
                  ? 'text-green-400'
                  : 'text-gray-400 hover:text-green-400'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-green-400 text-2xl"
          aria-label="Toggle menu"
        >
          <i className={`fas ${open ? 'fa-times' : 'fa-bars'}`} />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-dark-800/95 backdrop-blur-md border-t border-green-500/10">
          <div className="flex flex-col items-center gap-4 py-6">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm text-gray-400 hover:text-green-400 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
