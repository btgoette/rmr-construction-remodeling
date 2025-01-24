/* Stone Coated Steel Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link'

// Custom Components
import { Head, CustomHero, Cards, Figure } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/roof-types/stoneCoatedSteel.content'
import image from 'public/content/en_US/components/image.content'

export default function StoneCoatedSteel() {

    return (
        <>

            <Head {...content} />
            <CustomHero {...content} />

            <section>
                <Container>
                    <div className="d-block d-lg-none mb-5">
                        <h2>Stone-Coated<br /><span>Steel Roofing</span></h2>
                        <div className="border-line-center"></div>
                    </div>
                    <Row className="align-items-center">
                        <Col lg={{ order: 0, span: 6 }}>
                            <Figure className="left-shadow" {...image.figure[156]} />
                        </Col>
                        <Col lg={{ order: 1, span: 6 }}>
                            <div className="d-none d-lg-block">
                                <h2 className="text-start">Stone-Coated<br /><span>Steel Roofing</span></h2>
                                <div className="border-line-start"></div>
                            </div>
                            <p>Since 1989, Roseville Roofing has been a trusted leader in the stone-coated steel roofing industry, providing exceptional solutions to homeowners throughout Sacramento and surrounding areas. Our service area includes Placer, El Dorado, and Sacramento Counties and cities of Auburn, Carmichael, Citrus Heights, Davis, Fair Oaks, Folsom, Granite Bay, Loomis, Rocklin, and Sacramento.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="bg-otis clip-right">
                <Container>
                    <h2>What is Stone-Coated<br /><span>Steel Roofing?</span></h2>
                    <div className="border-line-center"></div>
                    <p>Stone-coated steel panels are crafted using aluminum-zinc alloy-coated steel, designed to replicate the look of classic roofing materials such as shingles, tiles, and wood shakes. These panels are pressed into various profiles to create distinctive textures and styles. They are lightweight, freeze/thaw resistant, and require minimal maintenance, making them a practical and visually appealing choice for any home. Stone-coated steel roofing offers an innovative and highly durable alternative to traditional materials like wood shakes, clay tiles, and asphalt shingles. Engineered for strength and versatility, this roofing option combines aesthetic appeal with unmatched performance.</p>
                </Container>
            </section>

            <section>
                <Container>
                <div className="d-block d-lg-none mb-5">
                        <h2>Stone-Coated<br /><span>Steel Tile</span></h2>
                        <div className="border-line-center"></div>
                    </div>
                    <Row className="align-items-center">
                        <Col lg={{ order: 1, span: 6 }}>
                            <Figure className="right-shadow" {...image.figure[157]} />
                        </Col>
                        <Col lg={{ order: 0, span: 6 }}>
                            <div className="d-none d-lg-block">
                                <h2 className="text-start">Stone-Coated<br /><span>Steel Tile</span></h2>
                                <div className="border-line-start"></div>
                            </div>
                            <p>Stone-coated steel tiles combine strength and elegance, mimicking the timeless look of Italian tiles. Durable yet lightweight, they offer easy maintenance and walkability, with long-lasting performance and customizable colors to suit your style.</p>
                            <p>For those who appreciate the look of architectural shingles, stone-coated steel shingles provide the same appeal with thicker cut edges and deep shadows, offering the charm of heavyweight shingles at a lighter weight.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="bg-home">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <h2 className="mt-0 text-start border-bottom">Upgrade Your Roof<br /> <span>with Roseville Roofing!</span></h2>
                        </Col>
                        <Col lg={6}>
                            <p>Whether you&rsquo;re looking to enhance your home&rsquo;s curb appeal or invest in a roofing system built to last, stone-coated steel roofing is a smart choice. Contact Roseville Roofing today to learn more about our expert installation, repair, and replacement services. Let us help you create a roof that combines timeless beauty with modern durability.</p>
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
