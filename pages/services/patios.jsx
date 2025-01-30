/* Patios Services Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link'

// Custom Components
import { Head, Hero, Cards, Figure } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/services/patios.content'
import image from 'public/content/en_US/components/image.content'

export default function PatiosServices() {

    return (
        <>

            <Head {...content} />
            <Hero {...content} />

            <section>
                <Container>
                    <h2>Transform Your Outdoor Space with Custom Patios & Wood Structures in Roseville, CA</h2>
                    <p>At RMR Construction & Remodeling, we specialize in creating beautiful, functional outdoor spaces that allow you to enjoy the California sunshine while staying cool and comfortable. Whether you’re looking for a pergola, arbor, patio cover, or custom fencing, our expert team will design and build a stunning outdoor retreat tailored to your home’s unique style.</p>
                </Container>
            </section>

            <section>
                <Container>
                    <h2>Arbors & Pergolas – Elegant Shade & Style</h2>
                    <p>A custom-built arbor or pergola enhances your outdoor space with beauty, shade, and sophistication. These structures are perfect for:</p>

                    <ul>
                        <li><strong>Shaded seating areas –</strong> Enjoy the outdoors without direct sun exposure.</li>
                        <li><strong>Garden accents –</strong> Frame your landscaping with an elegant entrance.</li>
                        <li><strong>Increased home value –</strong> A timeless feature that adds curb appeal.</li>
                    </ul>
                    <p>Our team designs and builds custom pergolas and arbors that blend seamlessly with your landscape, providing a tranquil, inviting atmosphere.</p>
                </Container>
            </section>

            <section>
                <Container>
                    <h2>Patio Covers – Enjoy the Outdoors in Comfort</h2>
                    <p>Beat the summer heat with a custom patio cover designed to provide shade, protection, and style. Whether you want a fully covered patio or an open-beam wood structure, we create patio covers that:</p>

                    <ul>
                        <li>Blend with your home’s architecture</li>
                        <li>Provide shade and weather protection</li>
                        <li>Enhance your outdoor living experience</li>
                    </ul>
                    <p>Let us help you design the perfect patio cover for relaxation, entertaining, and enjoying the outdoors all year round.</p>
                </Container>
            </section>

            <section>
                <Container>
                    <h2>Fencing Solutions – Beauty, Privacy & Security</h2>
                    <p>A well-crafted fence not only defines your property but also enhances its privacy, security, and aesthetic appeal. At RMR Construction & Remodeling, we offer custom fencing solutions tailored to your needs, whether for:</p>
                    <ul>
                        <li><strong>Privacy fencing –</strong> Enjoy seclusion and peace in your yard.</li>
                        <li><strong>Pet & child safety –</strong> Keep your loved ones secure.</li>
                        <li><strong>Pool fencing –</strong> Meet safety regulations while maintaining style.</li>
                        <li><strong>Decorative fencing –</strong> Add a touch of elegance to your landscape.</li>
                    </ul>
                    <p>We use high-quality materials and expert craftsmanship to build fences that stand the test of time.</p>
                </Container>
            </section>

            <section>
                <Container>
                    <h2>Create Your Dream Outdoor Living Space Today</h2>
                    <p>At RMR Construction & Remodeling, we bring years of experience and dedication to every project, ensuring your outdoor space is both functional and visually stunning. Whether you need a custom patio cover, pergola, arbor, or fencing, our team is ready to help.</p>
                    <p>Contact us today to schedule a free consultation and start designing your dream outdoor living area!</p>
                </Container>
            </section>

        </>
    )
}
