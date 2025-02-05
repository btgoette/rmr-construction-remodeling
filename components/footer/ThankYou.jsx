/* Footer ThankYou Component */

// React Components
import { Container, Button, Row, Col } from 'react-bootstrap'
import Link from 'next/link'

export default function ThankYou({ thankYou }) {
    return (
        <section className="thank-you">
            <Container className="thank-you-block">
                <Row className="align-items-center justify-content-center">
                    <Col lg={4}>
                        <h2 className="mt-0 text-start border-bottom">Let's Bring Your<br/> Vision to Life</h2>
                    </Col>
                    <Col lg={8}>
                        <p className="text-start">Our goal is to build your trust and earn your business for years to come. Ready to transform your outdoor space? <Link href="/contact">Contact RMR Construction & Remodeling</Link> today to discuss your project or schedule an estimate. <Link href="tel:916-533-4758">Call us at 916-533-4758</Link> to get started! Let us bring your vision to life with quality craftsmanship and exceptional service.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}