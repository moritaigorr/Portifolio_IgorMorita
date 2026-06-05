export function Contact({ contact }) {
  const footerLinks = contact.links.filter((link) => link.label !== 'Curriculo')
  const resumeLink = contact.links.find((link) => link.label === 'Curriculo')
  const emailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contact.email)}`
  const navigationLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/sobre' },
    { label: 'Resume', href: resumeLink?.href || '#' },
  ]

  return (
    <footer className="site-footer" id="contato">
      <div className="footer-inner reveal">
        <div className="footer-copy">
          <h2>Estou feliz que voce chegou ate aqui.</h2>
          <p>Espero que meu portfolio tenha deixado um pouco de curiosidade e inspiracao.</p>
          <small>© Igor Morita Silva, 2026</small>
        </div>

        <div className="footer-columns">
          <div className="footer-column">
            <h3>Contact</h3>
            <a className="email-link" href={emailHref} rel="noreferrer" target="_blank">
              Email
            </a>
            {footerLinks.map((link) => (
              <a href={link.href} key={link.label} rel="noreferrer" target="_blank">
                {link.label}
              </a>
            ))}
          </div>

          <div className="footer-column">
            <h3>Navigation</h3>
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
