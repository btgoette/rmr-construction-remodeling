/* Footer ThankYou Component */

// React Components
import { Container, Button, Row, Col } from 'react-bootstrap'
import Link from 'next/link'

export default function ThankYou({ thankYou }) {
    return (
        <section className="thank-you">
            <Container className="p-1">
                <div className="thank-you-block">
                    <p className="title">
                    Our goal is to build your trust and earn your business for years to come.
                    </p>
                    <p className="text">
                    Contact RMR Construction & Remodeling to request an estimate, today.  For your convenience, you can <Link href="contact">request services</Link> from this site. 
                    </p>
                </div>
            </Container>
        </section>
    )
}