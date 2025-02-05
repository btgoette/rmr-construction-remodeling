/* Irrigatin and Drainage Services Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link'

// Custom Components
import { Head, Hero, Cards, DoubleFigure, Figure } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/services/irrigationAndDrainage.content'
import image from 'public/content/en_US/components/image.content'

export default function IrrigationAndDrainage() {

    return (
        <>

            <Head {...content} />
            <Hero {...content} />

            <section className="pb-0">
                <Container className="pb-0">
                    <Row className="align-items-center">
                        <Col lg={{ span: 6, order: 0 }}>
                            <DoubleFigure image1={image.figure[18]} image2={image.figure[23]} />
                        </Col>
                        <Col lg={{ span: 6, order: 1 }}>
                            <h2 data-aos="fade-up" className="text-start">Drainage & Irrigation Services in Roseville, CA</h2>
                            <div className="border-line-center"></div>
                            <p>A well-designed irrigation and drainage system is essential for maintaining a beautiful, functional outdoor space in Northern California. At RMR Construction & Remodeling, we specialize in custom water management solutions that prevent pooling, runoff, and inefficient water distribution—ensuring your landscape remains healthy, sustainable, and visually appealing.</p>
                            <p>With decades of experience, our team designs and installs precision irrigation systems to optimize water usage and drainage solutions that protect your property from water damage. Our goal is to enhance functionality and aesthetics, providing long-term benefits that make outdoor living effortless.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="pb-0">
                <Container className="pb-0">
                    <h2 data-aos="fade-up">Expert Drainage Solutions</h2>
                    <div className="border-line-center"></div>
                    <p>Poor drainage can lead to standing water, soil erosion, foundation damage, and even health hazards. Our expertly designed drainage systems eliminate these issues while seamlessly blending with your landscape. Beyond solving water issues, we transform problem areas into beautiful, functional outdoor spaces that enhance your property. Our Drainage Services Include:</p>

                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">French Drains</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">Redirecting excess water away from your property helps prevent water damage to your foundation and landscape. This solution ensures that water flows safely away from your home and structures.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Dry Creek Bed</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">Dry creek beds offer a natural drainage solution that blends seamlessly with your landscape. They also add a visually appealing element, enhancing your outdoor aesthetic.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Area Drains</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">Area drains are designed to prevent water accumulation in low-lying areas of your property. This ensures that standing water doesn't damage your lawn or garden.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Retaining Walls</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">Retaining walls are effective at managing soil erosion by holding back unstable soil. They also stabilize slopes, keeping your landscape intact and preventing shifting ground.</p></Col>
                    </Row>
                </Container>
            </section>

            <section className="pb-0">
                <Container className="pb-0">
                    <Row className="align-items-center">
                        <Col lg={{ span: 6, order: 1 }}>
                            <Figure {...image.figure[10]} />
                        </Col>
                        <Col lg={{ span: 6, order: 0 }}>
                            <h2 data-aos="fade-up" className="text-start">Why Invest in Professional Drainage & Irrigation Systems?</h2>
                            <div className="border-line-start"></div>
                            <p>Protect your property, conserve water, and enhance your landscape health with a precision irrigation system from RMR Construction & Remodeling. Our expertly designed solutions prevent foundation damage, erosion, and water pooling while ensuring your plants and lawns receive the right amount of water. With a well-planned system, you'll also reduce maintenance time and effort. Tailored to your property's unique topography, soil type, and climate, our irrigation systems provide long-term efficiency and beauty.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="pb-0">
                <Container className="pb-0">
                    <h2 data-aos="fade-up">Irrigation Services for Roseville & Surrounding Areas</h2>
                    <div className="border-line-center"></div>
                    <p>A properly installed irrigation system ensures your lawn and garden receive the precise amount of water needed to thrive—without waste. Our irrigation experts provide custom solutions tailored to your property’s unique layout and plant needs. By integrating modern irrigation technology, we help homeowners reduce water waste, lower utility costs, and maintain a lush, green landscape year-round. Irrigation Services We Offer:</p>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Drip Irrigation Systems</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">Directing water to plant roots ensures that your plants receive the hydration they need at the most effective level. This targeted approach maximizes water efficiency, promoting healthy growth.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Spray Head Irrigation</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">Ensuring even coverage across lawns and gardens prevents dry spots and water wastage. This balanced irrigation helps your landscape thrive with consistent hydration.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Smart Irrigation Systems</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">Advanced controls optimize water usage by adjusting schedules and flow rates based on environmental conditions. This system minimizes waste and maximizes the effectiveness of every drop.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Irrigation Repairs & Upgrades</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">Improving efficiency and performance through a well-designed irrigation system reduces the amount of water needed. This leads to a healthier landscape and a more sustainable water usage plan.</p></Col>
                    </Row>
                </Container>
            </section>

            <section className="pb-0">
                <Container className="pb-0">
                    <Row className="align-items-center">
                        <Col lg={{ span: 6, order: 0 }}>
                            <Figure {...image.figure[35]} />
                        </Col>
                        <Col lg={{ span: 6, order: 1 }}>
                            <h2 data-aos="fade-up" className="text-start">Drip Irrigation Installation in Placer County, CA</h2>
                            <div className="border-line-start"></div>
                            <p>Drip irrigation is one of the most water-efficient ways to keep your plants healthy. By delivering water directly to the root zone, it prevents overwatering, reduces water loss, and supports plant health. Our team designs custom drip irrigation systems for flower beds, gardens, and large landscapes, ensuring maximum efficiency and coverage. Say goodbye to wasted water and hello to a thriving, eco-friendly landscape.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={{ span: 6, order: 1 }}>
                            <Figure {...image.figure[64]} />
                        </Col>
                        <Col lg={{ span: 6, order: 0 }}>
                            <h2 data-aos="fade-up" className="text-start">Seamless Integration of Drainage & Irrigation</h2>
                            <div className="border-line-start"></div>
                            <p>A successful landscape design seamlessly combines efficient drainage with optimized irrigation. Our experts analyze your property’s topography, soil, and climate to create systems that direct excess water away from structures, ensure proper hydration for plants, prevent erosion and runoff, and improve both outdoor usability and aesthetics. By integrating these systems from the start, we help homeowners achieve a sustainable, low-maintenance landscape that thrives year-round.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}
