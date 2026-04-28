import { useEffect, useState } from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { images } from '../../assets/images/images'
import { getProducts } from '../../services/productsService'
import type { Product } from '../../types/product'

import ProductCard from '../ProductCard/ProductCard'
import ProductModal from '../ProductModal/ProductModal'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './ProductCarousel.scss'
import { formatCurrency } from '../../utils/formatCurrency'

export default function ProductCarousel() {
  const [products, setProducts] = useState<Product[]>([])
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    async function loadProducts() {
      try {
        const productsData = await getProducts()
        setProducts(productsData)
      } catch {
        setErrorMessage('Não foi possível carregar os produtos.')
      } finally {
        setIsLoading(false)
      }
    }

    loadProducts()
  }, [])

  if (isLoading) {
    return (
      <section className="product-carousel" aria-label="Lista de produtos">
        <div className="container">
          <p className="product-carousel__feedback">Carregando produtos...</p>
        </div>
      </section>
    )
  }

  if (errorMessage) {
    return (
      <section className="product-carousel" aria-label="Lista de produtos">
        <div className="container">
          <p className="product-carousel__feedback">{errorMessage}</p>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="product-carousel" aria-label="Lista de produtos">
        <div className="container">
          <div className="product-carousel__wrapper">
            <button
              className="product-carousel__nav product-carousel__nav--prev"
              type="button"
              aria-label="Produto anterior"
            >
              <img src={images.setaEsquerda} alt="" aria-hidden="true" />
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
              {products.map((product) => (
                <SwiperSlide key={product.productName}>
                  <ProductCard
                    image={product.photo}
                    productName={product.productName}
                    description={product.descriptionShort}
                    oldPrice={formatCurrency(product.price + 200)}
                    price={formatCurrency(product.price)}
                    installment="ou 2x de R$ 49,95 sem juros"
                    shipping="Frete grátis"
                    onBuy={() => setSelectedProduct(product)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              className="product-carousel__nav product-carousel__nav--next"
              type="button"
              aria-label="Próximo produto"
            >
              <img src={images.setaDireita} alt="" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      <ProductModal 
        isOpen={selectedProduct !== null}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  )
}