import { useEffect, useState } from 'react'
import { images } from '../../assets/images/images'
import Button from '../Button/Button'
import './ProductModal.scss'

type ProductModalProps = {
  isOpen: boolean
  onClose: () => void
}

export default function ProductModal({ isOpen, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen])

  if (!isOpen) {
    return null
  }

  function decreaseQuantity() {
    setQuantity((currentQuantity) => Math.max(1, currentQuantity - 1))
  }

  function increaseQuantity() {
    setQuantity((currentQuantity) => currentQuantity + 1)
  }

  return (
    <div
      className="product-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
      <div className="product-modal__overlay" onClick={onClose} />

      <div className="product-modal__content">
        <button
          type="button"
          className="product-modal__close"
          aria-label="Fechar modal"
          onClick={onClose}
        >
          ×
        </button>

        <div className="product-modal__image-wrap">
          <img
            src={images.iphoneModal}
            alt="Iphone"
            className="product-modal__image"
          />
        </div>

        <div className="product-modal__info">
          <h2 id="product-modal-title" className="product-modal__title">
            LOREM IPSUM DOLOR SIT AMET
          </h2>

          <strong className="product-modal__price">R$ 1.499,90</strong>

          <p className="product-modal__description">
            Many desktop publishing packages and web page editors now many desktop publishing
          </p>

          <a href="#" className="product-modal__details">
            Veja mais detalhes do produto &gt;
          </a>

          <div className="product-modal__actions">
            <div className="product-modal__quantity" aria-label="Quantidade">
              <button
                type="button"
                className="product-modal__quantity-btn product-modal__quantity-btn--minus"
                aria-label="Diminuir quantidade"
                onClick={decreaseQuantity}
              >
                −
              </button>

              <span className="product-modal__quantity-number">
                {String(quantity).padStart(2, '0')}
              </span>

              <button
                type="button"
                className="product-modal__quantity-btn product-modal__quantity-btn--plus"
                aria-label="Aumentar quantidade"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>

            <Button className="product-modal__button">COMPRAR</Button>
          </div>
        </div>
      </div>
    </div>
  )
}