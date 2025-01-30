/* Irrigatin and Drainage Services Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link'

// Custom Components
import { Head, Hero, Cards, Figure } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/services/irrigationAndDrainage.content'
import image from 'public/content/en_US/components/image.content'

export default function IrrigationAndDrainage() {

    return (
        <>

            <Head {...content} />
            <Hero {...content} />

            <section>
                <Container>
                    <h2>Drainage & Irrigation Services in Roseville, CA</h2>
                    <p>A well-designed irrigation and drainage system is essential for maintaining a beautiful, functional outdoor space in Northern California. At RMR Construction & Remodeling, we specialize in custom water management solutions that prevent pooling, runoff, and inefficient water distribution—ensuring your landscape remains healthy, sustainable, and visually appealing.</p>
                    <p>With decades of experience, our team designs and installs precision irrigation systems to optimize water usage and drainage solutions that protect your property from water damage. Our goal is to enhance functionality and aesthetics, providing long-term benefits that make outdoor living effortless.</p>
                </Container>
            </section>

            <section>
                <Container>
                    <h2>Expert Drainage Solutions in Roseville, CA</h2>
                    <p>Poor drainage can lead to standing water, soil erosion, foundation damage, and even health hazards. Our expertly designed drainage systems eliminate these issues while seamlessly blending with your landscape.</p>
                    <h3>Our Drainage Services Include:</h3>
                    <ul>
                        <li><strong>French Drains –</strong> Redirect excess water away from your property</li>
                        <li><strong>Dry Creek Beds –</strong> Natural drainage solutions with visual appeal</li>
                        <li><strong>Area Drains –</strong> Prevent water accumulation in low-lying areas</li>
                        <li><strong>Retaining Walls –</strong> Manage soil erosion and stabilize slopes</li>
                    </ul>
                    <p>Beyond solving water issues, we transform problem areas into beautiful, functional outdoor spaces that enhance your property.</p>
                </Container>
            </section>

            <section>
                <Container>
                    <h2>Irrigation Services for Roseville & Surrounding Areas</h2>
                    <p>A properly installed irrigation system ensures your lawn and garden receive the precise amount of water needed to thrive—without waste. Our irrigation experts provide custom solutions tailored to your property’s unique layout and plant needs.</p>
                    <h3>Irrigation Services We Offer:</h3>
                    <ul>
                        <li><strong>Drip Irrigation Systems –</strong> Direct water to plant roots for maximum efficiency</li>
                        <li><strong>Spray Head Irrigation –</strong> Ensure even coverage across lawns and gardens</li>
                        <li><strong>Smart Irrigation Systems –</strong> Optimize water usage with advanced controls</li>
                        <li><strong>Irrigation Repairs & Upgrades –</strong> Improve efficiency and performance</li>
                    </ul>
                    <p>By integrating modern irrigation technology, we help homeowners reduce water waste, lower utility costs, and maintain a lush, green landscape year-round.</p>
                </Container>
            </section>

            <section>
                <Container>
                    <h2>Why Invest in Professional Drainage & Irrigation Systems?</h2>
                    <ul>
                        <li><strong>Protect Your Property –</strong> Prevent foundation damage, erosion, and water pooling</li>
                        <li><strong>Conserve Water –</strong> Precision irrigation minimizes waste and promotes sustainability</li>
                        <li><strong>Enhance Landscape Health –</strong> Ensure plants and lawns receive the right amount of water</li>
                        <li><strong>Reduce Maintenance –</strong> A well-planned system saves time and effort in lawn care</li>
                    </ul>
                    <p>With RMR Construction & Remodeling, you get expertly designed solutions tailored to your property’s topography, soil type, and climate—ensuring long-term efficiency and beauty.</p>
                </Container>
            </section>

            <section>
                <Container>
                    <h2>Drip Irrigation Installation in Placer County, CA</h2>
                    <p>Drip irrigation is one of the most water-efficient ways to keep your plants healthy. By delivering water directly to the root zone, it prevents overwatering, reduces water loss, and supports plant health.</p>
                    <p>Our team designs custom drip irrigation systems for flower beds, gardens, and large landscapes, ensuring maximum efficiency and coverage. Say goodbye to wasted water and hello to a thriving, eco-friendly landscape.</p>
                </Container>
            </section>

            <section>
                <Container>
                    <h2>Seamless Integration of Drainage & Irrigation</h2>
                    <p>A truly successful landscape design combines efficient drainage with optimized irrigation. Our experts analyze your property’s topography, soil, and climate to create systems that:</p>
                    <ul>
                        <li>Direct excess water away from structures</li>
                        <li>Ensure proper hydration for plants</li>
                        <li>Prevent erosion and runoff</li>
                        <li>Improve outdoor usability and aesthetics</li>
                    </ul>
                    <p>By integrating these systems from the start, we help homeowners achieve a sustainable, low-maintenance landscape.</p>
                </Container>
            </section>


            <section>
                <Container>
                    <h2>Schedule Your Drainage & Irrigation Installation Today</h2>
                    <p>At RMR Construction & Remodeling, we bring over three decades of expertise to every project. Whether you need a new installation, system upgrade, or repairs, we provide tailored solutions that fit your property and budget.</p>
                    <p>Call us today at 916-533-4758 to schedule a consultation and take the first step toward a healthier, more beautiful outdoor space.</p>
                </Container>
            </section>

        </>
    )
}
