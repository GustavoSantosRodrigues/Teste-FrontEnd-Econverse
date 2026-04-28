import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { images } from '../../assets/images/images'
import ProductCard from '../ProductCard/ProductCard'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './ProductCarousel.scss'

const products = [
  {
    image: images.iphone,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    oldPrice: 'R$ 30,90',
    price: 'R$ 28,90',
    installment: 'ou 2x de R$ 49,95 sem juros',
    shipping: 'Frete grátis',
  },
  {
    image: images.iphone,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    oldPrice: 'R$ 30,90',
    price: 'R$ 28,90',
    installment: 'ou 2x de R$ 49,95 sem juros',
    shipping: 'Frete grátis',
  },
  {
    image: images.iphone,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    oldPrice: 'R$ 30,90',
    price: 'R$ 28,90',
    installment: 'ou 2x de R$ 49,95 sem juros',
    shipping: 'Frete grátis',
  },
  {
    image: images.iphone,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    oldPrice: 'R$ 30,90',
    price: 'R$ 28,90',
    installment: 'ou 2x de R$ 49,95 sem juros',
    shipping: 'Frete grátis',
  },
  {
    image: images.iphone,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    oldPrice: 'R$ 30,90',
    price: 'R$ 28,90',
    installment: 'ou 2x de R$ 49,95 sem juros',
    shipping: 'Frete grátis',
  },
]

export default function ProductCarousel() {
  return (
    <section className="product-carousel" aria-label="Lista de produtos">
      <div className="container">
        <div className="product-carousel__wrapper">
          <button
            className="product-carousel__nav product-carousel__nav--prev"
            type="button"
            aria-label="Produto anterior"
          >
            <img src={images.setaDireita} alt="" aria-hidden="true" />
          </button>

          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: '.product-carousel__nav--prev',
              nextEl: '.product-carousel__nav--next',
            }}
            pagination={{ clickable: true }}
            spaceBetween={22}
            slidesPerView={4}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 18,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 18,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 22,
              },
            }}
            className="product-carousel__swiper"
          >
            {products.map((product, index) => (
              <SwiperSlide key={`${product.title}-${index}`}>
                <ProductCard {...product} />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className="product-carousel__nav product-carousel__nav--next"
            type="button"
            aria-label="Próximo produto"
          >
            <img src={images.setaEsquerda} alt="" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}