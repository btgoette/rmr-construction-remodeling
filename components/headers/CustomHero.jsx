/* Her Component */

export default function CustomHero({ hero }) {
    return (
        <section id="headers" className={hero.background + " hero"}>
            <div className="hero-content">
                <h1 className="border-bottom">{hero.title}&nbsp;<span>{hero.title2}</span></h1>
            </div>
        </section>
    )
}