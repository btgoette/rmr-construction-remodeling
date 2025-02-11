/* Contact Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import JotformEmbed from 'react-jotform-embed';
import Link from 'next/link';

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

            <section className="pb-0">
                <Container className="pb-0">
                    <h2 data-aos="fade-up">Contact RMR Construction & Remodeling</h2>
                    <div className="border-line-center"></div>

                    <p>At RMR Construction & Remodeling, we are dedicated to providing exceptional service and making it easy for you to connect with us. Whether you have questions, need expert advice, or would like to request an estimate, we are here to help. You can also use the contact form below to request a quote directly from our website. We look forward to bringing your vision to life!</p>
                    <h4 className="mt-5">For immediate assistance, call us at <Link href="tel:916-533-4758">916-533-4758.</Link>
                    </h4>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <ContactInfo {...content} />
                        <Col lg={6}>
                            <div className="contact-form">
                                <JotformEmbed src="https://form.jotform.com/250407311238043" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}
