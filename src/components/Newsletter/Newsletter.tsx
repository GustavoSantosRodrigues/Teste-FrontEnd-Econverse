import Button from '../Button/Button'
import './Newsletter.scss'

export default function Newsletter() {
    return (
        <section className="newsletter" aria-labelledby="newsletter-title">
            <div className="container newsletter__container">
                <div className="newsletter__content">
                    <h2 id="newsletter-title" className="newsletter__title">
                        Inscreva-se na nossa newsletter
                    </h2>

                    <p className="newsletter__description">
                        Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
                    </p>
                </div>

                <form className="newsletter__form">
                    <div className="newsletter__fields">
                        <input
                            type="text"
                            name="name"
                            placeholder="Digite seu nome"
                            className="newsletter__input"
                            aria-label="Digite seu nome"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Digite seu e-mail"
                            className="newsletter__input"
                            aria-label="Digite seu e-mail"
                        />

                        <Button type="submit" className="newsletter__button">
                            INSCREVER
                        </Button>
                    </div>

                    <label className="newsletter__terms">
                        <input type="checkbox" className="newsletter__checkbox" />
                        <span>Aceito os termos e condições</span>
                    </label>
                </form>
            </div>
        </section>
    )
}