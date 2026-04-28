import { images } from '../../assets/images/images'
import Button from '../Button/Button'
import './PartnersBanner.scss'

const banners = [
    {
        title: 'Parceiros',
        description: 'Lorem ipsum dolor sit amet, consectetur',
        buttonText: 'CONFIRA',
        image: images.bannerParceiros,
    },
    {
        title: 'Parceiros',
        description: 'Lorem ipsum dolor sit amet, consectetur',
        buttonText: 'CONFIRA',
        image: images.bannerParceiros,
    },
]

export default function PartnersBanner() {
    return (
        <section className="partners-banner">
            <div className="container">
                <div className="partners-banner__grid">
                    {banners.map(({ title, description, buttonText, image }, index) => (
                        <article key={index} className="partners-banner__card">
                            <img
                                src={image}
                                alt={title}
                                className="partners-banner__image"
                            />

                            <div className="partners-banner__content">
                                <h2 className="partners-banner__title">{title}</h2>

                                <p className="partners-banner__description">
                                    {description}
                                </p>
                                
                                <Button className="partners-banner__button">{buttonText}</Button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}