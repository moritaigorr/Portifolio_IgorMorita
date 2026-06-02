import { Hero } from '../components/Hero.jsx'
import { Projects } from '../components/Projects.jsx'

export function HomePage({ profile, projects, stats }) {
  return (
    <>
      <Hero profile={profile} stats={stats} />
      <Projects projects={projects} />
    </>
  )
}
