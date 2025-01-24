/* Services Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';

// Custom Components
import { Head, CustomHero, CardsOverlay, Figure } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/services/services.content'
import image from 'public/content/en_US/components/image.content'

export default function Services() {

    return (
        <>

            <Head {...content} />
            <CustomHero {...content} />

            <section>
                <Container>
                    <h2>Your Trusted <span>Roofing Partner</span></h2>
                    <div className="border-line-center"></div>
                    <p className="mb-5">Since 1989, Roseville Roofing has proudly served Placer, El Dorado, and Sacramento Counties with exceptional roofing solutions. We cater to both residential and commercial clients, offering fully licensed and insured services backed by decades of expertise. Here&rsquo;s an overview of what we provide:</p>

                    <div className="d-block d-lg-none my-5">
                        <h2>Residential <span>Roofing</span></h2>
                        <h4>Protect Your Home <span>With Confidence</span></h4>
                        <div className="border-line-center"></div>
                    </div>
                    <Row className="align-items-center">
                        <Col lg={{ order: 0, span: 4 }}>
                            <Figure className="left-shadow" {...image.figure[135]} />
                        </Col>
                        <Col lg={{ order: 1, span: 8 }}>
                            <div className="d-none d-lg-block">
                                <h3 className="text-start">Residential <span className="text-primary">Roofing</span></h3>
                                <h4 className="text-start">Protect Your Home <span>With Confidence</span></h4>
                                <div className="border-line-start"></div>
                            </div>
                            <p>From minor roof repairs to full roof replacements, we deliver expert residential roofing services that combine durability, functionality, and aesthetic appeal. Using premium materials and skilled craftsmanship, we ensure your roof stands strong against the elements while enhancing your home&rsquo;s value.</p>
                            <p className="my-4">
                                <Button as={Link} href="/services/residential/" variant="primary">Learn More</Button>
                            </p>
                        </Col>
                    </Row>

                    <div className="d-block d-lg-none mb-5">
                        <h2>Roof <span>Repairs</span></h2>
                        <h4>Quick, Reliable <span>Fixes for Any Issue</span></h4>
                        <div className="border-line-center"></div>
                    </div>
                    <Row className="align-items-center">
                        <Col lg={{ order: 1, span: 4 }}>
                            <Figure className="right-shadow" {...image.figure[148]} />
                        </Col>
                        <Col lg={{ order: 0, span: 8 }}>
                            <div className="d-none d-lg-block">
                                <h3 className="text-start">Roof <span className="text-primary">Repairs</span></h3>
                                <h4 className="text-start">Quick, Reliable <span>Fixes for Any Issue</span></h4>
                                <div className="border-line-start"></div>
                            </div>
                            <p>Whether dealing with roof leaks, storm damage, or general wear and tear, our roof repair services restore your roof&rsquo;s integrity with precision. We focus on lasting results, so your home or business stays safe and secure.</p>
                            <p className="my-4">
                                <Button as={Link} href="/services/roof-repairs/" variant="primary">Learn More</Button>
                            </p>
                        </Col>
                    </Row>

                    <div className="d-block d-lg-none mb-5">
                        <h2>Roof <span>Replacements</span></h2>
                        <h4>Upgrade for <span>Long-Term Performance</span></h4>
                        <div className="border-line-center"></div>
                    </div>
                    <Row className="align-items-center">
                        <Col lg={{ order: 0, span: 4 }}>
                            <Figure className="left-shadow" {...image.figure[141]} />
                        </Col>
                        <Col lg={{ order: 1, span: 8 }}>
                            <div className="d-none d-lg-block">
                                <h3 className="text-start">Roof <span className="text-primary">Replacements</span></h3>
                                <h4 className="text-start">Upgrade for <span>Long-Term Performance</span></h4>
                                <div className="border-line-start"></div>
                            </div>
                            <p>When it&rsquo;s time for a new roof, we make the process seamless. Our team evaluates your needs, recommends the best materials, and completes the replacement efficiently—improving your property&rsquo;s appearance, value, and protection.</p>
                            <p className="my-4">
                                <Button as={Link} href="/services/roof-replacements/" variant="primary">Learn More</Button>
                            </p>
                        </Col>
                    </Row>

                    <div className="d-block d-lg-none mb-5">
                        <h2>Roof <span>Inspections</span></h2>
                        <h4>Prevent Problems <span>Before They Start</span></h4>
                        <div className="border-line-center"></div>
                    </div>
                    <Row className="align-items-center">
                        <Col lg={{ order: 1, span: 4 }}>
                            <Figure className="right-shadow" {...image.figure[39]} />
                        </Col>
                        <Col lg={{ order: 0, span: 8 }}>
                            <div className="d-none d-lg-block">
                                <h3 className="text-start">Roof <span className="text-primary">Inspections</span></h3>
                                <h4 className="text-start">Prevent Problems <span>Before They Start</span></h4>
                                <div className="border-line-start"></div>
                            </div>
                            <p>Extend your roof&rsquo;s lifespan with our roofing maintenance services. Regular roof inspections, cleanings, and minor roof repairs ensure your roof stays in top condition while avoiding costly roof repairs down the road.</p>
                            <p className="my-4">
                                <Button as={Link} href="/services/roof-inspections/" variant="primary">Learn More</Button>
                            </p>
                        </Col>
                    </Row>

                    <div className="d-block d-lg-none mb-5">
                        <h2>Commercial <span>Roofing</span></h2>
                        <h4>Solutions <span>Built for Business</span></h4>
                        <div className="border-line-center"></div>
                    </div>
                    <Row className="align-items-center">
                        <Col lg={{ order: 0, span: 4 }}>
                            <Figure className="left-shadow" {...image.figure[62]} />
                        </Col>
                        <Col lg={{ order: 1, span: 8 }}>
                            <div className="d-none d-lg-block">
                                <h3 className="text-start">Commercial <span className="text-primary">Roofing</span></h3>
                                <h4 className="text-start">Solutions <span>Built For Business</span></h4>
                                <div className="border-line-start"></div>
                            </div>
                            <p>We specialize in low-slope, TPO (Thermoplastic Olefin), metal, and modified bitumen roofing systems tailored to meet your business&rsquo;s needs. Our commercial roofing services prioritize quality, durability, and compliance, protecting your investment and minimizing disruption.</p>
                            <p className="my-4">
                                <Button as={Link} href="/services/commercial/" variant="primary">Learn More</Button>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}
