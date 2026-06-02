export function Projects({ projects }) {
  return (
    <section className="section" id="projetos">
      <div className="section-heading reveal">
        <p className="eyebrow">Projetos</p>
        <h2>Alguns trabalhos para mostrar capacidade tecnica e visual.</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card reveal" key={project.title}>
            <div className="project-topline">
              <span>Projeto</span>
              <a
                href={project.link}
                aria-label={`Abrir ${project.title}`}
                rel="noreferrer"
                target="_blank"
              >
                Ver
              </a>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tag-row">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
