/* Irrigatin and Drainage Services Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link'

// Custom Components
import { Head, CustomHero, Cards, Figure } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/services/irrigationAndDrainage.content'
import image from 'public/content/en_US/components/image.content'

export default function IrrigationAndDrainage() {

    return (
        <>

            <Head {...content} />
            <CustomHero {...content} />

            <section>
                <Container>
                    <div className="d-block d-lg-none mb-5">
                        <h2>Roseville <span>Roofing</span></h2>
                        <h4>Your Trusted <span>Commercial Roofing Partner</span></h4>
                        <div className="border-line-center"></div>
                    </div>
                    <Row className="align-items-center">
                        <Col lg={{ order: 0, span: 6 }}>
                            <Figure className="left-shadow" {...image.figure[70]} />
                        </Col>
                        <Col lg={{ order: 1, span: 6 }}>
                            <div className="d-none d-lg-block">
                                <h2 className="text-start">Roseville <span>Roofing</span></h2>
                                <h4 className="text-start">Your Trusted <span>Commercial Roofing Partner</span></h4>
                                <div className="border-line-start"></div>
                            </div>
                            <p>For over 30 years, RMR Construction & Remodeling has been the trusted choice for exceptional commercial roofing solutions. Whether you&rsquo;re managing a small retail shop or a large industrial facility, we deliver reliable, high-quality roofing services tailored to your business&rsquo;s unique needs.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="bg-concrete">
                <Container>
                    <h2>Comprehensive Commercial<br /><span>Roofing Services</span></h2>
                    <div className="border-line-center"></div>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Roof Replacement</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="flip-up">Replacing your commercial roof is a major investment. We offer industry-specific roofing options designed to fit your building&rsquo;s architecture and operational requirements.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Roof Repairs</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="flip-up">Our skilled team delivers prompt, professional roof repair services to address leaks, storm damage, and roof wear. Emergency repairs are available to keep your operations running smoothly.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">New Roof Installation</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="flip-up">Selecting the right roof for new construction is crucial. Our experts guide you through the process, ensuring your building is equipped with a durable, efficient roofing system.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Roof Maintenance</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="flip-up">Regular maintenance extends the life of your roof and prevents costly issues. We provide thorough maintenance programs to ensure your roof stays in peak condition.</p></Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <h2>Dependable<br /><span>Commercial Roofing Solutions</span></h2>
                    <div className="border-line-center"></div>
                    <p>Our team specializes in a variety of commercial roofing systems designed to protect your investment and enhance your property&rsquo;s durability. From single-ply membranes like TPO, PVC, and EPDM to metal standing seam, slate, concrete tile, and composition shingles, we have the expertise to handle it all.</p>
                    <p>We also ensure your roof complies with manufacturer warranty requirements by offering expert roof maintenance and roof repair services, protecting your investment for years to come.</p>
                </Container>
            </section>

            <section className="bg-concrete">
                <Container>
                    <div className="d-block d-lg-none mb-5">
                        <h2>Commercial<br /><span>Markets Served</span></h2>
                        <div className="border-line-center"></div>
                    </div>

                    <Row className="align-items-center">
                        <Col lg={{ order: 1, span: 6 }}>
                            <Figure className="right-shadow" {...image.figure[65]} />
                        </Col>
                        <Col lg={{ order: 0, span: 6 }}>
                            <div className="d-none d-lg-block">
                                <h2 className="text-start">Commercial<br /><span>Markets Served</span></h2>
                                <div className="border-line-start"></div>
                            </div>
                            <p>RMR Construction & Remodeling is proud to partner with a variety of industries, providing roofing solutions tailored to their specific needs:</p>
                            <div className="d-flex flex-wrap">
                                <ul>
                                    <li>Offices</li>
                                    <li>Schools & Educational Facilities</li>
                                    <li>Apartment Complexes</li>
                                    <li>Industrial & Retail Spaces</li>
                                </ul>
                                <ul>
                                    <li>Medical Facilities</li>
                                    <li>Municipal Buildings</li>
                                    <li>Religious Organizations</li>
                                    <li>Airports & Warehouses</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <h2>Experience the<br /><span>RMR Construction & Remodeling Advantage</span></h2>
                    <div className="border-line-center"></div>
                    <p>Since 1989, RMR Construction & Remodeling has earned a reputation for quality, reliability, and outstanding customer service. Whether you need a roof repair, roof replacement, new roof installation, or ongoing roof maintenance, our team is committed to protecting your business with roofing solutions that deliver long-lasting value.</p>
                </Container>
            </section>
        </>
    )
}
