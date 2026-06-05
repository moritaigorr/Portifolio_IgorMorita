import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

export function Hero({ profile, stats }) {
  const typedTitle = useTypedHeroTitle(profile)

  return (
    <section className="hero section" id="top">
      <div className="hero-intro">
        <div className="hero-content reveal">
          <h1 className="hero-title" aria-label={typedTitle.fullText}>
            <span aria-hidden="true">
              {typedTitle.prefix}
              {typedTitle.role && (
                <span className="hero-title-accent">{typedTitle.role}</span>
              )}
              {typedTitle.suffix}
              <span className="typing-cursor" aria-hidden="true" />
            </span>
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

      {stats.length > 0 && (
        <div className="stats-grid reveal">
          {stats.map((stat) => (
            <article className="stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

function useTypedHeroTitle(profile) {
  const role = profile.role.toLowerCase()
  const titleParts = useMemo(
    () => ({
      prefix: `Oi, eu sou ${profile.name}, um `,
      role,
      suffix: ' Engenheiro IA e solucionador de problemas.',
    }),
    [profile.name, role],
  )
  const fullText = `${titleParts.prefix}${titleParts.role}${titleParts.suffix}`
  const [visibleLength, setVisibleLength] = useState(0)

  useEffect(() => {
    let timeoutId

    const typeTitle = (nextLength = 0) => {
      setVisibleLength(nextLength)

      if (nextLength >= fullText.length) {
        return
      }

      timeoutId = window.setTimeout(() => {
        typeTitle(nextLength + 1)
      }, 42)
    }

    typeTitle()

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [fullText])

  return {
    fullText,
    prefix: fullText.slice(0, Math.min(visibleLength, titleParts.prefix.length)),
    role: fullText.slice(
      titleParts.prefix.length,
      Math.min(visibleLength, titleParts.prefix.length + titleParts.role.length),
    ),
    suffix: fullText.slice(
      titleParts.prefix.length + titleParts.role.length,
      visibleLength,
    ),
  }
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
