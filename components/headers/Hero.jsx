/* Her Component */

export default function Hero({ hero }) {
    return (
        <section id="headers" className={hero.background + " hero"}>
            <div className="hero-content">
                <h1>{hero.title}</h1>
            </div>
        </section>
    )
}