/* Footer Menu Component */

// React Components
import { Col } from 'react-bootstrap'
import Link from 'next/link'

// Custom Components
import CTA from '../CTA'

export default function Menu({ nav }) {

    function renderTitle() {
        if (nav.title !== undefined) {
            return (
                <p className="footer-title">
                    {nav.title}
                </p>
            )
        }
    }

    function renderCTA() {
        if (nav.cta !== undefined) {
            return (
                <CTA {...nav} />
            )
        }
    }

    return (

        <Col xl={3} className="menu text-center text-xl-start">
            {renderTitle()}
            <div className="links mb-2">
                {nav.navLinks.map(({ name, url }, i) => (
                    <span key={i} >
                        <Link href={url} title={name}>
                            {name}
                        </Link><br />
                    </span>
                ))}
            </div>
        </Col>
    )
}