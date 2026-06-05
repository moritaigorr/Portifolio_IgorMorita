import { Link, useParams } from 'react-router-dom'

export function ProjectPage({ projects }) {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <section className="section project-detail">
        <Link className="back-link" to="/#projetos">
          <svg
            className="back-arrow-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M8.2 7.4H3.8V3" />
            <path d="M4.2 7.4a8 8 0 1 1-1 6.1" />
          </svg>
          <span className="sr-only">Voltar para projetos</span>
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
        <svg
          className="back-arrow-icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M8.2 7.4H3.8V3" />
          <path d="M4.2 7.4a8 8 0 1 1-1 6.1" />
        </svg>
        <span className="sr-only">Voltar para projetos</span>
      </Link>

      <article className="project-detail-panel reveal">
        <div className="project-detail-media">
          <img
            className="project-detail-image"
            src={project.image}
            alt=""
          />
        </div>

        <div className="project-detail-content">
          <div>
            <p className="eyebrow">Projeto</p>
            <h1>{project.title}</h1>
            <p className="project-detail-description">{project.description}</p>
          </div>

          <div className="project-overview">
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
        </div>
      </article>

      <div className="project-text-grid">
        <div className="project-story reveal">
          <span className="project-detail-label">Storytelling</span>
          <p>{project.story}</p>
        </div>

        <div className="project-thinking reveal">
          <span className="project-detail-label">Linha de pensamento</span>
          <p>{project.thinking}</p>
        </div>
      </div>

      {project.gallery?.length > 0 && (
        <div className="project-gallery reveal">
          <span className="project-detail-label">Mais imagens</span>
          <div className="project-gallery-grid">
            {project.gallery.map((item) => {
              const image = typeof item === 'string' ? item : item.image
              const caption = typeof item === 'string' ? '' : item.caption

              return (
                <figure className="project-feature" key={image}>
                  <img
                    src={image}
                    alt=""
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.onerror = null
                      event.currentTarget.src = project.image
                    }}
                  />
                  {caption && <figcaption>{caption}</figcaption>}
                </figure>
              )
            })}
          </div>
        </div>
      )}
    </section>
  )
}
