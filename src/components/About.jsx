export function About({ about }) {
  return (
    <section className="section split-section" id="sobre">
      <div className="section-heading reveal">
        <p className="eyebrow">{about.eyebrow}</p>
        <h2>{about.title}</h2>
      </div>

      <div className="about-panel reveal">
        <p>{about.description}</p>
        <div className="about-list">
          {about.cards.map((card) => (
            <span key={card}>{card}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
