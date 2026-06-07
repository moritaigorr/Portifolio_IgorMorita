export function Contact({ contact, ui }) {
  const footerLinks = contact.links.filter((link) => link.type !== 'resume')
  const resumeLink = contact.links.find((link) => link.type === 'resume')
  const emailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contact.email)}`
  const navigationLinks = [
    { label: ui.home, href: '/' },
    { label: ui.about, href: '/sobre' },
    { label: ui.resume, href: resumeLink?.href || '#' },
  ]

  return (
    <footer className="site-footer" id="contato">
      <div className="footer-inner reveal">
        <div className="footer-copy">
          <h2>{ui.footerTitle}</h2>
          <p>{ui.footerText}</p>
          <small>© Igor Morita Silva, 2026</small>
        </div>

        <div className="footer-columns">
          <div className="footer-column">
            <h3>{ui.contact}</h3>
            <a className="email-link" href={emailHref} rel="noreferrer" target="_blank">
              E-mail
            </a>
            {footerLinks.map((link) => (
              <a href={link.href} key={link.label} rel="noreferrer" target="_blank">
                {link.label}
              </a>
            ))}
          </div>

          <div className="footer-column">
            <h3>{ui.navigation}</h3>
            {navigationLinks.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
