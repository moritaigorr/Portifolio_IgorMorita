import { useEffect, useState } from 'react'

export function Contact({ profile, contact }) {
  const [formStatus, setFormStatus] = useState('')
  const footerLinks = contact.links.filter((link) => link.label !== 'Curriculo')

  useEffect(() => {
    if (!formStatus) {
      return undefined
    }

    const timeoutId = window.setTimeout(() => {
      setFormStatus('')
    }, 10000)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [formStatus])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setFormStatus('Enviando...')

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contact.email}`, {
        body: formData,
        headers: {
          Accept: 'application/json',
        },
        method: 'POST',
      })

      if (!response.ok) {
        throw new Error('Falha no envio')
      }

      form.reset()
      setFormStatus('Mensagem enviada com sucesso.')
    } catch {
      setFormStatus(
        'Nao foi possivel enviar agora. Use o email acima ou tente novamente.',
      )
    }
  }

  return (
    <footer className="site-footer" id="contato">
      <div className="footer-inner reveal">
        <div>
          <p className="eyebrow">Contato</p>
        </div>

        <div className="footer-links" aria-label="Links de contato">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          {footerLinks.map((link) => (
            <a href={link.href} key={link.label} rel="noreferrer" target="_blank">
              {link.label}
            </a>
          ))}
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input name="_subject" type="hidden" value="Novo contato pelo portfolio" />
          <input name="_captcha" type="hidden" value="false" />

          <label>
            Nome
            <input name="name" placeholder="Seu nome" required type="text" />
          </label>

          <label>
            Email
            <input name="email" placeholder="seuemail@exemplo.com" required type="email" />
          </label>

          <label>
            Mensagem
            <textarea name="message" placeholder="Escreva sua mensagem" required rows="4" />
          </label>

          <button type="submit">Enviar mensagem</button>
          {formStatus ? <p className="form-status">{formStatus}</p> : null}
        </form>

        <small>Criado com amor @ 2026 Igor Morita Silva</small>
      </div>
    </footer>
  )
}
