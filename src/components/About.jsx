const INFO_CARDS = [
  { icon: 'fa-cube', label: 'Fabricação Digital' },
  { icon: 'fa-code', label: 'Django & Python' },
  { icon: 'fa-gears', label: 'DevOps' },
  { icon: 'fa-eye', label: 'Computação Visual' }
]

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="animate-on-scroll">
          <h2 className="font-mono text-green-400 text-sm mb-2">
            <span className="text-gray-500">01.</span> ~/sobre-mim
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Quem sou eu<span className="text-green-500">_</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll from-left space-y-6">
            <div className="bg-dark-800 border border-green-500/10 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500/10 rounded-md flex items-center justify-center">
                  <i className="fas fa-user text-green-400" />
                </div>
                <h4 className="font-mono text-green-400 text-sm">about.json</h4>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Sou técnico de <span className="text-green-400">FabLab</span>,
                focado em{' '}
                <span className="text-green-400">fabricação digital</span>,{' '}
                <span className="text-green-400">programação</span> e{' '}
                <span className="text-green-400">DevOps</span>. Combino código
                com prototipagem física para criar soluções inovadoras.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Trabalho com Django e Python no desenvolvimento web, ferramentas
                de DevOps para automação e deploy, e tenho projetos na área de
                computação visual.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {INFO_CARDS.map((c) => (
                <div
                  key={c.label}
                  className="bg-dark-800 border border-green-500/10 rounded-lg p-4 text-center hover:border-green-500/30 transition-colors"
                >
                  <i className={`fas ${c.icon} text-green-400 text-2xl mb-2`} />
                  <p className="font-mono text-sm text-gray-400">{c.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-on-scroll from-right">
            <div className="bg-dark-800 border border-green-500/10 rounded-lg overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 bg-dark-700 border-b border-green-500/10">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 font-mono text-xs text-gray-500">
                  romao.py
                </span>
              </div>
              <div className="p-6 font-mono text-sm">
                <p><span className="text-purple-400">class</span> <span className="text-green-400">Romao</span>:</p>
                <p className="ml-4"><span className="text-purple-400">def</span> <span className="text-yellow-400">__init__</span>(<span className="text-orange-400">self</span>):</p>
                <p className="ml-8"><span className="text-orange-400">self</span>.nome = <span className="text-green-300">"Romão Quilamiquiza"</span></p>
                <p className="ml-8"><span className="text-orange-400">self</span>.role = <span className="text-green-300">"Técnico FabLab & Developer"</span></p>
                <p className="ml-8"><span className="text-orange-400">self</span>.stack = [</p>
                <p className="ml-12"><span className="text-green-300">"Python"</span>, <span className="text-green-300">"Django"</span>,</p>
                <p className="ml-12"><span className="text-green-300">"Docker"</span>, <span className="text-green-300">"CI/CD"</span></p>
                <p className="ml-8">]</p>
                <p className="ml-8"><span className="text-orange-400">self</span>.areas = [</p>
                <p className="ml-12"><span className="text-green-300">"Fabricação Digital"</span>,</p>
                <p className="ml-12"><span className="text-green-300">"DevOps"</span>, <span className="text-green-300">"Computação Visual"</span></p>
                <p className="ml-8">]</p>
                <p>&nbsp;</p>
                <p className="ml-4"><span className="text-purple-400">def</span> <span className="text-yellow-400">motto</span>(<span className="text-orange-400">self</span>):</p>
                <p className="ml-8"><span className="text-purple-400">return</span> <span className="text-green-300">"Do digital ao físico, sempre a criar."</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
