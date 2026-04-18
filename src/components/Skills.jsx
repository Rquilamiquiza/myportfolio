import { PROGRAMMING, DEVOPS, TOOLS, SOFT } from '../data/skills.js'

function SkillBar({ label, value }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-mono text-sm text-gray-400">{label}</span>
        <span className="font-mono text-xs text-green-400">{value}%</span>
      </div>
      <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
        <div
          className="skill-bar-fill h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full"
          style={{ '--skill-width': `${value}%` }}
        />
      </div>
    </div>
  )
}

function Tag({ icon, label }) {
  return (
    <span className="px-3 py-1.5 bg-dark-700 border border-green-500/10 rounded-md font-mono text-xs text-gray-400 hover:text-green-400 hover:border-green-500/30 transition-all cursor-default">
      <i className={`${icon} mr-1`} />
      {label}
    </span>
  )
}

function Card({ icon, title, children, side = 'left' }) {
  return (
    <div
      className={`animate-on-scroll from-${side} bg-dark-800 border border-green-500/10 rounded-lg p-6 hover:border-green-500/20 transition-all`}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-green-500/10 rounded-md flex items-center justify-center">
          <i className={`fas ${icon} text-green-400`} />
        </div>
        <h4 className="font-mono text-white font-bold">{title}</h4>
      </div>
      {children}
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-dark-800/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="animate-on-scroll">
          <h2 className="font-mono text-green-400 text-sm mb-2">
            <span className="text-gray-500">02.</span> ~/competências
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Skills & Tecnologias<span className="text-green-500">_</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card icon="fa-code" title="Programação" side="left">
            <div className="space-y-4">
              {PROGRAMMING.map((s) => (
                <SkillBar key={s.label} {...s} />
              ))}
            </div>
          </Card>

          <Card
            icon="fa-gears"
            title="DevOps & Fabricação Digital"
            side="right"
          >
            <div className="space-y-4">
              {DEVOPS.map((s) => (
                <SkillBar key={s.label} {...s} />
              ))}
            </div>
          </Card>

          <Card icon="fa-tools" title="Ferramentas" side="left">
            <div className="flex flex-wrap gap-3">
              {TOOLS.map((t) => (
                <Tag key={t.label} {...t} />
              ))}
            </div>
          </Card>

          <Card icon="fa-brain" title="Competências" side="right">
            <div className="flex flex-wrap gap-3">
              {SOFT.map((t) => (
                <Tag key={t.label} {...t} />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
