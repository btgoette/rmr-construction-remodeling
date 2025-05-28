{/* Footer Socials Component*/ }

// React Components
import { Image } from 'react-bootstrap'
import Link from 'next/link'

// FontAwesome Fonts
import "public/fonts/FontAwesome/fontawesome";

export default function Socials({ socials }) {

    /* Check For Socials */
    function renderFacebook() {
        if (socials.facebook !== undefined) {
            return (
                <Link className="btn btn-facebook btn-floating m-1" href={socials.facebook} target="_blank">
                    <i className="fab fa-facebook-f"></i>
                </Link>
            )
        }
    }

    /*  Instagram */
    function renderInstagram() {
        if (socials.instagram !== undefined) {
            return (
                <Link className="btn btn-instagram btn-floating m-1" href={socials.instagram} target="_blank">
                    <i className="fab fa-instagram"></i>
                </Link>
            )
        }
    }

    /* LinkedIn */
    function renderLinkedIn() {
        if (socials.linkedin) {
            return (
                <Link className="btn btn-linkedin btn-floating m-1" href={socials.linkedin} target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                </Link>
            )
        }
    }

    /* Nextdoor */
    function renderNextdoor() {
        if (socials.nextdoor) {
            return (
                <Link className="btn btn-nextdoor btn-floating m-1" href={socials.nextdoor} target="_blank">
                    <Image loading="lazy" className="light" src="/images/icons/social-media/nextdoor-white.svg" alt="nextdoor" height="20" width="20" type="image/svg+xml" />
                </Link>
            )
        }
    }

    /* Angi */
    function renderAngi() {
        if (socials.angi) {
            return (
                <Link className="btn btn-angi btn-floating m-1" href={socials.angi} target="_blank" title="Angi">
                    <Image loading="lazy" className="light" src="/images/icons/social-media/angi-white.svg" alt="angi" height="20" width="20" type="image/svg+xml" />
                </Link>
            )
        }
    }

    /* Google */
    function renderGoogle() {
        if (socials.google !== undefined) {
            return (
                <Link className="btn btn-google btn-floating m-1" href={socials.google} target="_blank">
                     <Image loading="lazy" className="light" src="/images/icons/social-media/google.svg" alt="angi" height="20" width="20" type="image/svg+xml" />
                </Link>
            )
        }
    }

    /* Twitter - X */
    function renderTwitter() {
        if (socials.twitter !== undefined) {
            return (
                <Link className="btn btn-twitter btn-floating m-1" href={socials.twitter} target="_blank">
                    <i className="fab fa-x-twitter"></i>
                </Link>
            )
        }
    }


    /* YellowPages */
    function renderYellowPages() {
        if (socials.yellowPages !== undefined) {
            return (
                <Link className="btn btn-yellow-pages btn-floating m-1" href={socials.yellowPages} target="_blank">
                    <Image loading="lazy" className="light" src="/images/icons/social-media/yp-white.svg" alt="yellow pages" height="20" width="20" type="image/svg+xml" />
                </Link>
            )
        }
    }

    /* Yelp */
    function renderYelp() {
        if (socials.yelp !== undefined) {
            return (
                <Link className="btn btn-yelp btn-floating m-1" href={socials.yelp} target="_blank">
                    <i className="fab fa-yelp"></i>
                </Link>
            )
        }
    }

    /* BBB */
    function renderBBB() {
        if (socials.bbb !== undefined) {
            return (
                <p>
                    <Link href={socials.bbb} target="_blank">
                        <Image loading="lazy" className="bbb" src="/images/icons/social-media/bbb-accredited-business.svg" alt="BBB Accredited Business" height="62.28" width="165" type="image/svg+xml" />
                    </Link>
                </p>
            )
        }
    }

    return (
        <div className="socials">
            <p>
                {renderAngi()}
                {renderFacebook()}
                {renderInstagram()}
                {renderLinkedIn()}
                {renderNextdoor()}
                {renderTwitter()}
                {renderGoogle()}
                {renderYellowPages()}
                {renderYelp()}
            </p>
            {renderBBB()}
        </div>
    )
}