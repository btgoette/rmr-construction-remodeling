/* Recent Projects Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Script from 'next/script'

// Custom Components
import { Head, Hero, GalleryGrid, Figure } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/gallery/gallery.content'

export default function RecentProjectsPage() {

    return (
        <>

            <Head {...content} />
            <Hero {...content} />

            <section className="pb-0">
                <Container className="pb-0">
                    <h2 data-aos="fade-up" className="mb-0">Our Project Gallery</h2>
                    <h3 className="mt-0 text-white">RMR Construction & Remodeling</h3>
                    <div className="border-line-center"></div>
                    <p>Welcome to our gallery! At RMR Construction & Remodeling, we take pride in delivering exceptional landscape construction services that turn your vision into reality. Whether you need concrete walkways, driveways, patios, custom wood structures, outdoor kitchens, drainage and irrigation, landscape design and consulting, artificial turf installation, retaining walls, pavers, or more, we are your all-in-one solution! Our experienced team is dedicated to transforming outdoor spaces into beautiful, functional environments tailored to your unique needs.</p>
                    <h4 className="mt-5">Explore our projects below to see the quality and craftsmanship that set us apart.<br /> You might even find inspiration for your own outdoor project!</h4>
                    <GalleryGrid {...content} />
                </Container>
            </section>

            <section>
                <Container>
                    <h2 data-aos="fade-up">Why Choose RMR Construction & Remodeling?</h2>
                    <div className="border-line-center"></div>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Experienced Team</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left"> As a family-owned business, we bring generations of expertise, creativity, and a passion for excellence to every project.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Customized Solutions</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left"> Every project is uniquely designed to meet your specific needs and vision—ensuring no two projects are alike.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Quality Materials</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">We use only the highest-quality materials for long-lasting results and stunning finishes.</p></Col>
                    </Row>
                    <Row className="align-items-center py-2">
                        <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Attention to Detail</h3></Col>
                        <Col lg={7}><p className="border-left" data-aos="fade-left">From initial concept to final completion, we meticulously craft every detail to exceed your expectations.</p></Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}
