/* About Us Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';

// Custom Components
import { Head, CustomHero, Brands, Figure, ReviewsSlider } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/about/about.content'
import image from 'public/content/en_US/components/image.content'

export default function About() {

    return (
        <>

            <Head {...content} />
            <CustomHero {...content} />

            <section>
                <Container>
                    <div className="d-block d-lg-none mb-5">
                        <h2>Roseville <span>Roofing</span></h2>
                        <div className="border-line-center"></div>
                    </div>
                    <Row className="align-items-center">
                        <Col lg={{ order: 0, span: 6 }}>
                            <Figure className="left-shadow" {...image.figure[171]} />
                        </Col>
                        <Col lg={{ order: 1, span: 6 }}>
                            <div className="d-none d-lg-block">
                                <h2 className="text-start">Roseville <span>Roofing</span></h2>
                                <div className="border-line-start"></div>
                            </div>
                            <p>For over three decades, Roseville Roofing has been the trusted choice for top-quality roofing services, delivering exceptional craftsmanship and unwavering customer satisfaction. Established in 1989, we&rsquo;ve built strong relationships with homeowners and businesses across Placer, El Dorado, and Sacramento Counties by consistently exceeding expectations.</p>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="bg-otis clip-right">
                <Container>
                    <h2>Why choose <br /><span>Roseville Roofing?</span></h2>
                    <div className="border-line-center"></div>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Licensed and Insured</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-up-left">Rest easy knowing your property is in good hands. Our licensing and insurance ensure your roofing project is protected every step of the way.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Trusted Expertise</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-up-left">With decades of service in Sacramento and the surrounding areas, we&rsquo;ve built a reputation as a reliable and skilled roofing provider. Our experience ensures quality and consistency on every project.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Extended Warranties</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-up-left">As Owens Corning Preferred Contractors and CertainTeed Select Shingle Masters, we are proud to offer extended warranties. These guarantees provide you with long-lasting peace of mind and durable results.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Tailored Solutions</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-up-left">Whether you need residential roofing services or commercial roofing services, we combine local expertise with personalized service. Our custom approach ensures we meet the unique needs of every client.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Wide Service Area</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-up-left">We are proud to serve communities across Northern California, including Auburn, Rocklin, Roseville, Folsom, Granite Bay, Sacramento, and beyond. Wherever you are, we bring exceptional service to your doorstep.</p></Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container fluid>
                    <h2>Our Memberships <span>& Certifications</span></h2>
                    <div className="border-line-center"></div>
                    <Brands {...content} />
                </Container>
            </section>

            
            <section className="bg-home">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <h2 className="mt-0 text-start border-bottom">Let&rsquo;s<br /> <span>Work Together!</span></h2>
                        </Col>
                        <Col lg={6}>
                            <p>Whether you need a roof inspection, roof repair, roof replacement, or new roof installation, Roseville Roofing is here to provide you with real value and quality workmanship.</p>
                            <p className="my-4">
                                <Button as={Link} href="/contact/" variant="primary">Free Estimates</Button>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="bg-tertiary">
                <Container>
                    <h2>What Our Clients Say</h2>
                    <h4>A Reputation <span>Built on Trust</span></h4>
                        <ReviewsSlider {...content} />
                            <div className="text-center">
                              <Button className="mt-3" href="/testimonials/">Read More Testimonials</Button>
                            </div>
                </Container>
            </section>
        </>
    )
}
