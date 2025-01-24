/* Synthetic Faux Slate Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link'

// Custom Components
import { Head, CustomHero, Cards, Figure } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/roof-types/syntheticFauxSlate.content'
import image from 'public/content/en_US/components/image.content'

export default function SyntheticFauxSlate() {

    return (
        <>

            <Head {...content} />
            <CustomHero {...content} />

            <section>
                <Container>
                    <div className="d-block d-lg-none mb-5">
                        <h2>Synthetic Faux<br /><span>Slate Roofing</span></h2>
                        <div className="border-line-center"></div>
                    </div>
                    <Row className="align-items-center">
                        <Col lg={{ order: 0, span: 6 }}>
                            <Figure className="left-shadow" {...image.figure[132]} />
                        </Col>
                        <Col lg={{ order: 1, span: 6 }}>
                            <div className="d-none d-lg-block">
                                <h2 className="text-start">Synthetic Faux<br /><span>Slate Roofing</span></h2>
                                <div className="border-line-start"></div>
                            </div>
                            <p>If you&rsquo;re seeking a premium roofing option that combines the timeless elegance of real slate with affordability, synthetic faux slate roofing from Roseville Roofing is the perfect solution. Proudly serving Sacramento and surrounding areas, we deliver exceptional craftsmanship and high-quality materials tailored to your needs.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="bg-otis clip-right">
                <Container>
                    <div className="d-block d-lg-none mb-5">
                        <h2>What is Synthetic Faux<br /><span>Slate Roofing</span></h2>
                        <div className="border-line-center"></div>
                    </div>
                    <Row className="align-items-center">
                        <Col lg={{ order: 1, span: 6 }}>
                            <Figure className="right-shadow" {...image.figure[131]} />
                        </Col>
                        <Col lg={{ order: 0, span: 6 }}>
                            <div className="d-none d-lg-block">
                                <h2 className="text-start">What is Synthetic Faux<br /><span>Slate Roofing</span></h2>
                                <div className="border-line-start"></div>
                            </div>
                            <p>Synthetic faux slate roofing offers a visually stunning and cost-effective alternative to traditional slate. This innovative material is crafted from a blend of durable polymers and molded to replicate the natural texture, color, and depth of real slate. Unlike natural slate, which is heavy and expensive, faux slate is lightweight, making it ideal for homes that cannot support the weight of real slate tiles.</p>
                            <p>Available in a wide range of colors and sizes, synthetic faux slate provides homeowners the flexibility to create a custom look for their roof while enjoying its long-lasting durability. With an impressive lifespan of up to 60 years, faux slate is not only a practical choice but also an eco-friendly one, reducing waste and minimizing the need for replacement over time.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <div className="d-block d-lg-none mb-5">
                        <h2>Why Choose<br /><span>Roseville Roofing?</span></h2>
                        <div className="border-line-center"></div>
                    </div>
                    <Row className="align-items-center">
                        <Col lg={{ order: 0, span: 6 }}>
                            <Figure className="left-shadow" {...image.figure[134]} />
                        </Col>
                        <Col lg={{ order: 1, span: 6 }}>
                            <div className="d-none d-lg-block">
                                <h2 className="text-start">Why Choose<br /><span>Roseville Roofing?</span></h2>
                                <div className="border-line-start"></div>
                            </div>
                            <p>Roseville Roofing specializes in installing and maintaining high-performance roofing systems that can withstand the challenging Northern California climate. From intense summer heat to unpredictable storms, our team uses only premium materials and proven techniques to ensure your roof&rsquo;s longevity and performance. Backed by our satisfaction guarantee, we take pride in delivering quality results you can trust.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="bg-otis clip-top-right">
                <Container>
                    <h2>Benefits of Synthetic<br /><span>Faux Slate Roofing</span></h2>
                    <div className="border-line-center"></div>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Exceptional Durability</h3></Col>
                        <Col lg={7}><p className="border-left">Faux slate roofs are designed to resist extreme weather conditions, offering Class 4 impact resistance and wind resistance up to 110 mph. Many systems also provide excellent fire ratings, including Class A and C options.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Lightweight Construction</h3></Col>
                        <Col lg={7}><p className="border-left">Unlike natural slate, faux slate is significantly lighter, eliminating the need for additional structural support and simplifying installation.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Impressive Longevity</h3></Col>
                        <Col lg={7}><p className="border-left">With a lifespan of up to 60 years, faux slate roofing rivals traditional slate in durability while requiring less maintenance.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Cost-Effective Solution</h3></Col>
                        <Col lg={7}><p className="border-left">Synthetic slate provides the luxurious look of real slate at a fraction of the cost, making it a budget-friendly option for homeowners.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Warranty Coverage</h3></Col>
                        <Col lg={7}><p className="border-left">Most faux slate roofing systems come with limited lifetime warranties, offering peace of mind and long-term protection for your investment.</p></Col>
                    </Row>
                </Container>
            </section>

            <section className="bg-home">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <h2 className="mt-0 text-start border-bottom">Transform<br /> <span>Your Roof Today!</span></h2>
                        </Col>
                        <Col lg={6}>
                            <p>Contact us today to learn more about how synthetic faux slate roofing can enhance your home&rsquo;s beauty, durability, and value. Let us help you create a roof that combines elegance with lasting performance.</p>
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
