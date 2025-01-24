/* Contact Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import JotformEmbed from 'react-jotform-embed';

// Custom Components
import { Head, CustomHero, ContactInfo, Figure } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/contact/contact.content'
import image from 'public/content/en_US/components/image.content'

export default function Contact() {

    return (
        <>

            <Head {...content} />
            <CustomHero {...content} />

            <section clip-bottom-right>
                <Container>
                    <h2>Get in Touch<br /><span>with RMR Construction & Remodeling</span></h2>
                    <div className="border-line-center"></div>
                    <p className="mb-5">At RMR Construction & Remodeling, we are here to assist with all your roofing needs. Whether you&rsquo;re ready to schedule a free, no-obligation estimate, have questions about our services, or would like to discuss your next roofing project, our team is always just a call or click away. Use the form below to request your complimentary roofing estimate or find our contact details for fast and efficient assistance. We are committed to helping you build a stronger, safer roof that will protect your home or business for years to come!</p>
             
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
