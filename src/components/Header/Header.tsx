import { images } from '../../assets/images/images'
import './Header.scss'

type TopbarItem = {
  icon: string
  before?: string
  highlight: string
  after?: string
}

const topbarItems: TopbarItem[] = [
  {
    icon: images.shieldCheck,
    before: 'Compra',
    highlight: '100% segura',
  },
  {
    icon: images.truck,
    highlight: 'Frete grátis',
    after: 'acima de R$ 200',
  },
  {
    icon: images.creditCard,
    highlight: 'Parcele',
    after: 'suas compras',
  },
]

const actionItems = [
  { icon: images.logout, label: 'Entrar ou sair' },
  { icon: images.heart, label: 'Favoritos' },
  { icon: images.userCircle, label: 'Minha conta' },
  { icon: images.shoppingCart, label: 'Carrinho de compras' },
]

const menuItems = [
  { label: 'TODAS CATEGORIAS' },
  { label: 'SUPERMERCADO' },
  { label: 'LIVROS' },
  { label: 'MODA' },
  { label: 'LANÇAMENTOS' },
  { label: 'OFERTAS DO DIA', active: true },
  { label: 'ASSINATURA', icon: images.crownSimple },
]

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__topbar">
          <ul className="header__topbar-list" aria-label="Benefícios da loja">
            {topbarItems.map(({ icon, before, highlight, after }) => (
              <li key={highlight} className="header__topbar-item">
                <img
                  src={icon}
                  alt=""
                  className="header__topbar-icon"
                  aria-hidden="true"
                />

                <span className="header__topbar-text">
                  {before && <span className="header__topbar-muted">{before}</span>}
                  <span className="header__topbar-highlight">{highlight}</span>
                  {after && <span className="header__topbar-muted">{after}</span>}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="header__main">
          <a href="/" className="header__logo" aria-label="Econverse - Página inicial">
            <img
              src={images.logoEconverse}
              alt="Econverse"
              className="header__logo-img"
            />
          </a>

          <form className="header__search" role="search">
            <input
              type="search"
              className="header__search-input"
              placeholder="O que você está buscando?"
              aria-label="Buscar produtos"
            />

            <button type="submit" className="header__search-btn" aria-label="Buscar">
              <svg
                className="header__search-icon"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <circle cx="12.5" cy="12.5" r="8.5" stroke="#9F9F9F" strokeWidth="2" />
                <path
                  d="M19 19L25 25"
                  stroke="#9F9F9F"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </form>

          <nav className="header__actions" aria-label="Ações do usuário">
            {actionItems.map(({ icon, label }) => (
              <button key={label} className="header__action-btn" type="button" aria-label={label}>
                <img src={icon} alt="" aria-hidden="true" />
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="container">
        <nav className="header__menu" aria-label="Categorias">
          <ul className="header__menu-list">
            {menuItems.map(({ label, icon, active }) => (
              <li key={label} className="header__menu-item">
                <a
                  href="#"
                  className={[
                    'header__menu-link',
                    active ? 'header__menu-link--active' : '',
                    icon ? 'header__menu-link--crown' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  {icon && (
                    <img
                      src={icon}
                      alt=""
                      aria-hidden="true"
                      className="header__menu-crown"
                    />
                  )}

                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}