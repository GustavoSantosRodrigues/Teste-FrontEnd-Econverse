import Button from '../Button/Button'
import './ProductCard.scss'

type ProductCardProps = {
  image: string
  title: string
  oldPrice: string
  price: string
  installment: string
  shipping: string
}

export default function ProductCard({
  image,
  title,
  oldPrice,
  price,
  installment,
  shipping,
}: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        <img src={image} alt={title} className="product-card__image" />
      </div>

      <div className="product-card__content">
        <p className="product-card__description">{title}</p>

        <span className="product-card__old-price">{oldPrice}</span>

        <strong className="product-card__price">{price}</strong>

        <p className="product-card__installment">{installment}</p>

        <span className="product-card__shipping">{shipping}</span>

        <Button className="product-card__button product-card__button--primary">
          COMPRAR
        </Button>
      </div>
    </article>
  )
}