import { useEffect, useRef } from 'react'
import Typewriter from './Typewriter.jsx'

export default function Hero() {
  const particlesRef = useRef(null)

  useEffect(() => {
    const container = particlesRef.current
    if (!container) return
    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div')
      p.className = 'particle'
      p.style.left = Math.random() * 100 + '%'
      p.style.top = Math.random() * 100 + '%'
      const size = 1 + Math.random() * 3
      p.style.width = size + 'px'
      p.style.height = size + 'px'
      p.style.opacity = Math.random() * 0.5
      p.style.animation = `float ${3 + Math.random() * 5}s ease-in-out infinite`
      p.style.animationDelay = Math.random() * 3 + 's'
      container.appendChild(p)
    }
    return () => {
      container.innerHTML = ''
    }
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className="mb-8 inline-block">
          <div className="bg-dark-800 border border-green-500/20 rounded-lg overflow-hidden shadow-2xl shadow-green-500/5 max-w-2xl mx-auto">
            <div className="flex items-center gap-2 px-4 py-2 bg-dark-700 border-b border-green-500/10">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-3 font-mono text-xs text-gray-500">
                terminal@romao ~
              </span>
            </div>
            <div className="p-6 text-left font-mono text-sm">
              <p className="text-gray-500 mb-1">$ whoami</p>
              <p className="text-green-400 mb-3 text-lg font-bold">
                Romão Quilamiquiza
              </p>
              <p className="text-gray-500 mb-1">$ cat role.txt</p>
              <p className="text-gray-300 mb-3">
                Engenheiro de Software & Maker
              </p>
              <p className="text-gray-500 mb-1">$ echo $PASSION</p>
              <p className="text-green-400/80">
                Engenharia de Software | DevOps | Fabricação Digital
              </p>
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-mono">
          <span className="text-white">Olá, sou </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
            Romão
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-4 font-light">
          Acredito que construir é uma forma de pensar estrategicamente.{' '}
          <span className="text-green-400 font-mono font-medium">Código é ferramenta</span> ;{' '}
          <span className="text-green-400 font-mono font-medium">
            arquitetura é visão.
          </span>
        </p>
        <div className="font-mono text-green-500/70 mb-10 h-8">
          <Typewriter />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="group px-8 py-3 bg-green-500 hover:bg-green-600 text-dark-900 font-mono font-bold rounded-md transition-all duration-300 pulse-green flex items-center gap-2"
          >
            <i className="fas fa-terminal text-sm" />
            Ver Projetos
            <i className="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-green-500/40 text-green-400 hover:bg-green-500/10 font-mono rounded-md transition-all duration-300 flex items-center gap-2"
          >
            <i className="fas fa-envelope text-sm" />
            Contactar
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 float-animation">
          <div className="flex flex-col items-center gap-2 text-green-500/50">
            <span className="font-mono text-xs">scroll</span>
            <i className="fas fa-chevron-down text-sm" />
          </div>
        </div>
      </div>
    </section>
  )
}
