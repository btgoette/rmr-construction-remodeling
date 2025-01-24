/* Roof Inspection Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link'

// Custom Components
import { Head, CustomHero, Cards, Figure } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/services/roofInspection.content'
import image from 'public/content/en_US/components/image.content'

export default function RoofInspections() {

    return (
        <>

            <Head {...content} />
            <CustomHero {...content} />

            <section>
                <Container>
                    <div className="d-block d-lg-none mb-5">
                        <h2>Professional<br /><span>Roof Inspections</span></h2>
                        <div className="border-line-center"></div>
                    </div>
                    <Row className="align-items-center">
                        <Col lg={{ order: 1, span: 6 }}>
                            <Figure className="right-shadow" {...image.figure[50]} />
                        </Col>
                        <Col lg={{ order: 0, span: 6 }}>
                            <div className="d-none d-lg-block">
                                <h2 className="text-start">Professional<br /><span>Roof Inspections</span></h2>
                                <div className="border-line-start"></div>
                            </div>
                            <p>If your roof showing signs of damage after a storm or simply reaching the end of its lifespan, don&rsquo;t wait for problems to worsen to schedule a professional roof inspection with Roseville Roofing. Since 1989, we&rsquo;ve been providing expert evaluations to ensure roofs remain in optimal condition. If issues are discovered, we deliver a detailed report and guide you through the best solutions to protect your property.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="bg-otis clip-right">
                <Container>
                    <h2>Complete Roof<br /><span>Inspection Process</span></h2>
                    <div className="border-line-center"></div>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Visual Examination</h3></Col>
                        <Col lg={7}><p className="border-left">Our inspectors thoroughly examine shingles, tiles, flashing, and other materials for signs of wear, damage, or aging.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Structural Assessment</h3></Col>
                        <Col lg={7}><p className="border-left">We inspect your roof&rsquo;s decking, attic, and ventilation systems to identify hidden issues affecting its stability and performance.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Leak Detection</h3></Col>
                        <Col lg={7}><p className="border-left">Using advanced methods, we locate leaks and water damage, addressing vulnerabilities before they cause significant harm.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Gutter & Downspout Check</h3></Col>
                        <Col lg={7}><p className="border-left">We inspect drainage systems for blockages or damage that could compromise your roof&rsquo;s health.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Storm Damage Evaluation</h3></Col>
                        <Col lg={7}><p className="border-left">After severe weather, we assess your roof for wind, hail, or storm-related damage and provide a comprehensive report.</p></Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <h2>Insurance <span>Claim Assistance</span></h2>
                    <div className="border-line-center"></div>
                    <p>Navigating insurance claims can be overwhelming, but Roseville Roofing is here to help. From accurate documentation to expert guidance, we streamline the process to ensure you receive the compensation you deserve.</p>
                    <ul>
                        <li>Expert documentation to support claims</li>
                        <li>Assistance with filing and communicating with insurers</li>
                        <li>Advocacy to secure maximum benefits</li>
                    </ul>
                </Container>
            </section>

            <section className="bg-home">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <h2 className="mt-0 text-start border-bottom">Schedule Your<br /> <span>Inspection Today!</span></h2>
                        </Col>
                        <Col lg={6}>
                            <p>Don&rsquo;t leave your property unprotected. Whether you&rsquo;re addressing storm damage or planning preventative maintenance, Roseville Roofing is your trusted partner. Contact us today for a thorough roof inspection and take the first step in safeguarding your home or business.</p>
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
