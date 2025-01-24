/* Roof Replacements Services Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link'

// Custom Components
import { Head, CustomHero, Cards, Figure } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/services/roofReplacements.content'
import image from 'public/content/en_US/components/image.content'

export default function RoofReplacementsServices() {

    return (
        <>

            <Head {...content} />
            <CustomHero {...content} />

            <section>
                <Container>
                    <div className="d-block d-lg-none mb-5">
                        <h2>Expert<br /><span>Roof Replacements</span></h2>
                        <div className="border-line-center"></div>
                    </div>
                    <Row className="align-items-center">
                        <Col lg={{ order: 1, span: 6 }}>
                            <Figure className="right-shadow" {...image.figure[138]} />
                        </Col>
                        <Col lg={{ order: 0, span: 6 }}>
                            <div className="d-none d-lg-block">
                                <h2 className="text-start">Expert<br /><span>Roof Replacements</span></h2>
                                <div className="border-line-start"></div>
                            </div>
                            <p>A durable, well-maintained roof is essential for protecting your home or business from the elements. In Placer, El Dorado, and Sacramento County, roofs face challenges like harsh weather, aging, and everyday wear and tear, eventually leading to compromised performance. When roof repairs are no longer sufficient, a full roof replacement is the best way to safeguard your property and maintain its structural integrity.</p>
                            <p>At Roseville Roofing, we specialize in providing high-quality roof replacements tailored to your needs. Whether you are upgrading a worn-out roof or installing a durable, beautiful roof on a new build, our experienced team will guide you through every step of the process, offering personalized solutions to fit your style and budget.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="bg-otis clip-right">
                <Container>
                    <h2>The Roof<br /><span>Replacement Process</span></h2>
                    <div className="border-line-center"></div>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Inspection & Assessment</h3></Col>
                        <Col lg={7}><p className="border-left">We thoroughly evaluate your roof&rsquo;s condition to identify any issues. Based on our findings, we recommend the best course of action to address your needs.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Material Selection</h3></Col>
                        <Col lg={7}><p className="border-left">Choose from a variety of high-quality materials that fit your preferences. We offer options to suit different budgets and styles.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Removal & Installation</h3></Col>
                        <Col lg={7}><p className="border-left">Our team carefully removes your old roof to avoid any damage. We then install the new roof with precision and attention to detail.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Final Inspection</h3></Col>
                        <Col lg={7}><p className="border-left">We perform a final inspection to ensure that all work meets our high standards. This includes checking for both durability and visual appeal.</p></Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <h2>The Importance<br /><span>of Roof Replacement</span></h2>
                    <div className="border-line-center"></div>
                    <p>Your roof serves as your home&rsquo;s first line of defense against rain, wind, hail, and extreme temperatures. Over time, even the most durable roofs can deteriorate, leading to leaks, water damage, and structural concerns. When roof repairs are no longer sufficient, a roof replacement ensures your property remains safe, secure, and energy-efficient.</p>
                    <p>If you&rsquo;re experiencing issues such as missing or damaged shingles, persistent leaks, sagging areas, or your roof is 20 years or older, it may be time for a new roof. Schedule an inspection with Roseville Roofing to evaluate its condition and explore your replacement options.</p>
                </Container>
            </section>

            <section className="bg-otis clip-right">
                <Container>
                    <h2>Why Choose<br /><span>Roseville Roofing?</span></h2>
                    <div className="border-line-center"></div>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Expertise & Experience </h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="zoom-out-down">With over three decades of experience in roof replacements, we bring unmatched knowledge and skill to every roofing project. Our team is equipped to handle even the most complex roofing challenges with ease and precision.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Superior Craftsmanship</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="zoom-out-down">We take great pride in our meticulous attention to detail. Each roof replacement is completed to the highest standards, ensuring long-lasting durability and a visually appealing finish.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Timely Completion</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="zoom-out-down">We understand that disruptions to your daily life can be inconvenient. Our team is committed to completing each roofing project on schedule, minimizing any inconvenience for you and your family.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Exceptional Customer Service</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="zoom-out-down">From start to finish, we provide friendly, responsive support to keep you informed and at ease. Our team is always available to answer your questions and address any concerns throughout the roofing process.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Comprehensive Warranties</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="zoom-out-down">We offer robust warranties that cover both materials and workmanship. This gives you peace of mind knowing that your investment is protected for years to come.</p></Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <h2>Premium Materials<br /><span>for Lasting Protection</span></h2>
                    <div className="border-line-center"></div>
                    <p>We partner with leading manufacturers like Owens Corning, GAF, Bartile, and CertainTeed to provide top-quality roofing materials that meet the highest standards in the industry. These trusted brands ensure that your new roof is built to withstand the toughest weather conditions while maintaining its aesthetic appeal. From asphalt shingles to durable metal roofing, we offer a wide variety of options designed for both longevity and style. Whether you&rsquo;re looking for a traditional look or a more modern, sleek design, our materials will not only enhance your home&rsquo;s curb appeal but also provide dependable protection for years to come.</p>
                </Container>
            </section>

            <section className="bg-home">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <h2 className="mt-0 text-start border-bottom">Ready to<br /> <span>Replace Your Roof?</span></h2>
                        </Col>
                        <Col lg={6}>
                            <p>From the initial inspection to the final touches, Roseville Roofing makes roof replacement a seamless and stress-free experience. Contact Roseville Roofing today for a consultation and discover why we&rsquo;re the trusted name in roof replacement across Placer, El Dorado, and Sacramento County.</p>
                            <p className="my-4">
                                <Button as={Link} href="/contact/" variant="primary">Contact Us</Button>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
