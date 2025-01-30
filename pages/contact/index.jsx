/* Contact Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import JotformEmbed from 'react-jotform-embed';

// Custom Components
import { Head, Hero, ContactInfo, Figure } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/contact/contact.content'
import image from 'public/content/en_US/components/image.content'

export default function Contact() {

    return (
        <>

            <Head {...content} />
            <Hero {...content} />

            <section>
                <Container>
                    <h2>Contact RMR Construction & Remodeling</h2>
                   
                    <p>At RMR Construction & Remodeling, we are dedicated to providing exceptional service and making it easy for you to connect with us. Whether you have questions, need expert advice, or would like to request an estimate, we're here to help.</p>
                    <p>For immediate assistance, call us at 916-533-4758.</p>
                    <p>You can also use the contact form below to request a quote directly from our website. We look forward to bringing your vision to life!</p>
             
                    <Row>
                        <ContactInfo {...content} />
                        <Col lg={6}>
                            <div className="contact-form">
                                <JotformEmbed src="https://form.jotform.com/241797773166067" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}
