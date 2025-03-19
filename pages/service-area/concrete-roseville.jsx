/* Concrete Contracotr Concrete services Roseville service area city  Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link'

// Custom Components
import { Head, Hero, Cards, DoubleFigure, Figure } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/service-area/concreteRoseville.content'
import image from 'public/content/en_US/components/image.content'

export default function ConcreteServicesRoseville() {

    return (
        <>

            <Head {...content} />
            <Hero {...content} />

            <section className="pb-0">
                <Container className="pb-0">
                    <Row className="align-items-center">
                        <Col lg={{ span: 6, order: 0 }}>
                            <DoubleFigure image1={image.figure[39]} image2={image.figure[9]} />
                        </Col>
                        <Col lg={{ span: 6, order: 1 }}>
                            <h2 data-aos="fade-up" className="text-start">Expert Concrete Services in Roseville, CA</h2>
                            <div className="border-line-start"></div>
                            <p>Enhance your Roseville home with high&#45;quality, durable concrete solutions from RMR Construction & Remodeling. Whether you are upgrading your Roseville driveway, designing a custom patio, or installing walkways for improved accessibility, our expert team ensures precision and excellence in every project. We specialize in residential concrete installations, combining durability, aesthetics, and functionality to elevate your outdoor spaces in Roseville, CA.</p>
                            <p>With top&#45;tier materials and cutting&#45;edge techniques, we deliver long&#45;lasting, visually appealing concrete work that withstands time and weather. From consultation to completion, we prioritize your vision, crafting concrete solutions that enhance your Roseville home&apos;s value and curb appeal.</p>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section>
                <Container>
                    <h2 data-aos="fade-up">Our Residential Concrete Services in Roseville</h2>
                    <div className="border-line-center"></div>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Concrete Driveways</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">Upgrade your curb appeal with a custom concrete driveway in Roseville that is built to last. Designed for strength, durability, and low maintenance, our driveways withstand heavy use and harsh weather while offering a sleek, modern look.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Concrete Patios</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">Create an inviting outdoor space with a custom&#45;designed patio in Roseville. Whether you&apos;re hosting guests or enjoying a quiet evening, our patios provide beauty, comfort, and functionality that complement your home&apos;s style.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}>
                            <h3 className="text-start text-white text-lg-end" data-aos="fade-right">Sidewalks & Pathways</h3>
                        </Col>
                        <Col lg={7}
                        ><p className="border-left" data-aos="fade-left">Improve accessibility and boost your landscape&apos;s charm in Rosevillewith expertly crafted concrete sidewalks and pathways. Our seamless installations ensure both safety and aesthetic appeal.</p>
                        </Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Concrete Pool Decks</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">Enhance your Roseville home&apos;s pool area with a slip&#45;resistant, stylish pool deck. Built for durability and comfort, our concrete pool decks create the perfect space for relaxation and entertainment.</p>
                        </Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Stamped Concrete</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">Achieve the look of stone, brick, or wood at a fraction of the cost with stamped concrete in Roseville. This decorative option combines durability and elegance, ideal for patios, driveways, and walkways.</p>
                        </Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Concrete Replacement</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">Is your concrete in Roseville cracked or deteriorating? Our concrete replacement services restore your surfaces by removing damaged concrete and installing fresh, high&#45;quality replacements built to last.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Concrete Repair</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">Revitalize your existing concrete with our expert repair services in Roseville. We fix cracks, chips, and structural issues, ensuring your concrete remains strong and visually appealing.</p></Col>
                    </Row>
                </Container>
            </section>


            <section className="pb-0">
                <Container className="pb-0">
                    <Row className="align-items-center">
                        <Col className="mb-5">
                            <h2 data-aos="fade-up" className="text-start">Concrete Contractor in Roseville, CA</h2>
                            <div className="border-line-start"></div>
                            <p className="mb-5">Best Concrete Contractor in Roseville CA, Concrete and Masonry Contractor Roseville California, Concrete Contractor Roseville CA, Roseville Concrete Solutions, Concrete Solutions Roseville, Concrete Contractors - Roseville, Concrete Contractor in Roseville CA, Roseville Concrete Contractors, Concrete Contractors Near Me, Top-Rated Concrete Services, Concrete Contractor, Concrete Services Roseville CA, Stained Concrete Roseville, Stamped Concrete Roseville, Concrete Walkway Roseville, Concrete Driveway Roseville, Concrete Patio Roseville, RMR Construction & Remodeling Roseville CA</p>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}
