import { Link } from 'react-router-dom'
import { BorderGlow } from './BorderGlow.jsx'

export function Projects({ projects, ui }) {
  return (
    <section className="section" id="projetos">
      <div className="projects-grid">
        {projects.map((project) => (
          <BorderGlow
            animated={false}
            backgroundColor="transparent"
            borderRadius={8}
            className="project-card-glow reveal"
            colors={['#0b0b0d', '#3b3f46', '#f5f7fa']}
            coneSpread={25}
            edgeSensitivity={190}
            glowColor="20 20 23"
            glowIntensity={1.15}
            glowRadius={54}
            key={project.title}
          >
            <Link
              className="project-card"
              to={`/projetos/${project.slug}`}
              aria-label={`${ui.openProject} ${project.title}`}
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
          </BorderGlow>
        ))}
      </div>
    </section>
  )
}
