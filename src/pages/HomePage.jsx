import { Hero } from '../components/Hero.jsx'
import { Projects } from '../components/Projects.jsx'

export function HomePage({ profile, projects, stats, ui }) {
  return (
    <>
      <Hero profile={profile} stats={stats} />
      <Projects projects={projects} ui={ui} />
    </>
  )
}
