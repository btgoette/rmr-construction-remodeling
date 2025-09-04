/* Services Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';

// Custom Components
import { Head, Hero, CardsWithIcon, Figure } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/service-area/serviceArea.content'
import image from 'public/content/en_US/components/image.content'

export default function ServiceArea() {

    return (
        <>

            <Head {...content} />
            <Hero {...content} />

            <section className="pb-0">
                <Container className="pb-0">
                    <Row className="align-items-center">
                        <Col lg={{ span: 6, order: 1 }}>
                            <Figure {...image.figure[7]} />
                        </Col>
                        <Col lg={{ span: 6, order: 0 }}>
                            <h2 data-aos="fade-up" className="text-start">Our Service area:</h2>
                            <div className="border-line-start"></div>
                            <p>
                                <Link
                                    href="/service-area/concrete-contractor-granitebay/"
                                    target="top"
                                    title="RMR Construction & Remodeling Concrete Contractor Granite Bay CA">
                                    Concrete Contractor in Granite Bay, CA</Link><br />
                                <Link
                                    href="/service-area/concrete-contractor-lincoln/"
                                    target="top"
                                    title="RMR Construction & Remodeling Concrete Contractor Lincoln CA">
                                    Concrete Contractor in Lincoln, CA</Link><br />
                                <Link
                                    href="/service-area/concrete-contractor-rocklin/"
                                    target="top"
                                    title="RMR Construction & Remodeling Concrete Contractor Rocklin CA">
                                    Concrete Contractor in Rocklin, CA</Link><br />
                                <Link
                                    href="/service-area/concrete-contractor-roseville/"
                                    target="top"
                                    title="RMR Construction & Remodeling Concrete Contractor Roseville CA">
                                    Concrete Contractor in Roseville, CA</Link><br /><br />
                                <Link
                                    href="/service-area/concrete-granitebay/"
                                    target="top"
                                    title="RMR Construction & Remodeling Concrete Granite Bay CA">
                                    Concrete Granite Bay, CA</Link><br />
                                <Link
                                    href="/service-area/concrete-lincoln/"
                                    target="top"
                                    title="RMR Construction & Remodeling Concrete Lincoln CA">
                                    Concrete Lincoln, CA</Link><br />
                                <Link
                                    href="/service-area/concrete-Rocklin/"
                                    target="top"
                                    title="RMR Construction & Remodeling Concrete Rocklin CA">
                                    Concrete Rocklin, CA</Link><br />
                                <Link
                                    href="/service-area/concrete-roseville/"
                                    target="top"
                                    title="RMR Construction & Remodeling Concrete Roseville CA">
                                    Concrete Roseville, CA</Link><br />
                            </p>
                        </Col>
                    </Row>
                    <Row><h4 data-aos="fade-up" className="my-5">Proudly Serving Roseville and the Surrounding Area</h4></Row>
                </Container>
            </section>

        </>
    )
}
