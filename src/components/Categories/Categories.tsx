import { useState } from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { images } from '../../assets/images/images'
import './Categories.scss'

type CategoryItem = {
  icon: string
  label: string
}

const categoryItems: CategoryItem[] = [
  { icon: images.tecnologia, label: 'Tecnologia' },
  { icon: images.supermercados, label: 'Supermercado' },
  { icon: images.whiskey, label: 'Bebidas' },
  { icon: images.ferramentas, label: 'Ferramentas' },
  { icon: images.cuidadosDeSaude, label: 'Saúde' },
  { icon: images.corrida, label: 'Esportes e Fitness' },
  { icon: images.moda, label: 'Moda' },
]

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState('Tecnologia')

  return (
    <section className="categories" aria-label="Categorias em destaque">
      <div className="container">
        <div className="categories__desktop">
          <ul className="categories__list">
            {categoryItems.map(({ icon, label }) => {
              const isActive = activeCategory === label

              return (
                <li key={label} className="categories__item">
                  <button
                    type="button"
                    className={`categories__card ${
                      isActive ? 'categories__card--active' : ''
                    }`}
                    aria-label={label}
                    aria-pressed={isActive}
                    onClick={() => setActiveCategory(label)}
                  >
                    <img
                      src={icon}
                      alt=""
                      aria-hidden="true"
                      className="categories__icon"
                    />
                  </button>

                  <span
                    className={`categories__label ${
                      isActive ? 'categories__label--active' : ''
                    }`}
                  >
                    {label}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="categories__mobile">
          <Swiper
            modules={[Pagination]}
            spaceBetween={14}
            slidesPerView="auto"
            grabCursor
            pagination={{ clickable: true }}
          >
            {categoryItems.map(({ icon, label }) => {
              const isActive = activeCategory === label

              return (
                <SwiperSlide key={label} className="categories__slide">
                  <div className="categories__item">
                    <button
                      type="button"
                      className={`categories__card ${
                        isActive ? 'categories__card--active' : ''
                      }`}
                      aria-label={label}
                      aria-pressed={isActive}
                      onClick={() => setActiveCategory(label)}
                    >
                      <img
                        src={icon}
                        alt=""
                        aria-hidden="true"
                        className="categories__icon"
                      />
                    </button>

                    <span
                      className={`categories__label ${
                        isActive ? 'categories__label--active' : ''
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}