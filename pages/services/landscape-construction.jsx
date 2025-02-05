/* Landscape Construction Services Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link'

// Custom Components
import { Head, Hero, Cards, Figure } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/services/landscapeConstruction.content'
import image from 'public/content/en_US/components/image.content'

export default function LandscapeConstructionServices() {

    return (
        <>

            <Head {...content} />
            <Hero {...content} />

            <section className="pb-0">
                <Container className="pb-0">
                    <Row className="align-items-center">
                        <Col lg={{ span: 6, order: 1 }}>
                            <Figure {...image.figure[34]} />
                        </Col>
                        <Col lg={{ span: 6, order: 0 }}>
                            <h2 data-aos="fade-up" className="text-start">Landscape Construction in Placer & Sacramento County</h2>
                            <div className="border-line-start"></div>
                            <p>Transform your outdoor space with expert craftsmanship and high-quality materials. At RMR Construction & Remodeling, we specialize in landscape construction that enhances both the beauty and functionality of your property. From durable hardscapes to custom-built outdoor features, we bring your vision to life with precision and care.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <h2 data-aos="fade-up">Our Landscape Construction Services</h2>
                    <div className="border-line-center"></div>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Driveways</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">Make a lasting first impression with a custom-designed driveway. We use premium materials such as concrete pavers, natural stone, and poured concrete to create driveways that are both stylish and durable.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Patios</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">Create an inviting outdoor space with a custom patio. Choose from stone pavers, stamped concrete, or brushed concrete to match your style and enhance your backyard’s functionality.
                        </p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}>
                            <h3 className="text-start text-white text-lg-end" data-aos="fade-right">Walkways</h3>
                        </Col>
                        <Col lg={7}
                        ><p className="border-left" data-aos="fade-left">Enhance safety and accessibility with professionally installed walkways. We offer paver and concrete walkways designed to complement your landscaping while providing a durable, slip-resistant surface.</p>
                        </Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Outdoor Steps</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">Connect different levels of your yard with beautifully crafted outdoor steps made from flagstone, Silvermist stone, or concrete pavers. Functional and visually appealing, they ensure smooth transitions between spaces.</p>
                        </Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Fire Pits</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">Add warmth and ambiance to your backyard with a custom-built fire pit. Available in round or square designs, our fire pits are crafted from natural or paving stones and can be wood-burning or gas-powered.</p>
                        </Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Outdoor Fireplaces</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">For a dramatic and cozy outdoor feature, choose a custom outdoor fireplace. Built with high-quality materials, these fireplaces provide warmth, elegance, and a focal point for your outdoor space.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Outdoor Kitchens</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">Take your cooking outdoors with a fully equipped custom outdoor kitchen. Our designs include grills, pizza ovens, smokers, and stone countertops, giving you a perfect space for entertaining.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Retaining Walls</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">Control erosion while adding structure and beauty with a custom retaining wall. Our walls, made from stackable blocks, paver blocks, or natural stone, can also incorporate raised planter beds for added appeal.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Seating Walls</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">Maximize seating options with a built-in seating wall. Made from durable stone or concrete blocks, these walls provide a stylish and long-lasting solution for outdoor gatherings.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Artificial Turf</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">Enjoy lush, green grass year-round without the maintenance. Our artificial turf installations are ideal for landscaping accents, play areas, and putting greens.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Landscape Lighting</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">Illuminate your outdoor space with low-voltage LED lighting. Our energy-efficient lighting solutions highlight your landscape’s best features and enhance nighttime safety.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Pergolas</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">Add shade and sophistication to your yard with a custom pergola. A perfect balance of style and function, pergolas create a beautiful setting for relaxation and entertainment.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Pavilions</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">For complete shade and weather protection, opt for a custom pavilion. Whether for hosting guests or enjoying quiet outdoor time, our pavilions provide elegant and durable coverage.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Arbors</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">Frame your garden or entrance with a charming arbor. Designed for beauty and shade, our custom arbors create an inviting focal point in any landscape.</p></Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
