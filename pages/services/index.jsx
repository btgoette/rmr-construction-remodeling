/* Services Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';

// Custom Components
import { Head, Hero, CardsOverlay, Figure } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/services/services.content'
import image from 'public/content/en_US/components/image.content'

export default function Services() {

    return (
        <>

            <Head {...content} />
            <Hero {...content} />

            <section>
                <Container>
                    <h2>Expert Outdoor Construction & Landscaping Services</h2>
                    <p>Transform your backyard into a stunning, functional space where you can relax, entertain, and create lasting memories. At RMR Construction & Remodeling, we specialize in designing and building outdoor environments that enhance your home’s beauty, comfort, and value. Whether you’re looking for elegant hardscaping, custom outdoor structures, or durable concrete solutions, we bring expertise and craftsmanship to every project.</p>
                </Container>
            </section>

            <section>
                <Container>
                    <h2>Our Comprehensive Services</h2>

                    <h3>Landscape Construction</h3>
                    <p>From concept to completion, we offer full-scale landscape design and construction services tailored to homeowners in Placer and Sacramento County. Whether you envision a serene garden, a modern patio, or a fully equipped outdoor kitchen, we’ll make it a reality.</p>

                    <h3>Concrete Services</h3>
                    <p>RMR Construction & Remodeling delivers top-notch concrete solutions and expert craftsmanship. From driveways and walkways to patios and pool decks, we provide a wide range of concrete services.</p>

                    <h3>Stamped & Stained Concrete</h3>
                    <p>Upgrade your outdoor surfaces with decorative concrete solutions that combine style, strength, and affordability. Stamped or stained concrete mimics high-end materials like stone and brick while providing long-lasting durability.</p>

                    <h3>Artificial Turf Installation</h3>
                    <p>Say goodbye to mowing and watering with our low-maintenance, eco-friendly artificial turf solutions. Our high-quality turf looks and feels like real grass, providing a lush, green lawn year-round.</p>

                    <h3>Custom Wood Structures</h3>
                    <p>Enhance the privacy and aesthetics of your outdoor space with custom-designed wood structures. Whether it is a fence, pergola, arbor, or deck, we'll create the perfect addition to your yard.</p>

                    <h3>Outdoor Fireplaces & Kitchens</h3>
                    <p>Create the perfect setting for entertaining with a custom outdoor kitchen, fire pit, or fireplace. Whether you're hosting a barbecue or enjoying a cozy evening outdoors, we’ll design a space that fits your lifestyle.</p>

                    <h3>Driveways</h3>
                    <p>Your driveway is more than just a parking spot, it's the first impression of your home. Let us create a stunning, durable driveway that makes a WOW statement to visitors and neighbors alike.</p>

                    <h3>Drainage & Irrigation Solutions</h3>
                    <p>Proper water management is essential for a healthy and beautiful yard. Our drainage and irrigation services protect your landscape from erosion and overwatering while ensuring your plants thrive.</p>

                    <h3>Walkways</h3>
                    <p>Professional walkway installation adds both charm and accessibility to your outdoor space. Whether you need a new walkway or an upgrade, we’re here to help.</p>

                    <h3>Patio Installation</h3>
                    <p>Looking for the ideal space for relaxation and entertainment? Our expert patio installation services create a perfect outdoor area for all your social gatherings.</p>
                </Container>
            </section>

            <section>
                <Container>
                    <h2>Why Choose RMR Construction & Remodeling?</h2>
                    <p>With years of experience and a commitment to quality, we take pride in creating outdoor spaces that are functional, visually stunning, and built to last. No matter the size or scope of your project, we are dedicated to exceeding expectations with expert craftsmanship and personalized service.</p>
                </Container>
            </section>

            <section>
                <Container>
                    <h2>Let’s Bring Your Vision to Life</h2>
                    <p>Ready to transform your outdoor space? Contact RMR Construction & Remodeling today to discuss your project or schedule an estimate.</p>
                    <p>Call us at 916-533-4758 to get started!</p>
                </Container>
            </section>

        </>
    )
}
