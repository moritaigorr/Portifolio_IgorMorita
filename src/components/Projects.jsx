import { Link } from 'react-router-dom'

export function Projects({ projects }) {
  return (
    <section className="section" id="projetos">
      <div className="section-heading reveal">
        <p className="eyebrow">Projetos</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <Link
            className="project-card reveal"
            key={project.title}
            to={`/projetos/${project.slug}`}
            aria-label={`Abrir ${project.title}`}
          >
            <img src={project.image} alt="" loading="lazy" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tag-row">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
