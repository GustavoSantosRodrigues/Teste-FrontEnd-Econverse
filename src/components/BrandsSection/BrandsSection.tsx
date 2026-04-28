import { images } from '../../assets/images/images'
import './BrandsSection.scss'

type BrandItem = {
  name: string
  logo: string
}

const brandItems: BrandItem[] = [
  { name: 'Econverse', logo: images.logoEconverse },
  { name: 'Econverse', logo: images.logoEconverse },
  { name: 'Econverse', logo: images.logoEconverse },
  { name: 'Econverse', logo: images.logoEconverse },
  { name: 'Econverse', logo: images.logoEconverse },
]

export default function BrandsSection() {
  return (
    <section className="brands-section" aria-labelledby="brands-section-title">
      <div className="container">
        <h2 id="brands-section-title" className="brands-section__title">
          Navegue por marcas
        </h2>

        <ul className="brands-section__list">
          {brandItems.map(({ name, logo }, index) => (
            <li key={`${name}-${index}`} className="brands-section__list-item">
              <button
                type="button"
                className="brands-section__card"
                aria-label={`Ver produtos da marca ${name}`}
              >
                <img src={logo} alt={name} className="brands-section__logo" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}