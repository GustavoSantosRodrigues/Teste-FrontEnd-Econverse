import { useEffect, useState } from 'react'
import { images } from '../../assets/images/images'
import type { Product } from '../../types/product'
import Button from '../Button/Button'
import './ProductModal.scss'
import { formatCurrency } from '../../utils/formatCurrency'

type ProductModalProps = {
  isOpen: boolean
  onClose: () => void
  product?: Product | null
}

export default function ProductModal({
  isOpen,
  onClose,
  product = null,
}: ProductModalProps) {
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

  function handleClose() {
    setQuantity(1)
    onClose()
  }

  function decreaseQuantity() {
    setQuantity((currentQuantity) => Math.max(1, currentQuantity - 1))
  }

  function increaseQuantity() {
    setQuantity((currentQuantity) => currentQuantity + 1)
  }

  const productImage = product?.photo ?? images.iphoneModal
  const productName = product?.productName ?? 'LOREM IPSUM DOLOR SIT AMET'
  const productPrice = product ? formatCurrency(product.price) : 'R$ 1.499,90'
  const productDescription =
    product?.descriptionShort ??
    'Many desktop publishing packages and web page editors now many desktop publishing'

  return (
    <div
      className="product-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
      <div className="product-modal__overlay" onClick={handleClose} />

      <div className="product-modal__content">
        <button
          type="button"
          className="product-modal__close"
          aria-label="Fechar modal"
          onClick={handleClose}
        >
          ×
        </button>

        <div className="product-modal__image-wrap">
          <img
            src={productImage}
            alt={productName}
            className="product-modal__image"
          />
        </div>

        <div className="product-modal__info">
          <h2 id="product-modal-title" className="product-modal__title">
            {productName}
          </h2>

          <strong className="product-modal__price">{productPrice}</strong>

          <p className="product-modal__description">{productDescription}</p>

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