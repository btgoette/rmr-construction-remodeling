/* Single Ply TPO Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link'

// Custom Components
import { Head, CustomHero, Cards, Figure } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/roof-types/singlePlyTPO.content'
import image from 'public/content/en_US/components/image.content'

export default function SinglePlyTPO() {

    return (
        <>

            <Head {...content} />
            <CustomHero {...content} />

            <section>
                <Container>
                    <div className="d-block d-lg-none mb-5">
                        <h2>TPO <span>Roofing</span></h2>
                        <div className="border-line-center"></div>
                    </div>
                    <Row className="align-items-center">
                        <Col lg={{ order: 0, span: 6 }}>
                            <Figure className="left-shadow" {...image.figure[151]} />
                        </Col>
                        <Col lg={{ order: 1, span: 6 }}>
                            <div className="d-none d-lg-block">
                                <h2 className="text-start">TPO <span>Roofing</span></h2>
                                <div className="border-line-start"></div>
                            </div>
                            <p>At Roseville Roofing, we understand the importance of a strong, durable roofing system to safeguard your commercial property. That&rsquo;s why we specialize in Thermoplastic Polyolefin (TPO) roofing systems, offering tailored solutions to meet the unique needs of businesses across Northern California.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="bg-otis clip-right">
                <Container>
                    <div className="d-block d-lg-none mb-5">
                        <h2>What is <span>TPO Roofing?</span></h2>
                        <div className="border-line-center"></div>
                    </div>
                    <Row className="align-items-center">
                        <Col lg={{ order: 1, span: 6 }}>
                            <Figure className="right-shadow" {...image.figure[80]} />
                        </Col>
                        <Col lg={{ order: 0, span: 6 }}>
                            <div className="d-none d-lg-block">
                                <h2 className="text-start">What is <br/><span>TPO Roofing?</span></h2>
                                <div className="border-line-start"></div>
                            </div>
                            <p>TPO roofing systems are an innovative and cost-effective solution for flat roofs, widely used in commercial and industrial buildings. These single-ply thermoplastic membranes are prized for their:</p>
                            <ul className="list">
                                <li><strong>Durability</strong> &mdash; Withstanding harsh weather, UV rays, and chemical exposure.</li>
                                <li><strong>Energy Efficiency </strong> &mdash; Reflecting sunlight to reduce cooling costs.</li>
                                <li><strong>Flexibility </strong> &mdash; Ideal for diverse commercial applications.</li>
                            </ul>
                            <p>Unlike traditional PVC roofing, TPO roofs offer enhanced resistance to wear and tear, making them a long-lasting choice for modern businesses.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <div className="d-block d-lg-none mb-5">
                        <h2>Why Choose<br /><span>TPO Roofing?</span></h2>
                        <div className="border-line-center"></div>
                    </div>
                    <Row className="align-items-center">
                        <Col lg={{ order: 0, span: 6 }}>
                            <Figure className="left-shadow" {...image.figure[148]} />
                        </Col>
                        <Col lg={{ order: 1, span: 6 }}>
                            <div className="d-none d-lg-block">
                                <h2 className="text-start">Why Choose<br /><span>TPO Roofing?</span></h2>
                                <div className="border-line-start"></div>
                            </div>
                            <p>With decades of expertise, Roseville Roofing has become the go-to provider of TPO roofing systems in Placer, El Dorado, and Sacramento Counties. From Auburn to Sacramento, our commitment to quality craftsmanship and customer satisfaction sets us apart.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="bg-otis clip-right">
                <Container>
                    <h2>Our TPO<br /><span>Roofing Services</span></h2>
                    <div className="border-line-center"></div>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">TPO Roof Installation</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="zoom-out">Our expert team ensures a professional installation process, guaranteeing your TPO roof meets or exceeds all industry standards for durability, performance, and long-term reliability.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">TPO Roof Maintenance</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="zoom-out">Regular roofing maintenance services are essential to protect your investment, extending the lifespan of your TPO roofing system while maintaining its efficiency and performance over time.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">TPO Roof Repairs</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="zoom-out">We offer prompt and dependable repair services to address roof leaks, punctures, or other roofing damage, restoring your TPO roof&rsquo;s integrity and protecting your property from further issues.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">TPO Roof Replacements</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="zoom-out">When it&rsquo;s time for an upgrade, we provide hassle-free TPO roof replacement services, carefully managing the process to deliver a durable and efficient new roofing system.</p></Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <div className="d-block d-lg-none mb-5">
                        <h2>The Benefits of<br /><span>TPO Roofing</span></h2>
                        <div className="border-line-center"></div>
                    </div>
                    <Row className="align-items-center">
                        <Col lg={{ order: 1, span: 6 }}>
                            <Figure className="right-shadow" {...image.figure[98]} />
                        </Col>
                        <Col lg={{ order: 0, span: 6 }}>
                            <div className="d-none d-lg-block">
                                <h2 className="text-start">The Benefits of<br /><span>TPO Roofing</span></h2>
                                <div className="border-line-start"></div>
                            </div>
                            <p>TPO roofing combines functionality and cost-effectiveness, making it a top choice for flat roofs. These systems not only provide superior resistance to weather and wear but also help maintain comfortable indoor temperatures year-round. With its reflective surface, TPO roofing reduces heat absorption, lowering cooling costs in the summer while offering durability that stands up to high winds, heavy rains, and other environmental challenges. Additionally, its recyclable materials make it an eco-friendly option for businesses aiming to reduce their environmental impact.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="bg-home">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <h2 className="mt-0 text-start border-bottom">Schedule Your<br /> <span>Inspection Today!</span></h2>
                        </Col>
                        <Col lg={6}>
                            <p>With decades of experience, we deliver tailored Single Ply TPO roofing solutions that enhance protection and energy efficiency for your commercial building. Contact us today to schedule a free inspection and consultation, and let our expert team provide a durable roofing system that safeguards your investment and supports your business for years to come.</p>
                            <p className="my-4">
                                <Button as={Link} href="/contact/" variant="primary">Schedule Your Free Consultation</Button>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}
