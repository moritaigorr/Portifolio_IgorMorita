import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { portfolio } from './data/portfolio.js'
import { Contact } from './components/Contact.jsx'
import { Header } from './components/Header.jsx'
import { AboutPage } from './pages/AboutPage.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { ProjectPage } from './pages/ProjectPage.jsx'

export default function App() {
  useSmoothScroll()
  useScrollToTop()

  return (
    <div className="app-shell">
      <Header contact={portfolio.contact} navigation={portfolio.navigation} />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                profile={portfolio.profile}
                projects={portfolio.projects}
                stats={portfolio.stats}
              />
            }
          />
          <Route path="/sobre" element={<AboutPage about={portfolio.about} />} />
          <Route
            path="/projetos/:slug"
            element={<ProjectPage projects={portfolio.projects} />}
          />
        </Routes>
      </main>
      <Contact profile={portfolio.profile} contact={portfolio.contact} />
    </div>
  )
}

function useScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
}

function useSmoothScroll() {
  useEffect(() => {
    const getMaxScroll = () =>
      document.documentElement.scrollHeight - window.innerHeight

    const easeInOutCubic = (progress) =>
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2

    const smoothScrollTo = (targetPosition, duration = 850) => {
      const startPosition = window.scrollY
      const safeTarget = Math.max(0, Math.min(targetPosition, getMaxScroll()))
      const distance = safeTarget - startPosition
      let startTime = null

      const animateScroll = (currentTime) => {
        if (!startTime) {
          startTime = currentTime
        }

        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const easedProgress = easeInOutCubic(progress)

        window.scrollTo(0, startPosition + distance * easedProgress)

        if (progress < 1) {
          window.requestAnimationFrame(animateScroll)
        }
      }

      window.requestAnimationFrame(animateScroll)
    }

    let wheelTarget = window.scrollY
    let wheelAnimation = null

    const animateWheelScroll = () => {
      const distance = wheelTarget - window.scrollY

      if (Math.abs(distance) < 0.5) {
        window.scrollTo(0, wheelTarget)
        wheelAnimation = null
        return
      }

      window.scrollTo(0, window.scrollY + distance * 0.12)
      wheelAnimation = window.requestAnimationFrame(animateWheelScroll)
    }

    const handleWheel = (event) => {
      if (event.ctrlKey) {
        return
      }

      event.preventDefault()

      wheelTarget = Math.max(
        0,
        Math.min(wheelTarget + event.deltaY, getMaxScroll()),
      )

      if (!wheelAnimation) {
        wheelAnimation = window.requestAnimationFrame(animateWheelScroll)
      }
    }

    const handleAnchorClick = (event) => {
      const link = event.target.closest('a[href^="#"]')

      if (!link) {
        return
      }

      const targetId = link.getAttribute('href')
      const targetElement = document.querySelector(targetId)

      if (!targetElement) {
        return
      }

      event.preventDefault()

      const headerOffset = 88
      const targetPosition =
        targetId === '#top'
          ? 0
          : targetElement.getBoundingClientRect().top +
            window.scrollY -
            headerOffset

      wheelTarget = Math.max(targetPosition, 0)
      smoothScrollTo(wheelTarget, 1000)
      window.history.pushState(null, '', targetId)
    }

    document.addEventListener('click', handleAnchorClick)
    window.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      window.removeEventListener('wheel', handleWheel)

      if (wheelAnimation) {
        window.cancelAnimationFrame(wheelAnimation)
      }
    }
  }, [])
}
