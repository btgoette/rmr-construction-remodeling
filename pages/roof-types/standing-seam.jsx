/* Standing Seam Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Row, Col, Accordion, Button } from 'react-bootstrap';
import Link from 'next/link';

// Custom Components
import { Head, CustomHero, Cards, Figure } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/roof-types/standingSeam.content'
import image from 'public/content/en_US/components/image.content'

export default function StandingSeam() {

    return (
        <>

            <Head {...content} />
            <CustomHero {...content} />

            <section>
                <Container>
                    <div className="d-block d-lg-none mb-5">
                        <h2>Standing Seam<br /><span>Metal Roofing</span></h2>
                        <div className="border-line-center"></div>
                    </div>
                    <Row className="align-items-center">
                        <Col lg={{ order: 1, span: 6 }}>
                            <Figure className="right-shadow" {...image.figure[154]} />
                        </Col>
                        <Col lg={{ order: 0, span: 6 }}>
                            <div className="d-none d-lg-block">
                                <h2 className="text-start">Standing Seam<br /><span>Metal Roofing</span></h2>
                                <div className="border-line-start"></div>
                            </div>
                            <p>At Roseville Roofing, we proudly serve as a trusted leader in metal roofing across Placer, El Dorado, and Sacramento County. From Auburn and Rocklin to Fair Oaks and Sacramento, we deliver expert metal roofing solutions tailored to meet the needs of homeowners and businesses throughout Northern California.</p>
                            <p>Specializing in the roof installation, roof repair, and roof replacement of metal roofs, Roseville Roofing ensures every project aligns with your specific requirements. Renowned for their durability and longevity, metal roofs are an investment in long-term protection and aesthetic appeal. For homeowners, selecting features such as Class 4 impact-resistant metal roofing can provide not only peace of mind but also potential discounts on homeowner&rsquo;s insurance.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="bg-otis clip-right">
                <Container>
                    <h2>The Benefits of <span>Metal Roofing</span></h2>
                    <div className="border-line-center"></div>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Lightweight Yet Strong</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="zoom-in-down">Combines exceptional strength with a lightweight design that minimizes strain on your home&rsquo;s structure, making it an ideal choice for both new construction and retrofitting projects without requiring additional structural support.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Eco-Friendly</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="zoom-in-down">Crafted from recyclable materials, this roofing solution is environmentally sustainable, helping to reduce waste and your overall carbon footprint while delivering long-lasting protection for your home or business.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Weather-Resistant</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="zoom-in-down">Engineered to withstand high winds, heavy hail, intense heat, and freezing temperatures, this roofing material ensures your home remains safe and secure under a wide variety of challenging weather conditions.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Fire Safety</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="zoom-in-down">With a high fire-resistance rating, this roofing material provides excellent protection against fire hazards, giving homeowners peace of mind and potentially qualifying for discounts on home insurance policies.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Versatile Styles &amp; Colors</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="zoom-in-down">Available in a broad array of colors and styles, this roofing option seamlessly complements any architectural design, allowing homeowners to create a roof that reflects their personal style and enhances curb appeal.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Low Maintenance</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="zoom-in-down">Built for longevity, this roofing material requires minimal maintenance over its lifespan, saving homeowners time and effort while ensuring the roof maintains its performance and appearance for decades.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Energy-Efficient</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="zoom-in-down">Designed to reflect solar heat, this roofing material reduces the need for air conditioning and helps lower energy costs, making it an excellent choice for sustainability and energy savings in warmer climates.</p></Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <div className="d-block d-lg-none mb-5">
                        <h2>Why Choose<br /><span>Metal Roofing?</span></h2>
                        <div className="border-line-center"></div>
                    </div>
                    <Row className="align-items-center">
                        <Col lg={{ order: 0, span: 6 }}>
                            <Figure className="left-shadow" {...image.figure[153]} />
                        </Col>
                        <Col lg={{ order: 1, span: 6 }}>
                            <div className="d-none d-lg-block">
                                <h2 className="text-start">Why Choose<br /><span>Metal Roofing?</span></h2>
                                <div className="border-line-start"></div>
                            </div>
                            <p>Metal roofing stands out not only for its aesthetic versatility but also for its impressive longevity. These roofs can last two to three times longer than traditional asphalt shingles. With a wide range of styles and colors, metal roofing enhances curb appeal while providing unmatched durability and ease of maintenance.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="bg-otis clip-top-right">
                <Container>
                    <div className="d-block d-lg-none mb-5">
                        <h2>Thermal Efficiency &<br /><span>Cooling Benefits</span></h2>
                        <div className="border-line-center"></div>
                    </div>
                    <Row className="align-items-center">
                        <Col lg={{ order: 1, span: 6 }}>
                            <Figure className="right-shadow" {...image.figure[71]} />
                        </Col>
                        <Col lg={{ order: 0, span: 6 }}>
                            <div className="d-none d-lg-block">
                                <h2 className="text-start">Thermal Efficiency &<br /><span>Cooling Benefits</span></h2>
                                <div className="border-line-start"></div>
                            </div>
                            <p>Metal roofs are engineered for superior thermal performance, making them an excellent choice for the California climate. These roofs heat up and cool down quickly, helping to maintain a cooler indoor temperature during hot summers. Galvanized standing seam metal roofs are particularly effective, reflecting sunlight to divert heat and reduce energy costs.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="bg-home">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <h2 className="mt-0 text-start border-bottom">Your Local<br /> <span>Metal Roofing Experts!</span></h2>
                        </Col>
                        <Col lg={6}>
                            <p>Whether you&rsquo;re protecting your home or business, Roseville Roofing is your trusted partner for all your metal roofing needs. Contact us today to learn how a standing seam metal roof can provide lasting durability, energy savings, and style that elevates the value of your property.</p>
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
