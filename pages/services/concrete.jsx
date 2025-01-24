/* Residential Services Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link'

// Custom Components
import { Head, CustomHero, Cards, Figure } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/services/residential.content'
import image from 'public/content/en_US/components/image.content'

export default function ResidentialServices() {

    return (
        <>

            <Head {...content} />
            <CustomHero {...content} />

            <section>
                <Container>
                    <div className="d-block d-lg-none mb-5">
                        <h2>Residential <span>Roofing</span></h2>
                        <h4>Protect Your Home <span>with Reliable Roofing Solutions</span></h4>
                        <div className="border-line-center"></div>
                    </div>
                    <Row className="align-items-center">
                        <Col lg={{ order: 1, span: 6 }}>
                            <Figure className="right-shadow" {...image.figure[111]} />
                        </Col>
                        <Col lg={{ order: 0, span: 6 }}>
                            <div className="d-none d-lg-block">
                                <h2 className="text-start">Residential <span>Roofing</span></h2>
                                <h4 className="text-start">Protect Your Home <span>with Reliable Roofing Solutions</span></h4>
                                <div className="border-line-start"></div>
                            </div>
                            <p>Your roof is your home&rsquo;s first line of defense against the elements. Over time, exposure to weather can cause leaks, damaged shingles, water stains, or even dry rot. Don&rsquo;t wait for small issues to turn into costly repairs—RMR Construction & Remodeling is here to help</p>
                            <p>With decades of experience serving homeowners in Sacramento, Placer, and El Dorado Counties, we provide tailored roofing solutions to keep your home safe and secure. Whether you need repairs, maintenance, or a full replacement, our team ensures every job is done with precision and care.</p>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="bg-otis clip-right">
                <Container>
                    <h2>Superior Residential<br /><span>Roofing Services</span></h2>
                    <div className="border-line-center"></div>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Roof Repairs</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-down-left">Fix leaks, storm damage, or general wear with durable, expert roof repairs. Our skilled team ensures your roof is restored to its optimal condition for long-term protection.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Roof Replacements</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-down-left">Upgrade your aging roof to improve both protection and visual appeal. We&rsquo;ll guide you in choosing premium roofing materials that enhance your home&rsquo;s value and durability.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">New Roof Installations</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-down-left">Expertly install reliable and long-lasting roofing systems for new homes. Our process ensures precision and quality from start to finish for maximum performance.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Specialty Roofing Options</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-down-left">Choose from PVC, TPO single-ply membranes, slate, tile, or metal standing seam roofing. These materials provide advanced protection and a stylish look tailored to your needs.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Maintenance Plans</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-down-left">Keep your roof in optimal condition with routine inspections and preventative care. Regular maintenance helps you avoid costly repairs and extend your roof&rsquo;s lifespan.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-lg-end">Roof Inspections</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-down-left">Gain peace of mind with a thorough evaluation of your roof&rsquo;s condition. Our detailed assessments help identify potential problems before they become major issues.</p></Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <h2>Why Homeowners <br /><span>Trust RMR Construction & Remodeling</span></h2>
                    <div className="border-line-center"></div>
                    <p>Since 1989, RMR Construction & Remodeling has been the trusted choice for residential roofing services in the Sacramento Valley and the surrounding areas. We are fully licensed and insured, and our skilled team brings extensive expertise to every roofing project. Whether it&rsquo;s a small roof repair or a complete roof replacement, we are committed to delivering exceptional quality, lasting value, and unparalleled customer care.</p>
                </Container>
            </section>

            <section className="bg-home">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <h2 className="mt-0 text-start border-bottom">Your Local<br /><span>Roofing Experts</span></h2>
                        </Col>
                        <Col lg={6}>
                            <p>Our service areas include Auburn, Carmichael, Citrus Heights, Davis, Fair Oaks, Folsom, Granite Bay, Loomis, Rocklin, Roseville, and Sacramento. From roof repairs to new installations, RMR Construction & Remodeling is dedicated to protecting your home with craftsmanship you can count on. Contact us for a free estimate and reliable roofing solutions to protect your home.</p>
                            <p className="my-4">
                                <Button as={Link} href="/contact/" variant="primary">Free Estimates</Button>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
