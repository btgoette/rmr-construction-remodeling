/* Roof Types Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link'

// Custom Components
import { Head, CustomHero, Cards, Figure } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/roof-types/roofTypes.content'
import image from 'public/content/en_US/components/image.content'

export default function RoofTypes() {

    return (
        <>

            <Head {...content} />
            <CustomHero {...content} />

            <section>
                <Container>
                    <div className="d-block d-lg-none mb-5">
                        <h2>The <span>Right Roof</span></h2>
                        <h4>For Long<span>-Lasting Protection</span></h4>
                        <div className="border-line-center"></div>
                    </div>
                    <Row className="align-items-center">
                        <Col lg={{ order: 0, span: 6 }}>
                            <Figure className="left-shadow" {...image.figure[167]} />
                        </Col>
                        <Col lg={{ order: 1, span: 6 }}>
                            <div className="d-none d-lg-block">
                                <h2 className="text-start">The <span>Right Roof</span></h2>
                                <h4 className="text-start">For Long<span>-Lasting Protection</span></h4>
                                <div className="border-line-start"></div>
                            </div>
                            <p>When protecting your family and business in Roseville, CA, having a high-quality roof is not just a necessity but an investment in safety and peace of mind. With the area&rsquo;s variable weather—ranging from scorching summer heat to occasional hailstorms—selecting the right roofing materials is vital to ensure lasting protection and durability.</p>
                            <p>At Roseville Roofing, we understand that every property has unique needs. That&rsquo;s why we&rsquo;ve created this comprehensive guide to help you choose the ideal roofing type for your budget and preferences. Whether you&rsquo;re considering standing seam metal, classic tiles, or versatile shingles, we&rsquo;re here to guide you every step of the way.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="bg-otis clip-right">
                <Container>
                    <h2>Residential <span>Roof Types</span></h2>
                    <div className="border-line-center"></div>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Asphalt Roofing</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">Affordable, durable, and versatile, asphalt shingles last 20–30 years and provide reliable protection. Our team offers expert roof repairs, maintenance, and full roof replacements to ensure your home stays protected and stylish.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Tile Roofing</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">Durable and eco-friendly, tile roofs withstand harsh weather while boosting your home&rsquo;s charm. Roseville Roofing specializes in tile roof installation and repair, offering long-lasting, sustainable roofing solutions for homes in Roseville.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Metal Roofing</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">Sleek and durable, metal roofs resist extreme weather and offer energy efficiency. Available in various styles, metal roofs provide lasting protection with a modern look. Count on us for expert metal roof installation and quality that endures for decades.</p></Col>
                    </Row>

                </Container>
            </section>

            <section>
                <Container>

                    <div className="d-block d-lg-none mb-5">
                        <h2>Protecting Homes<br /><span>&amp; Businesses</span></h2>
                        <div className="border-line-center"></div>
                    </div>

                    <Row className="align-items-center">
                        <Col lg={{ order: 1, span: 6 }}>
                            <Figure className="right-shadow" {...image.figure[63]} />
                        </Col>
                        <Col lg={{ order: 0, span: 6 }}>
                            <div className="d-none d-lg-block">
                                <h2 className="text-start">Protecting Homes<br /><span>&amp; Businesses</span></h2>
                                <div className="border-line-start"></div>
                            </div>
                            <p>Your roof does more than shield your property from the elements—it enhances curb appeal and boosts your home&rsquo;s value. With a wide range of options available, Roseville Roofing will work with you to find the ideal solution that fits your lifestyle and budget. Don&rsquo;t let minor issues escalate into costly repairs. Contact us today for a free inspection to ensure your roof is prepared for any challenge.</p>
                            <p>For businesses in Placer, El Dorado, and Sacramento Counties, a dependable roof is vital to safeguarding your inventory, equipment, and workforce. Roseville Roofing offers specialized commercial roofing solutions designed to meet the unique needs of various industries and building types. From material selection and repairs to complete roof replacements, we provide comprehensive services for retail stores, restaurants, industrial facilities, and more.</p>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="bg-otis clip-top-right">
                <Container>
                    <h2>Commercial <span>Roof Types</span></h2>
                    <div className="border-line-center"></div>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Flat Roofs</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-up-right">Flat roofs are affordable and space-efficient but need regular maintenance to prevent issues. Trust Roseville Roofing to ensure your flat roof stays secure, durable, and ready to perform for years to come.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">PVC &amp; TPO Roofing</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-up-right">Energy-efficient and durable, PVC and TPO roofing offer watertight seams, resistance to chemicals and wind, and reflective properties that lower energy costs. They&rsquo;re an eco-friendly, smart choice for commercial buildings.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Metal Roofing</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-up-right">Durable and low-maintenance, metal roofs withstand harsh weather while enhancing your building&rsquo;s look. With versatile styles and lasting protection, metal roofing is a resilient, attractive choice for commercial properties.</p></Col>
                    </Row>

                </Container>
            </section>

            <section className="bg-home">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <h2 className="mt-0 text-start border-bottom">Your Business,<br /><span>Our Priority</span></h2>
                        </Col>
                        <Col lg={6}>
                            <p>
                                Let Roseville Roofing help you choose the ideal roofing solution to keep your commercial property safe and secure for years. Whether you&rsquo;re building new roof or replacing an old roof, we offer durable, cost-effective options tailored to your needs. Contact us today!</p>
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
