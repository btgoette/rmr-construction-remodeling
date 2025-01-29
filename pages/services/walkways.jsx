/* Walkways Services Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';

// Custom Components
import { Head, Hero, Cards, Figure } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/services/walkways.content'
import image from 'public/content/en_US/components/image.content'

export default function WalkwaysServices() {

    return (
        <>

            <Head {...content} />
            <Hero {...content} />


            <section>
                <Container>
                    <div className="d-block d-lg-none mb-5">
                        <h2>Trusted Residential<br /><span>Roof Repairs</span></h2>
                        <div className="border-line-center"></div>
                    </div>
                    <Row className="align-items-center">
                        <Col lg={{ order: 0, span: 6 }}>
                            <Figure className="left-shadow" {...image.figure[136]} />
                        </Col>
                        <Col lg={{ order: 1, span: 6 }}>
                            <div className="d-none d-lg-block">
                                <h2 className="text-start">Trusted Residential<br /><span>Roof Repairs</span></h2>
                                <div className="border-line-start"></div>
                            </div>
                            <p>At RMR Construction & Remodeling, we have been proudly serving El Dorado, Placer, and Sacramento Counties since 1989. From Auburn to Carmichael, Citrus Heights to Rocklin, and beyond, we are the go-to solution for all your roofing needs.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="bg-concrete">
                <Container>
                    <h2>Quality Roof<br /><span>Repair Materials</span></h2>
                    <div className="border-line-center"></div>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Asphalt Shingles</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="zoom-in-up">These roofing materials are both durable and budget-friendly. They offer a practical solution for homeowners seeking long-lasting performance without breaking the bank.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Slate &amp; Clay Tile</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="zoom-in-up">Elegant and timeless, these tiles add a sophisticated touch to any home. They are known for their exceptional durability and ability to withstand the test of time.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Metal Roofing</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="zoom-in-up">Sleek and modern, metal roofing provides a contemporary aesthetic. It is also highly resilient, offering superior protection against harsh weather conditions.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Stone-Coated Steel</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="zoom-in-up">Strong and impact-resistant, this material is built to handle extreme weather. It combines the durability of steel with the visual appeal of traditional roofing.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Composite Shingles</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="zoom-in-up">Engineered for strength, these shingles can endure hail and severe weather. They are a reliable option for homes in areas prone to extreme conditions.</p></Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <div className="d-block d-lg-none mb-5">
                        <h2>Reliable<br /><span>Roof Repairs</span></h2>
                        <div className="border-line-center"></div>
                    </div>
                    <Row className="align-items-center py-2">
                        <Col lg={{ order: 1, span: 6 }}>
                            <Figure className="right-shadow" {...image.figure[23]} />
                        </Col>
                        <Col lg={{ order: 0, span: 6 }}>
                            <div className="d-none d-lg-block">
                                <h2 className="text-start">Reliable<br /><span>Roof Repairs</span></h2>
                                <div className="border-line-start"></div>
                            </div>
                            <p>Northern California&rsquo;s unpredictable weather can wreak havoc on your roof. From strong winds to hailstorms, damage can happen when you least expect it. RMR Construction & Remodeling is here to help.</p>
                            <p>With over three decades of experience, we specialize in roof repairs, roof replacements, and storm damage restoration. Whether it&rsquo;s a small roof repair or a complete re-roofing project, we provide tailored roofing solutions to keep your home protected.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="bg-concrete">
                <Container>
                    <h2>Preventative Care<br /><span>The Key to Longevity</span></h2>
                    <div className="border-line-center"></div>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Keep Your Downspouts Clear</h3></Col>
                        <Col lg={7}><p className="border-left">Clogged downspouts can cause gutters to overflow and damage your roof. Regularly removing debris and power spraying your gutters can prevent these issues. Severe clogs may require professional assistance to clear impacted materials.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Schedule Annual Roof Inspections</h3></Col>
                        <Col lg={7}><p className="border-left">Regular inspections are crucial to identifying potential issues before they become costly problems. We recommend inspecting your roof at least once a year, especially after winter storms. Our expert team will ensure your roof is in peak condition year-round.</p></Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <div className="d-block d-lg-none mb-5">
                        <h2>Proactive<br /><span>Roof Maintenance</span></h2>
                        <div className="border-line-center"></div>
                    </div>
                    <Row className="align-items-center py-2">
                        <Col lg={{ order: 0, span: 6 }}>
                            <Figure className="left-shadow" {...image.figure[118]} />
                        </Col>
                        <Col lg={{ order: 1, span: 6 }}>
                            <div className="d-none d-lg-block">
                                <h2 className="text-start">Proactive<br /><span>Roof Maintenance</span></h2>
                                <div className="border-line-start"></div>
                            </div>
                            <p>Don&rsquo;t wait for minor roof issues to turn into major roof repairs. RMR Construction & Remodeling offers free analyses and estimates to help you take charge of your roof&rsquo;s health. From routine roof maintenance to emergency roof repairs, we are here to provide reliable, long-lasting solutions.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="bg-home">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <h2 className="mt-0 text-start border-bottom">Call<br /> <span>RMR Construction & Remodeling!</span></h2>
                        </Col>
                        <Col lg={6}>
                            <p>Protect your home with expert roof repair services trusted by Northern California homeowners for over 30 years. Contact RMR Construction & Remodeling for a roof inspection, roof repair, or roof replacement, and experience roofing excellence you can count on!</p>
                            <p className="my-4">
                                <Button as={Link} href="tel:916-533-4758" variant="primary">Call Now</Button>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
