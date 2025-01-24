/* Cedar Shakes Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link'

// Custom Components
import { Head, CustomHero, Cards, Figure } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/roof-types/cedarShakes.content'
import image from 'public/content/en_US/components/image.content'

export default function CedarShakes() {

    return (
        <>

            <Head {...content} />
            <CustomHero {...content} />

            <section>
                <Container>
                    <div className="d-block d-lg-none mb-5">
                        <h2>Timeless <span>Beauty</span></h2>
                        <h4>Reliability with <span>Cedar Roofing</span></h4>
                        <div className="border-line-center"></div>
                    </div>
                    <Row className="align-items-center">
                        <Col lg={{ order: 0, span: 6 }}>
                            <Figure className="left-shadow" {...image.figure[124]} />
                        </Col>
                        <Col lg={{ order: 1, span: 6 }}>
                            <div className="d-none d-lg-block">
                                <h2 className="text-start">Timeless <span>Beauty</span></h2>
                                <h4 className="text-start">Reliability with <span>Cedar Roofing</span></h4>
                                <div className="border-line-start"></div>
                            </div>
                            <p>With over 30 years of roofing expertise, Roseville Roofing is proud to be the trusted choice for high-quality cedar shake and shingle roofing solutions. Our commitment to craftsmanship and exceptional service has made us a go-to partner for homeowners across El Dorado, Placer, and Sacramento Counties.</p>
                            <p>Cedar shake roofing offers a blend of natural beauty, durability, and eco-friendliness that few materials can match. Its unique characteristics make it a top choice for homeowners seeking style and performance.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="bg-otis clip-right">
                <Container>
                    <h2>Why Choose <br /><span>Cedar Shake Roofing</span></h2>
                    <div className="border-line-center"></div>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Unmatched Natural Beauty</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="zoom-out-right">Cedar shake and shingle roofs boast a rustic charm with rich grain patterns and warm tones that elevate your home&rsquo;s curb appeal. From natural finishes to custom stains, cedar enhances both traditional and contemporary architectural styles.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Durability &amp; Weather Resistance</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="zoom-out-right">Cedar is naturally strong and resistant to severe weather, including high winds, heavy rain, hail, and snow. Properly maintained, cedar roofs can last for decades, providing reliable protection against Sacramento&rsquo;s unpredictable weather.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Superior Insulation</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="zoom-out-right">Cedar roofing naturally regulates indoor temperatures, keeping your home cooler in summer and warmer in winter. Its double-layered insulation properties reduce energy usage and cut down on heating and cooling costs.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Eco-Friendly &amp; Sustainable</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="zoom-out-right">Cedar is a renewable resource, biodegradable, and environmentally friendly. By choosing cedar roofing, you&rsquo;re making a sustainable choice that helps reduce your carbon footprint.</p></Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <div className="d-block d-lg-none mb-5">
                        <h2>Cedar Repair &amp;<br /><span>Replacement</span></h2>
                        <div className="border-line-center"></div>
                    </div>
                    <Row className="align-items-center">
                        <Col lg={{ order: 1, span: 6 }}>
                            <Figure className="right-shadow" {...image.figure[126]} />
                        </Col>
                        <Col lg={{ order: 0, span: 6 }}>
                            <div className="d-none d-lg-block">
                                <h2 className="text-start">Cedar Repair &amp;<br /><span>Replacement</span></h2>
                                <div className="border-line-start"></div>
                            </div>
                            <p>Cedar roofs require specialized care to maintain their beauty and functionality. Whether you need minor repairs, ongoing maintenance, or a full roof replacement, our certified team delivers precision and expertise.</p>
                            <p>At Roseville Roofing, we offer a wide range of customization options to ensure your cedar roof complements your home&rsquo;s style and meets your specific needs.</p>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="bg-otis clip-top-right">
                <Container>
                    <h2>Custom Cedar Roofs <br /><span>Designed for Your Home</span></h2>
                    <div className="border-line-center"></div>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Shingle or Shake Styles</h3></Col>
                        <Col lg={7}><p className="border-left">Opt for the clean, uniform look of cedar shingles or the textured, rugged appeal of cedar shakes. Both options deliver lasting protection with a style that suits your taste.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Variety of Finishes</h3></Col>
                        <Col lg={7}><p className="border-left">Choose from natural tones or stains that highlight the beauty of the wood while protecting it from weathering. Treated cedar options also enhance durability and color retention.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Tailored to Your Home&rsquo;s Architecture</h3></Col>
                        <Col lg={7}><p className="border-left">Whether your property features a traditional ranch style or sleek modern design, cedar roofing adapts seamlessly to any aesthetic. Our team helps you find the ideal match for your home&rsquo;s character.</p></Col>
                    </Row>
                </Container>
            </section>

            <section className="bg-home">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <h2 className="mt-0 text-start border-bottom">Your Trusted<br /><span>Cedar Roofing Experts</span></h2>
                        </Col>
                        <Col lg={6}>
                            <p>
                                Cedar shingles and shakes offer versatile styles, from the sleek, uniform design of shingles to the rustic charm of textured shakes. Available in natural finishes or enhanced with stains and treatments, they preserve and highlight wood&rsquo;s beauty. Contact us today to explore your options!</p>
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
