import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoMorita from '../assets/logo-morita.png'

export function Header({ contact, locale, navigation, onLocaleChange, ui }) {
  const resumeLink = contact.links.find((link) => link.type === 'resume')

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label={locale === 'pt' ? 'Ir para o início' : 'Go to home'}>
        <span className="brand-logo-stage" aria-hidden="true">
          <img className="brand-logo brand-logo-depth brand-logo-depth-3" src={logoMorita} alt="" />
          <img className="brand-logo brand-logo-depth brand-logo-depth-2" src={logoMorita} alt="" />
          <img className="brand-logo brand-logo-depth brand-logo-depth-1" src={logoMorita} alt="" />
          <img className="brand-logo brand-logo-face" src={logoMorita} alt="" />
        </span>
      </Link>

      <div className="header-actions">
        <nav
          className="nav-links"
          aria-label={locale === 'pt' ? 'Navegação principal' : 'Main navigation'}
        >
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

        <LanguageToggle locale={locale} onLocaleChange={onLocaleChange} ui={ui} />
        <ThemeToggle />
      </div>
    </header>
  )
}

function LanguageToggle({ locale, onLocaleChange, ui }) {
  const isPortuguese = locale === 'pt'

  return (
    <button
      className="language-toggle"
      type="button"
      aria-label={`${ui.localeLabel}: ${isPortuguese ? 'pt-BR' : 'en-US'}`}
      onClick={() => onLocaleChange(isPortuguese ? 'en' : 'pt')}
    >
      <span className={isPortuguese ? 'active' : ''}>PT</span>
      <span className={isPortuguese ? '' : 'active'}>EN</span>
    </button>
  )
}

function ThemeToggle() {
  const [theme, setTheme] = useState(() => getInitialTheme())
  const isDark = theme === 'dark'

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const syncSystemTheme = (event) => {
      if (!window.localStorage.getItem('theme')) {
        setTheme(event.matches ? 'dark' : 'light')
      }
    }

    mediaQuery.addEventListener('change', syncSystemTheme)

    return () => {
      mediaQuery.removeEventListener('change', syncSystemTheme)
    }
  }, [])

  const toggleTheme = () => {
    const nextTheme = isDark ? 'light' : 'dark'

    setTheme(nextTheme)
    window.localStorage.setItem('theme', nextTheme)
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
      aria-pressed={isDark}
      onClick={toggleTheme}
    >
      <span className="theme-toggle-track" aria-hidden="true">
        <span className="theme-toggle-orb theme-toggle-orb-primary">
          {isDark ? <MoonIcon /> : <SunIcon />}
        </span>

        <span className="theme-toggle-orb theme-toggle-orb-secondary">
          {isDark ? <SunIcon /> : <MoonIcon />}
        </span>
      </span>
    </button>
  )
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.9 4.9 1.4 1.4" />
      <path d="m17.7 17.7 1.4 1.4" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m4.9 19.1 1.4-1.4" />
      <path d="m17.7 6.3 1.4-1.4" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M20.4 14.5A7.7 7.7 0 0 1 9.5 3.6 8.8 8.8 0 1 0 20.4 14.5Z" />
    </svg>
  )
}

function getInitialTheme() {
  if (typeof window === 'undefined') {
    return 'light'
  }

  const savedTheme = window.localStorage.getItem('theme')

  if (savedTheme === 'dark' || savedTheme === 'light') {
    return savedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}
