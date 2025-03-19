/* Walkways Services Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';

// Custom Components
import { Head, Hero, Cards, DoubleFigure, Figure, GalleryGrid } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/services/stainedStamped.content'
import image from 'public/content/en_US/components/image.content'

export default function StampedStainedConcrete() {

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
                            <h2 data-aos="fade-up" className="text-start">Transforming Concrete</h2>
                            <div className="border-line-start"></div>
                            <p>RMR Construction & Remodeling specializes in transforming ordinary concrete surfaces into visually striking and durable features. We use acid or water-based staining techniques to give concrete a range of colors and textures that mimic natural stone, brick, or wood. These stains enhance the look of driveways, patios, floors, and walkways while also protecting the concrete from wear, fading, and the elements.</p>
                            <p>We also offer stamping services that imprint patterns like cobblestone, slate, or tile into fresh concrete. This adds elegance to outdoor spaces such as pool decks and pathways. Stamped concrete is versatile, cost-effective, and customizable to match the client’s style and landscape.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="pb-0">
                <Container className="pb-0">
                    <h2 data-aos="fade-up">Benefits of Stained or Stamped Concrete:</h2>
                    <div className="border-line-center"></div>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Enhance Aesthetic Appeal</h3></Col>
                        <Col lg={7}><p className="fade-right" data-aos="fade-down-left">Stained and stamped concrete can mimic natural materials like stone, brick, or wood, adding beauty to any space.
                        </p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Durability</h3></Col>
                        <Col lg={7}><p className="fade-right" data-aos="fade-down-left">Concrete is long-lasting and resistant to wear, weather, and fading, making it ideal for high-traffic areas.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Cost-Effective</h3></Col>
                        <Col lg={7}><p className="fade-right" data-aos="fade-down-left">Stained and stamped concrete is a more affordable option compared to materials like natural stone or tile.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Low Maintenance</h3></Col>
                        <Col lg={7}><p className="fade-right" data-aos="fade-down-left">These surfaces are easy to clean and require minimal upkeep compared to other materials.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Customization</h3></Col>
                        <Col lg={7}><p className="fade-right" data-aos="fade-down-left">Both staining and stamping offer a wide range of colors, patterns, and finishes to suit any design vision.
                            Increased Property Value: Beautifully designed concrete surfaces can enhance the overall value and curb appeal of a property.
                        </p></Col>
                    </Row>
                    <Row>
                        <p className="mt-5">RMR Construction & Remodeling employ skilled professionals who handle all aspects of the process, from preparation to application. Whether it is a patio, floor design, or driveway, we will always deliver high-quality, durable results that enhance both the appearance and functionality of any property.</p>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <h2 data-aos="fade-up">Recent Projects</h2>
                    <div className="border-line-center"></div>
                    <p>At RMR Construction & Remodeling, we do more than just pour concrete. Our mission is to inspire homeowners to step outside, embrace their outdoor living spaces, and enjoy them for years to come.</p>
                    <p>Browse our gallery and get inspired for your next project!</p>
                    <GalleryGrid {...content} />
                </Container>
            </section>

        </>
    )
}