/* Concrete Services Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link'

// Custom Components
import { Head, Hero, Cards, Figure } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/services/concrete.content'
import image from 'public/content/en_US/components/image.content'

export default function ConcreteServices() {

    return (
        <>

            <Head {...content} />
            <Hero {...content} />

            <section>
                <Container>
                    <h2>Expert Concrete Services by RMR Construction & Remodeling</h2>
                    <p>Enhance your home with high-quality, durable concrete solutions from RMR Construction & Remodeling. Whether you're upgrading your driveway, designing a custom patio, or installing walkways for improved accessibility, our expert team ensures precision and excellence in every project. We specialize in residential concrete installations, combining durability, aesthetics, and functionality to elevate your outdoor spaces.</p>
                    <p>With top-tier materials and cutting-edge techniques, we deliver long-lasting, visually appealing concrete work that withstands time and weather. From consultation to completion, we prioritize your vision, crafting concrete solutions that enhance your home’s value and curb appeal.</p>
                </Container>
            </section>

            <section>
                <Container>
                    <h2>Why Choose RMR Construction & Remodeling?</h2>
                    <ul>
                        <li><strong>Skilled Professionals –</strong> With years of expertise, we ensure flawless execution on every project.</li>
                        <li><strong>Premium Materials –</strong> We use high-quality concrete for durability and superior performance.</li>
                        <li><strong>Tailored Solutions –</strong> Every project is customized to fit your home’s unique style and needs.</li>
                        <li><strong>On-Time Completion –</strong> We work efficiently to deliver quality results within your timeline.</li>
                        <li><strong>Competitive Pricing –</strong> Enjoy top-tier craftsmanship at affordable rates.</li>
                    </ul>
                </Container>
            </section>

            <section>
                <Container>
                    <h2>Our Residential Concrete Services</h2>

                    <h3>Concrete Driveways</h3>
                    <p>Upgrade your curb appeal with a custom concrete driveway that’s built to last. Designed for strength, durability, and low maintenance, our driveways withstand heavy use and harsh weather while offering a sleek, modern look.</p>

                    <h3>Concrete Patios</h3>
                    <p>Create an inviting outdoor space with a custom-designed patio. Whether you're hosting guests or enjoying a quiet evening, our patios provide beauty, comfort, and functionality that complement your home’s style.</p>

                    <h3>Sidewalks & Pathways</h3>
                    <p>Improve accessibility and boost your landscape’s charm with expertly crafted concrete sidewalks and pathways. Our seamless installations ensure both safety and aesthetic appeal.</p>

                    <h3>Concrete Pool Decks</h3>
                    <p>Enhance your pool area with a slip-resistant, stylish pool deck. Built for durability and comfort, our concrete pool decks create the perfect space for relaxation and entertainment.</p>

                    <h3>Stamped Concrete</h3>
                    <p>Achieve the look of stone, brick, or wood at a fraction of the cost with stamped concrete. This decorative option combines durability and elegance, ideal for patios, driveways, and walkways.</p>

                    <h3>Concrete Replacement</h3>
                    <p>Is your concrete cracked or deteriorating? Our concrete replacement services restore your surfaces by removing damaged concrete and installing fresh, high-quality replacements built to last.</p>

                    <h3>Concrete Repair</h3>
                    <p>Revitalize your existing concrete with our expert repair services. We fix cracks, chips, and structural issues, ensuring your concrete remains strong and visually appealing.</p>

                </Container>
            </section>

            <section>
                <Container>
                    <h2>Get Started Today</h2>
                    <p>Ready to enhance your home with professional concrete services? Contact RMR Construction & Remodeling today for a consultation. Let’s bring your vision to life with durable, high-quality concrete installations that elevate your home’s beauty, functionality, and value.</p>
                    <p>Call us at (916) 533-4758 or email us to schedule a consultation today!</p>
                </Container>
            </section>

        </>
    )
}
