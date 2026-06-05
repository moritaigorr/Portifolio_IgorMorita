import { Link, useParams } from 'react-router-dom'

export function ProjectPage({ projects }) {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <section className="section project-detail">
        <Link className="back-link" to="/#projetos">
          Voltar para projetos
        </Link>
        <div className="section-heading narrow reveal">
          <p className="eyebrow">Projeto</p>
          <h2>Projeto nao encontrado.</h2>
        </div>
      </section>
    )
  }

  return (
    <section className="section project-detail">
      <Link className="back-link" to="/#projetos">
        Voltar para projetos
      </Link>

      <div className="project-overview reveal">
        <div className="project-main-idea">
          <span className="project-detail-label">Ideia principal</span>
          <p>{project.mainIdea}</p>
        </div>

        <div className="project-tech-panel">
          <span className="project-detail-label">Tecnologias</span>
          <div className="tag-row">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="project-story reveal">
        <span className="project-detail-label">Storytelling</span>
        <p>{project.story}</p>
      </div>

      <div className="project-thinking reveal">
        <span className="project-detail-label">Linha de pensamento</span>
        <p>{project.thinking}</p>
      </div>

      {project.gallery?.length > 0 && (
        <div className="project-gallery reveal">
          <span className="project-detail-label">Mais imagens</span>
          <div className="project-gallery-grid">
            {project.gallery.map((image) => (
              <img
                src={image}
                alt=""
                key={image}
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.onerror = null
                  event.currentTarget.src = project.image
                }}
              />
            ))}
          </div>
        </div>
      )}

    </section>
  )
}
