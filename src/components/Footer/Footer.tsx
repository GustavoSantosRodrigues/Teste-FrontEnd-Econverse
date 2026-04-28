import { images } from '../../assets/images/images'
import './Footer.scss'

const institutionalLinks = ['Sobre Nós', 'Movimento', 'Trabalhe conosco']
const helpLinks = ['Suporte', 'Fale Conosco', 'Perguntas Frequentes']
const termsLinks = ['Termos e Condições', 'Política de Privacidade', 'Troca e Devolução']

const socialLinks = [
  { icon: images.instagram, label: 'Instagram' },
  { icon: images.facebook, label: 'Facebook' },
  { icon: images.linkedin, label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__brand">
          <img src={images.logoEconverse} alt="Econverse" className="footer__logo" />

          <p className="footer__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="footer__socials" aria-label="Redes sociais">
            {socialLinks.map(({ icon, label }) => (
              <a key={label} href="#" aria-label={label}>
                <img src={icon} alt="" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <span className="footer__divider" aria-hidden="true" />

        <nav className="footer__nav" aria-label="Links do rodapé">
          <div className="footer__column">
            <h3>Institucional</h3>

            <ul>
              {institutionalLinks.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column">
            <h3>Ajuda</h3>

            <ul>
              {helpLinks.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column">
            <h3>Termos</h3>

            <ul>
              {termsLinks.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      <div className="footer__bottom">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  )
}