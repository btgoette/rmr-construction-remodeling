/* Footer Marquee Component */

// React Components
import Link from "next/link";
import Marquee from "react-fast-marquee";
// Make sure you install npm i react-fast-marquee

export default function FooterMarquee({ marquee }) {
    return (
        <section className="marquee bg-concrete">
            <Marquee speed="20">
                {marquee.map(({ name, url }, i) => (
                    <span key={i} className="marquee-link">
                        <Link href={url}>
                            {name}&nbsp;
                        </Link>
                    </span>
                ))}
            </Marquee>
        </section >
    )
}