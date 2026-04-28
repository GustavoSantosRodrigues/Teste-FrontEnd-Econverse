import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

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

        <ul className="brands-section__list brands-section__list--desktop">
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

        <div className="brands-section__mobile">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            slidesPerView={2}
            spaceBetween={18}
            breakpoints={{
              0: {
                slidesPerView: 1.4,
                spaceBetween: 16,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 18,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 22,
              },
            }}
          >
            {brandItems.map(({ name, logo }, index) => (
              <SwiperSlide key={`${name}-${index}`}>
                <button
                  type="button"
                  className="brands-section__card"
                  aria-label={`Ver produtos da marca ${name}`}
                >
                  <img src={logo} alt={name} className="brands-section__logo" />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}