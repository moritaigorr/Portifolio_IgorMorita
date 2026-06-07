import { TextPressure } from './TextPressure.jsx'

export function Hero({ profile, stats }) {
  return (
    <section className="hero section" id="top">
      <div className="hero-intro">
        <div className="hero-content reveal">
          <h1 className="hero-title">
            <TextPressure
              alpha={false}
              className="hero-title-pressure"
              flex
              italic
              minFontSize={36}
              stroke={false}
              strokeColor="#5227ff"
              text={profile.name}
              textColor="currentColor"
              weight
              width
            />
          </h1>
          <p className="hero-subtitle">{renderHeroSubtitle(profile.heroSubtitle)}</p>
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

function renderHeroSubtitle(subtitle) {
  const match = subtitle.match(/Evertec (Brasil|Brazil)/i)

  if (!match) {
    return subtitle
  }

  const start = match.index
  const end = start + match[0].length

  return (
    <>
      {subtitle.slice(0, start)}
      <a
        className="hero-subtitle-accent"
        href="https://evertecinc.com/en/"
        rel="noreferrer"
        target="_blank"
      >
        {subtitle.slice(start, end)}
      </a>
      {subtitle.slice(end)}
    </>
  )
}
