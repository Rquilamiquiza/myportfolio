import { PROJECTS } from '../data/projects.js'

function ProjectCard({ project, delay }) {
  const iconClass = project.icon.startsWith('fab')
    ? project.icon
    : `fas ${project.icon}`
  return (
    <div
      className="animate-on-scroll project-card bg-dark-800 border border-green-500/10 rounded-lg overflow-hidden group"
      style={delay ? { transitionDelay: delay } : undefined}
    >
      <div className="h-48 bg-gradient-to-br from-dark-700 to-dark-800 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-green-500/5 group-hover:bg-green-500/10 transition-colors" />
        <i
          className={`${iconClass} text-6xl text-green-500/20 group-hover:text-green-500/40 transition-all group-hover:scale-110 duration-500`}
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <i className="fas fa-folder-open text-green-400 text-sm" />
          <span className="font-mono text-xs text-gray-500">
            {project.category}
          </span>
        </div>
        <h4 className="text-white font-bold text-lg mb-2 group-hover:text-green-400 transition-colors">
          {project.title}
        </h4>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((t) => (
            <span
              key={t}
              className="font-mono text-xs px-2 py-1 bg-green-500/10 text-green-400 rounded"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          {project.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-gray-400 hover:text-green-400 transition-colors text-sm"
            >
              <i className={`${l.icon} mr-1`} />
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="animate-on-scroll">
          <h2 className="font-mono text-green-400 text-sm mb-2">
            <span className="text-gray-500">03.</span> ~/projetos
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            O que tenho construído<span className="text-green-500">_</span>
          </h3>
          <p className="text-gray-500 font-mono text-sm mb-12">
            // projetos pessoais e académicos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard
              key={p.title}
              project={p}
              delay={i % 3 === 1 ? '0.1s' : i % 3 === 2 ? '0.2s' : undefined}
            />
          ))}

          <div
            className="animate-on-scroll project-card bg-dark-800 border border-green-500/10 border-dashed rounded-lg overflow-hidden flex items-center justify-center min-h-[380px] group hover:border-green-500/30"
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="text-center p-6">
              <i className="fas fa-plus-circle text-4xl text-green-500/30 group-hover:text-green-500/60 transition-all mb-4" />
              <p className="font-mono text-gray-500 group-hover:text-gray-400 transition-colors">
                Mais projetos em breve...
              </p>
              <p className="font-mono text-xs text-gray-600 mt-2">
                git commit -m "new project"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
