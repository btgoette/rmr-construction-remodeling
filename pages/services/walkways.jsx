/* Walkways Services Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';

// Custom Components
import { Head, Hero, Cards, DoubleFigure, Figure, GalleryGrid } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/services/walkways.content'
import image from 'public/content/en_US/components/image.content'

export default function WalkwaysServices() {

    return (
        <>

            <Head {...content} />
            <Hero {...content} />

            <section className="pb-0">
                <Container className="pb-0">
                    <Row className="align-items-center">
                        <Col lg={{ span: 6, order: 1 }}>
                            <DoubleFigure image1={image.figure[49]} image2={image.figure[61]} />
                        </Col>
                        <Col lg={{ span: 6, order: 0 }}>
                            <h2 data-aos="fade-up" className="text-start">Concrete Walkways That Elevate Your Home’s Curb Appeal</h2>
                            <div className="border-line-start"></div>
                            <p>At RMR Construction & Remodeling, we specialize in expertly crafted concrete walkways that combine durability, functionality, and aesthetic appeal. More than just a path, a well-designed concrete walkway enhances the beauty and value of your property while providing a smooth, long-lasting surface for everyday use.</p>
                            <p>Whether you need a new installation or walkway repairs, our team brings expertise and quality craftsmanship to every project. Using high-grade materials and advanced techniques, we create walkways that stand the test of time.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="pb-0">
                <Container className="pb-0">
                    <h2 data-aos="fade-up">Our Concrete Walkway Installation Process</h2>
                    <div className="border-line-center"></div>
                    <div className="grid-hex">

                        <div className="block-1">
                            <div className="px-lg-2" data-aos="fade-in" data-aos-delay="100">
                                <h3 className="text-start">1. Consultation & Planning</h3>
                                <p>We start with an on-site consultation to discuss your ideas, assess your space, and develop a custom design that fits your needs. You’ll receive a detailed project quote so you know exactly what to expect.</p>
                            </div>
                        </div>


                        <div className="block-2" data-aos="fade-in" data-aos-delay="100">
                            <Figure {...image.figure[14]} />
                        </div>

                        <div className="block-3">
                            <div className="px-lg-2" data-aos="fade-in" data-aos-delay="200">
                                <h3 className="text-start">2. Site Preparation</h3>
                                <p>A strong foundation is crucial for a durable walkway. Our team clears and grades the area for proper drainage, secures necessary permits, and prepares the site to ensure structural integrity.</p>
                            </div>
                        </div>

                        <div className="block-4" data-aos="fade-in" data-aos-delay="200">
                            <Figure {...image.figure[25]} />
                        </div>

                        <div className="block-5">
                            <div className="px-lg-2" data-aos="fade-in" data-aos-delay="400">
                                <h3 className="text-start">3. Precision Installation</h3>
                                <p>Using top-quality concrete and expert techniques, we install your walkway with a flawless, even finish. Choose from textured, stamped, or smooth surfaces to achieve the perfect aesthetic for your home.</p>
                            </div>
                        </div>

                        <div className="block-6" data-aos="fade-in" data-aos-delay="400">
                            <Figure {...image.figure[13]} />
                        </div>
                    </div>
                </Container>
            </section>

            <section className="pb-0">
                <Container className="pb-0">
                    <h2 data-aos="fade-up">Why Choose RMR Construction & Remodeling for Your Walkway Project?</h2>
                    <div className="border-line-center"></div>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Over 14 Years of Expertise</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">With years of experience in walkway design, installation, and repair, we ensure superior craftsmanship and precision.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Premium Materials & Techniques</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">We use only the highest-quality concrete and industry-leading methods to provide long-lasting results with resistance to cracks and wear.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Custom Designs for Every Home</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">Whether you prefer a sleek modern look or a textured surface for added safety, we tailor our designs to match your vision.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Commitment to Excellence</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">Our team prioritizes meticulous attention to detail, reliability, and customer satisfaction at every stage of the project.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Hassle-Free Process</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">From permit approvals to final installation, we handle everything so you can enjoy a stress-free experience.</p></Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <h2 data-aos="fade-up">Recent Projects</h2>
                    <div className="border-line-center"></div>
                    <p>Don’t just take our word for it—explore our previous projects and see the transformation for yourself. From patios and pool decks to driveways, walkways, and porches, we bring your vision to life with expert craftsmanship and high-quality materials.</p>
                    <p>At RMR Construction & Remodeling, we do more than just pour concrete. Our mission is to inspire homeowners to step outside, embrace their outdoor living spaces, and enjoy them for years to come.</p>
                    <p>Browse our gallery and get inspired for your next project!</p>
                    <GalleryGrid {...content} />
                </Container>
            </section>

        </>
    )
}