/* Asphalt Composition Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link'

// Custom Components
import { Head, CustomHero, Cards, Figure } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/roof-types/asphaltComposition.content'
import image from 'public/content/en_US/components/image.content'

export default function AsphaltComposition() {

    return (
        <>

            <Head {...content} />
            <CustomHero {...content} />
            <section>
                <Container>
                    <div className="d-block d-lg-none mb-5">
                        <h2>Asphalt <br/><span>Composition Roofing</span></h2>
                        <h4>The Perfect Balance of <span>Affordability &amp; Durability</span></h4>
                        <div className="border-line-center"></div>
                    </div>
                    <Row className="align-items-center">
                        <Col lg={{ order: 1, span: 6 }}>
                            <Figure className="right-shadow" {...image.figure[121]} />
                        </Col>
                        <Col lg={{ order: 0, span: 6 }}>
                            <div className="d-none d-lg-block">
                                <h2 className="text-start">Asphalt <br/><span>Composition Roofing</span></h2>
                                <h4 className="text-start">The Perfect Balance of <span>Affordability &amp; Durability</span></h4>
                                <div className="border-line-start"></div>
                            </div>
                            <p>Asphalt composition roofing is one of the most popular roofing options for homeowners and businesses alike, offering a cost-effective solution without compromising on quality or appearance. At Roseville Roofing, we specialize in the installation, repair, and maintenance of asphalt composition roofs that stand the test of time.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="bg-otis clip-right">
                <Container>
                    <div className="d-block d-lg-none mb-5">
                        <h2>What is Asphalt <span>Composition Roofing</span></h2>
                        <div className="border-line-center"></div>
                    </div>
                    <Row className="align-items-center">
                        <Col lg={{ order: 0, span: 6 }}>
                            <Figure className="left-shadow" {...image.figure[104]} />
                        </Col>
                        <Col lg={{ order: 1, span: 6 }}>
                            <div className="d-none d-lg-block">
                                <h2 className="text-start">What is Asphalt <span>Composition Roofing</span></h2>
                                <div className="border-line-start"></div>
                            </div>
                            <p>Asphalt composition shingles are crafted from a blend of asphalt, fiberglass, and mineral granules. This combination creates a durable, water-resistant roofing material that provides excellent protection against the elements. Available in a wide range of styles, colors, and textures, asphalt shingles can complement any architectural design.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <div className="d-block d-lg-none mb-5">
                        <h2>Types of <br /><span>Asphalt Shingles</span></h2>
                        <div className="border-line-center"></div>
                    </div>
                    <Row className="align-items-center">
                        <Col lg={{ order: 1, span: 6 }}>
                            <Figure className="right-shadow" {...image.figure[119]} />
                        </Col>
                        <Col lg={{ order: 0, span: 6 }}>
                            <div className="d-none d-lg-block">
                                <h2 className="text-start">Types of<br /><span>Asphalt Shingles</span></h2>
                                <div className="border-line-start"></div>
                            </div>
                            <p>Three-tab shingles are a classic and economical choice, providing a clean and uniform appearance that suits many homes. Architectural shingles, on the other hand, are thicker and more textured, creating a dimensional look that mimics the elegance of wood or slate. For those seeking the best in performance and aesthetics, premium shingles offer enhanced durability, longer warranties, and unique styles that set your roof apart.</p>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="bg-otis clip-top-right">
                <Container>
                    <h2>Benefits of <br /><span>Asphalt Composition Roofing</span></h2>
                    <div className="border-line-center"></div>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Cost Effective</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="zoom-out-left">Asphalt shingles are an affordable option compared to other roofing materials, making them an excellent choice for budget-conscious homeowners.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Durability</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="zoom-out-left">Designed to withstand extreme weather conditions, including heavy rain, wind, and sun exposure.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Versatility</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="zoom-out-left">Choose from a variety of colors and styles to enhance the curb appeal of your home or business.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Low Maintenance</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="zoom-out-left">Minimal upkeep is required, saving you time and money over the life of your roof.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Energy Efficiency</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="zoom-out-left">Reflective shingles are available to help reduce energy costs by keeping your building cooler.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Easy Installation</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="zoom-out-left">Asphalt shingles are lightweight and straightforward to install, reducing labor costs and project timelines.</p></Col>
                    </Row>
                </Container>
            </section>

            <section className="bg-home">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <h2 className="mt-0 text-start border-bottom">Your Trusted<br /><span>Asphalt Roofing Experts</span></h2>
                        </Col>
                        <Col lg={6}>
                            <p>
                            With decades of expertise, Roseville Roofing ensures your asphalt composition roof is installed with precision and care. From choosing the perfect shingles for your new roof to providing ongoing maintenance, we deliver exceptional results. Contact us today for a free consultation and protect your property with a durable, attractive roof.</p>
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
