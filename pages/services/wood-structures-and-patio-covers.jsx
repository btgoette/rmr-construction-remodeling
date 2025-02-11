/* Wood Strctures and Patio Covers Services Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link'

// Custom Components
import { Head, Hero, Cards, DoubleFigure, Figure } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/services/woodStructuresAndPatioCovers.content'
import image from 'public/content/en_US/components/image.content'

export default function WoodStructuresAndPatioCoversServices() {

    return (
        <>

            <Head {...content} />
            <Hero {...content} />

            <section className="pb-0">
                <Container className="pb-0">
                    <Row className="align-items-center">
                        <Col lg={{ span: 6, order: 0 }}>
                            <DoubleFigure image1={image.figure[33]} image2={image.figure[6]} />
                        </Col>
                        <Col lg={{ span: 6, order: 1 }}>
                            <h2 data-aos="fade-up" className="text-start">Custom Patios & <br />Wood Structures</h2>
                            <div className="border-line-start"></div>
                            <p>At RMR Construction & Remodeling, we specialize in creating beautiful, functional outdoor spaces that enhance your home and allow you to enjoy the California sunshine while staying cool and comfortable. Whether you&apos;re looking to add shade with a pergola, define your space with a custom arbor, or protect your outdoor living area with a stylish patio cover or fencing, our expert team is here to bring your vision to life. We take pride in designing and building durable, high-quality outdoor structures that complement your home&apos;s unique style while adding both aesthetic appeal and long-lasting value. Let us help you create the perfect backyard retreat for relaxation, entertaining, and making lasting memories.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="pb-0">
                <Container className="pb-0">
                    <Row className="align-items-center">
                        <Col lg={{ span: 6, order: 1 }}>
                            <Figure {...image.figure[30]} />
                        </Col>
                        <Col lg={{ span: 6, order: 0 }}>
                            <h2 data-aos="fade-up" className="text-start mb-0">Arbors & Pergolas</h2>
                            <h3 className="text-start text-white mt-0">Elegant Shade & Style</h3>
                            <div className="border-line-start"></div>
                            <p>A custom&#45;built arbor or pergola enhances your outdoor space by adding beauty, shade, and sophistication while creating a welcoming atmosphere. These structures are perfect for shaded seating areas, allowing you to enjoy the outdoors comfortably without direct sun exposure. They also serve as elegant garden accents, framing your landscaping with a stylish entrance. Beyond aesthetics, pergolas and arbors can increase your home’s value by adding timeless curb appeal. Our team specializes in designing and building custom outdoor structures that seamlessly blend with your landscape, providing a tranquil and inviting retreat for relaxation and entertainment.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="pb-0">
                <Container className="pb-0">
                    <Row className="align-items-center">
                        <Col lg={{ span: 6, order: 0 }}>
                            <Figure {...image.figure[32]} />
                        </Col>
                        <Col lg={{ span: 6, order: 1 }}>
                            <h2 data-aos="fade-up" className="text-start mb-0">Patio Covers</h2>
                            <h3 className="text-start text-white mt-0">Enjoy the Outdoors in Comfort</h3>
                            <div className="border-line-start"></div>
                            <p>Beat the summer heat with a custom patio cover that offers the perfect balance of shade, protection, and style. Whether you prefer a fully covered patio for maximum shelter or an open-beam wood structure for a more airy, natural feel, we design patio covers that seamlessly blend with your home&apos;s architecture. Beyond aesthetics, our patio covers provide essential shade and weather protection, allowing you to enjoy your outdoor space comfortably in any season. Let us help you create the ideal patio cover for relaxation, entertaining, and making the most of your outdoor living experience year&#45;round.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={{ span: 6, order: 1 }}>
                            <Figure {...image.figure[17]} />
                        </Col>
                        <Col lg={{ span: 6, order: 0 }}>
                            <h2 data-aos="fade-up" className="text-start mb-0">Fencing Solutions</h2>
                            <h3 className="text-start text-white mt-0">Beauty, Privacy & Security</h3>
                            <div className="border-line-start"></div>
                            <p>A well&#45;crafted fence not only defines your property but also enhances its privacy, security, and overall aesthetic appeal. At RMR Construction & Remodeling, we provide custom fencing solutions designed to meet your specific needs, whether you&apos;re looking for privacy fencing to create a secluded retreat, safety fencing to protect children and pets, or pool fencing that meets safety regulations without compromising style. For those seeking a decorative touch, we also design elegant fencing that enhances your landscape&apos;s beauty. Using high-quality materials and expert craftsmanship, we build durable fences that stand the test of time while complementing your home&apos;s unique style.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
