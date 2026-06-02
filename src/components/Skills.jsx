export function Skills({ skills }) {
  return (
    <section className="section" id="skills">
      <div className="section-heading narrow reveal">
        <p className="eyebrow">Skills</p>
        <h2>Tecnologias e competencias que uso para construir.</h2>
      </div>

      <div className="skills-grid reveal">
        {skills.map((skill) => (
          <span className="skill-chip" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
