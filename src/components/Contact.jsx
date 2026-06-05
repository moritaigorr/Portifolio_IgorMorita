export function Contact({ contact }) {
  const footerLinks = contact.links.filter((link) => link.label !== 'Curriculo')
  const emailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contact.email)}`

  return (
    <footer className="site-footer" id="contato">
      <div className="footer-inner reveal">
        <div>
          <p className="eyebrow">Contato</p>
        </div>

        <div className="footer-links" aria-label="Links de contato">
          <a className="email-link" href={emailHref} rel="noreferrer" target="_blank">
            {contact.email}
            <span aria-hidden="true">{'\u2197'}</span>
          </a>
          {footerLinks.map((link) => (
            <a href={link.href} key={link.label} rel="noreferrer" target="_blank">
              {link.label}
              <span aria-hidden="true">{'\u2197'}</span>
            </a>
          ))}
        </div>

        <small>Criado com amor @ 2026 Igor Morita Silva</small>
      </div>
    </footer>
  )
}
