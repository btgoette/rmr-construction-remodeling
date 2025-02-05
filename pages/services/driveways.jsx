/* Driveways Services Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link'

// Custom Components
import { Head, Hero, Cards, Figure } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/services/driveways.content'
import image from 'public/content/en_US/components/image.content'

export default function DrivewaysServices() {

    return (
        <>

            <Head {...content} />
            <Hero {...content} />

            <section className="pb-0">
                <Container className="pb-0">
                    <Row className="align-items-center">
                        <Col lg={{ span: 6, order: 1 }}>
                            <Figure {...image.figure[21]} />
                        </Col>
                        <Col lg={{ span: 6, order: 0 }}>
                            <h2 data-aos="fade-up" className="text-start">High-Quality Concrete Driveways in Roseville, CA</h2>
                            <div className="border-line-start"></div>
                            <p>Your driveway is more than just a place to park—it’s a key feature of your home’s curb appeal and functionality. At RMR Construction & Remodeling, we specialize in designing and installing durable, visually stunning concrete driveways that enhance the beauty and value of your property. Whether you're building a new driveway, need repairs, or want to upgrade your existing surface with a decorative overlay, our expert team is here to deliver superior craftsmanship.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="pb-0">
                <Container className="pb-0">
                    <Row className="align-items-center">
                        <Col lg={{ span: 6, order: 0 }}>
                            <Figure {...image.figure[43]} />
                        </Col>
                        <Col lg={{ span: 6, order: 1 }}>
                            <h2 data-aos="fade-up" className="text-start">Custom Driveway Designs to Suit Your Home</h2>
                            <div className="border-line-start"></div>
                            <p>We understand that every home is unique, which is why we offer a variety of concrete driveway solutions tailored to your preferences. Whether you prefer the seamless, modern appeal of poured concrete, the elegance of stamped concrete that mimics the look of brick, stone, or pavers, or the ability to customize with unique patterns and colors, we create driveways that are both stylish and durable. Our slip-resistant surfaces enhance tire grip for added safety in wet conditions while providing long-lasting beauty and functionality.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="pb-0">
                <Container className="pb-0">
                    <Row className="align-items-center">
                        <Col lg={{ span: 6, order: 1 }}>
                            <Figure {...image.figure[41]} />
                        </Col>
                        <Col lg={{ span: 6, order: 0 }}>
                            <h2 data-aos="fade-up" className="text-start">Custom Driveway Designs to Suit Your Home</h2>
                            <div className="border-line-start"></div>
                            <p>We understand that every home is unique, which is why we offer a variety of concrete driveway solutions tailored to your preferences. Whether you prefer the seamless, modern appeal of poured concrete, the elegance of stamped concrete that mimics the look of brick, stone, or pavers, or the ability to customize with unique patterns and colors, we create driveways that are both stylish and durable. Our slip-resistant surfaces enhance tire grip for added safety in wet conditions while providing long-lasting beauty and functionality.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <h2 data-aos="fade-up">Why Choose a Concrete Driveway?</h2>
                    <div className="border-line-center"></div>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Cost Effective</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">More budget-friendly than brick or natural stone while still providing a high-end look and long-term value.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Low Maintenance</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">Requires minimal upkeep compared to other materials, with no need for frequent sealing or repairs.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}>
                            <h3 className="text-start text-white text-lg-end" data-aos="fade-right">Long-Lasting</h3>
                        </Col>
                        <Col lg={7}
                        ><p className="border-left" data-aos="fade-left">With proper care and maintenance, a concrete surface can last up to 50 years, far outlasting asphalt.</p>
                        </Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Heavy Load Support</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">Designed to withstand high traffic, parked vehicles, and heavy loads without cracking or shifting.</p>
                        </Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Cooler Surface</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">Reflects sunlight more effectively than asphalt, reducing heat absorption and keeping the surface cooler in hot weather.</p>
                        </Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Better Traction</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">Provides superior grip and slip resistance, even in wet or icy conditions, for improved safety.</p></Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}
