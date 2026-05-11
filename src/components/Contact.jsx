import { useState } from 'react'

const SOCIALS = [
  { icon: 'fab fa-github', href: 'https://github.com/Rquilamiquiza' },
  { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/rom%C3%A3o-quilamiquiza-4767092b1/' },
  { icon: 'fab fa-instagram', href: 'https://www.instagram.com/romao_quilamiquiza/' },
  { icon: 'fas fa-envelope', href: 'mailto:quilamiquizaromao@gmail.com' }
]

export default function Contact() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  })
  const [sent, setSent] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setForm({ nome: '', email: '', assunto: '', mensagem: '' })
    }, 3000)
  }

  const inputClass =
    'w-full bg-dark-800 border border-green-500/10 rounded-md px-4 py-3 text-gray-300 font-mono text-sm focus:outline-none focus:border-green-500/50 transition-colors placeholder:text-gray-600'

  return (
    <section id="contact" className="py-24 relative bg-dark-800/30">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="animate-on-scroll">
          <h2 className="font-mono text-green-400 text-sm mb-2">
            <span className="text-gray-500">04.</span> ~/contacto
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Vamos conversar<span className="text-green-500">_</span>
          </h3>
          <p className="text-gray-400 max-w-lg mx-auto mb-12 leading-relaxed">
            Estou sempre aberto a novas oportunidades, colaborações e desafios.
            Não hesites em entrar em contacto!
          </p>
        </div>

        <div className="animate-on-scroll max-w-xl mx-auto">
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="text-left">
                <label className="font-mono text-xs text-gray-500 mb-1 block">
                  nome_
                </label>
                <input
                  name="nome"
                  value={form.nome}
                  onChange={onChange}
                  type="text"
                  placeholder="O teu nome"
                  className={inputClass}
                />
              </div>
              <div className="text-left">
                <label className="font-mono text-xs text-gray-500 mb-1 block">
                  email_
                </label>
                <input
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  type="email"
                  placeholder="email@exemplo.com"
                  className={inputClass}
                />
              </div>
            </div>
            <div className="text-left">
              <label className="font-mono text-xs text-gray-500 mb-1 block">
                assunto_
              </label>
              <input
                name="assunto"
                value={form.assunto}
                onChange={onChange}
                type="text"
                placeholder="Sobre o que queres falar?"
                className={inputClass}
              />
            </div>
            <div className="text-left">
              <label className="font-mono text-xs text-gray-500 mb-1 block">
                mensagem_
              </label>
              <textarea
                name="mensagem"
                value={form.mensagem}
                onChange={onChange}
                rows="5"
                placeholder="Escreve a tua mensagem..."
                className={`${inputClass} resize-none`}
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              className={`w-full py-3 font-mono font-bold rounded-md transition-all duration-300 flex items-center justify-center gap-2 pulse-green ${
                sent
                  ? 'bg-green-600/50 text-dark-900'
                  : 'bg-green-500 hover:bg-green-600 text-dark-900'
              }`}
            >
              <i className={`fas ${sent ? 'fa-check' : 'fa-paper-plane'} text-sm`} />
              {sent ? 'Mensagem Enviada!' : 'Enviar Mensagem'}
            </button>
          </form>
        </div>

        <div className="animate-on-scroll mt-16">
          <p className="font-mono text-xs text-gray-500 mb-6">
            // encontra-me nas redes
          </p>
          <div className="flex justify-center gap-6">
            {SOCIALS.map((s) => (
              <a
                key={s.icon}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-dark-800 border border-green-500/10 rounded-md flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-500/30 hover:-translate-y-1 transition-all duration-300"
              >
                <i className={`${s.icon} text-xl`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
