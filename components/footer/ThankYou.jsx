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
                        {thankYou.title}
                    </p>
                    <p className="text">
                        {thankYou.text.p}<Link href={"tel:" + thankYou.text.phone}>{thankYou.text.phone}</Link> or fill out our <Link href={thankYou.text.url}>online form</Link> to schedule your consultation.<br /> Your roof is an investment – trust Roseville Roofing to deliver real value and outstanding results.
                    </p>
                </div>
            </Container>
        </section>
    )
}