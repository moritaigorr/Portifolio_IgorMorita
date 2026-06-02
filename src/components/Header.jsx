import { Link, NavLink } from 'react-router-dom'

export function Header({ contact, navigation }) {
  const resumeLink = contact.links.find((link) => link.label === 'Curriculo')

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Ir para o inicio">
        Igor Morita
      </Link>

      <nav className="nav-links" aria-label="Navegacao principal">
        {navigation.map((item) => (
          <NavLink to={item.href} key={item.href}>
            {item.label}
          </NavLink>
        ))}
        {resumeLink ? (
          <a
            href={resumeLink.href}
            className="resume-link"
            rel="noreferrer"
            target="_blank"
          >
            {resumeLink.label}
          </a>
        ) : null}
      </nav>
    </header>
  )
}
