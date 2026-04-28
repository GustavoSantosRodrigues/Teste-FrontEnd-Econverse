import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { images } from '../../assets/images/images'
import './Categories.scss'

type CategoryItem = {
    icon: string
    label: string
    active?: boolean
}

const categoryItems: CategoryItem[] = [
    { icon: images.tecnologia, label: 'Tecnologia', active: true },
    { icon: images.supermercados, label: 'Supermercado' },
    { icon: images.whiskey, label: 'Bebidas' },
    { icon: images.ferramentas, label: 'Ferramentas' },
    { icon: images.cuidadosDeSaude, label: 'Saúde' },
    { icon: images.corrida, label: 'Esportes e Fitness' },
    { icon: images.moda, label: 'Moda' },
]

export default function Categories() {
    return (
        <section className="categories" aria-label="Categorias em destaque">
            <div className="container">

                <div className="categories__desktop">
                    <ul className="categories__list">
                        {categoryItems.map(({ icon, label, active }) => (
                            <li key={label} className="categories__item">
                                <button
                                    type="button"
                                    className={`categories__card ${active ? 'categories__card--active' : ''}`}
                                    aria-label={label}
                                >
                                    <img src={icon} alt="" aria-hidden="true" className="categories__icon" />
                                </button>
                                <span className={`categories__label ${active ? 'categories__label--active' : ''}`}>
                                    {label}
                                </span>
                            </li>
                        ))}
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
                        {categoryItems.map(({ icon, label, active }) => (
                            <SwiperSlide key={label} className="categories__slide">
                                <div className="categories__item">
                                    <button
                                        type="button"
                                        className={`categories__card ${active ? 'categories__card--active' : ''}`}
                                        aria-label={label}
                                    >
                                        <img src={icon} alt="" aria-hidden="true" className="categories__icon" />
                                    </button>
                                    <span className={`categories__label ${active ? 'categories__label--active' : ''}`}>
                                        {label}
                                    </span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </section>
    )
}