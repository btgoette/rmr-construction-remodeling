/* Footer Contact Component */

// React Components
import { Col, Button } from 'react-bootstrap'
import Link from 'next/link'

export default function Contact({ contact }) {

    function renderTitle() {
        if (contact.title !== undefined) {
            return (
                <p className="footer-title">
                    {contact.title}
                </p>
            )
        }
    }

    function renderPhone() {
        if (contact.phone !== undefined) {
            return (
                <>
                    <Link href={"tel:" + contact.phone}>
                        {contact.phone}<br />
                    </Link><br />
                </>
            )
        }
    }

    function renderEmail() {
        if (contact.email !== undefined) {
            return (
                <Link href={"mailto:" + contact.email}>
                    {contact.email}
                </Link>
            )
        }
    }

    function renderAddress() {
        if (contact.address !== undefined) {
            return (
                <p>
                    {contact.company}<br />
                    {contact.address.map(({ line }, i) => (
                        <span key={i}>{line}<br /></span>
                    ))}
                </p>
            )
        }
    }

    function renderOpenClose() {
        if (contact.openClose !== undefined) {
            return (
                <p>
                    {contact.openClose.days}<br />
                    {contact.openClose.hours}<br /><br />
                </p>
            )
        }
    }
    return (

        <Col md={6} xl={3} className="footer-contact">
            {renderTitle()}
            <p className="mt-0">
                {renderPhone()}
                {renderEmail()}
            </p>
            {renderAddress()}
            {renderOpenClose()}
        </Col>
    )
}