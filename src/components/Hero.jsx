import { Link } from 'react-router-dom'

export function Hero({ profile, stats }) {
  return (
    <section className="hero section" id="top">
      <div className="hero-intro">
        <div className="hero-content reveal">
          <h1 className="hero-title">
            Oi, eu sou {profile.name}, um{' '}
            <span>{profile.role.toLowerCase()}</span> com paixao por interfaces
            modernas.
          </h1>

          <div className="hero-details" aria-label="Resumo profissional">
            {profile.heroDetails.map((detail) => (
              <HeroDetail detail={detail} key={detail.text} />
            ))}
          </div>

          <div className="hero-actions">
            <a className="button ghost" href={profile.secondaryAction.href}>
              {profile.secondaryAction.label}
            </a>
          </div>
        </div>

      </div>

      <div className="stats-grid reveal">
        {stats.map((stat) => (
          <article className="stat-card" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

function HeroDetail({ detail }) {
  if (detail.company) {
    return (
      <p className="hero-detail-line">
        {detail.text}{' '}
        <a href={detail.company.href} rel="noreferrer" target="_blank">
          {detail.company.label}
          <span aria-hidden="true">{'\u2197'}</span>
        </a>
      </p>
    )
  }

  return (
    <Link to={detail.href}>
      {detail.text}
      <span aria-hidden="true">{'\u2197'}</span>
    </Link>
  )
}
