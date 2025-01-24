/* Footer Newsletter Section Component */

// React Components
import { Container, Row, Col } from 'react-bootstrap'

export default function Newsletter({newsletter}) {

    /* Check First Name */
    function renderFirstName() {
        if (newsletter.fields.firstName !== undefined) {
            return (
                <fieldset className="newsletter-first-name">
                    <input
                        aria-label="Name"
                        type="text"
                        name={newsletter.fields.firstName}
                        pattern="[a-zA-Z][a-zA-Z ]+"
                        placeholder="First Name"
                        required
                    />
                </fieldset>
            )
        }
    }

    /* Check Last Name */
    function renderLastName() {
        if (newsletter.fields.lastName !== undefined) {
            return (
                <fieldset className="newsletter-last-name">
                    <input
                        aria-label="Name"
                        type="text"
                        name={newsletter.fields.lastName}
                        pattern="[a-zA-Z][a-zA-Z ]+"
                        placeholder="Last Name"
                        required
                    />
                </fieldset>
            )
        }
    }

    return (
        <section className="newsletter">
            <Container>
                <Row className="justify-content-start">
                    <Col lg={6}>
                        <div className="newsletter-block">
                            <h2>{newsletter.title}</h2>
                            <p>
                                {newsletter.text}
                            </p>
                            <form
                                id="newsletterForm"
                                className="newsletter-form align-items-center"
                                action=""
                                method="POST"
                                acceptCharset="UTF-8"
                            >

                                <div className="names d-md-flex">
                                    {renderFirstName()}
                                    {renderLastName()}
                                </div>

                                <fieldset className="newsletter-email">
                                    <input
                                        aria-label="Email"
                                        type="email"
                                        name={newsletter.fields.email}
                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                        placeholder="Email"
                                        required
                                    />
                                </fieldset>
                                <fieldset className="newsletter-submit">
                                    <input
                                        type="submit"
                                        name="submit-button"
                                        value="Submit"
                                        className="btn btn-primary"
                                    />
                                </fieldset>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}