/* Services Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';

// Custom Components
import { Head, Hero, CardsWithIcon, Figure } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/services/services.content'
import image from 'public/content/en_US/components/image.content'

export default function Services() {

    return (
        <>

            <Head {...content} />
            <Hero {...content} />

            <section className="pb-0">
                <Container className="pb-0">
                    <Row className="align-items-center">
                        <Col lg={{ span: 6, order: 0 }}>
                            <Figure {...image.figure[5]} />
                        </Col>
                        <Col lg={{ span: 6, order: 1 }}>
                            <h2 data-aos="fade-up" className="text-start">Expert Outdoor Construction & Landscaping Services</h2>
                            <div className="border-line-start"></div>
                            <p>Transform your backyard into a stunning, functional space where you can relax, entertain, and create lasting memories. At RMR Construction & Remodeling, we specialize in designing and building outdoor environments that enhance your home&apos;s beauty, comfort, and value. Whether you&apos;re looking for elegant hardscaping, custom outdoor structures, or durable concrete solutions, we bring expertise and craftsmanship to every project.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="pb-0">
                <Container className="pb-0">
                    <h2 data-aos="fade-up">Our Comprehensive Services</h2>
                    <div className="border-line-center"></div>
                    <CardsWithIcon {...content} />
                </Container>
            </section>

            <section>
                <Container>
                    <h2 data-aos="fade-up">Why Choose RMR Construction & Remodeling?</h2>
                    <div className="border-line-center"></div>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Experienced Professionals</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">With years of expertise, we create outdoor spaces that blend function and beauty.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Built to Last</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">Our commitment to quality ensures durable, long&#45;lasting results for every project.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Personalized Service</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">No matter the size or scope, we deliver expert craftsmanship tailored to your vision.</p></Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
