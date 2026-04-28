import { images } from '../../assets/images/images'
import Button from '../Button/Button'
import './Hero.scss'

export default function Hero() {
    return (
        <section className="hero" aria-label="Promoção Black Friday">
            <img
                src={images.bannerBlackFriday}
                alt=""
                className="hero__image"
                aria-hidden="true"
            />

            <div className="container hero__container">
                <div className="hero__content">
                    <h1 className="hero__title">
                        Venha conhecer nossas
                        <br />
                        promoções
                    </h1>

                    <p className="hero__description">
                        <strong>50% Off</strong> nos produtos
                    </p>

                    <Button className="hero__button">Ver produto</Button>
                </div>
            </div>
        </section>
    )
}