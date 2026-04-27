import ProductCarousel from '../ProductCarousel/ProductCarousel'
import './ProductSection.scss'

type ProductSectionProps = {
  showTabs?: boolean
  showViewAll?: boolean
}

const tabs = ['CELULAR', 'ACESSÓRIOS', 'TABLETS', 'NOTEBOOKS', 'TVS', 'VER TODOS']

export default function ProductSection({
  showTabs = true,
  showViewAll = false,
}: ProductSectionProps) {
  return (
    <section className="product-section" aria-labelledby="product-section-title">
      <div className="container">
        <div className="product-section__heading">
          <span className="product-section__line" aria-hidden="true" />

          <h2 id="product-section-title" className="product-section__title">
            Produtos relacionados
          </h2>

          <span className="product-section__line" aria-hidden="true" />
        </div>

        {showViewAll && (
          <a href="#" className="product-section__view-all">
            Ver todos
          </a>
        )}

        {showTabs && (
          <nav className="product-section__tabs" aria-label="Categorias de produtos">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                type="button"
                className={`product-section__tab ${
                  index === 0 ? 'product-section__tab--active' : ''
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        )}
      </div>

      <ProductCarousel />
    </section>
  )
}