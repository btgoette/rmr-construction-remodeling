/* Driveways Services Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link'

// Custom Components
import { Head, Hero, Cards, Figure } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/services/driveways.content'
import image from 'public/content/en_US/components/image.content'

export default function DrivewaysServices() {

    return (
        <>

            <Head {...content} />
            <Hero {...content} />

            <section>
                <Container>
                    <h2>High-Quality Concrete Driveways in Roseville, CA</h2>
                    <p>Your driveway is more than just a place to park—it’s a key feature of your home’s curb appeal and functionality. At RMR Construction & Remodeling, we specialize in designing and installing durable, visually stunning concrete driveways that enhance the beauty and value of your property. Whether you're building a new driveway, need repairs, or want to upgrade your existing surface with a decorative overlay, our expert team is here to deliver superior craftsmanship.</p>
                </Container>
            </section>

            <section>
                <Container>
                    <h2>Custom Driveway Designs to Suit Your Home</h2>
                    <p>We understand that every home is unique, which is why we offer a variety of concrete driveway solutions tailored to your preferences. From classic poured concrete to decorative stamped finishes, we create stylish, slip-resistant driveways that provide long-lasting durability and enhanced tire grip for safety in wet conditions.</p>

                    <ul>
                        <li><strong>Stamped Concrete –</strong> Mimic the look of brick, stone, or pavers for an elegant finish.</li>
                        <li><strong>Poured Concrete –</strong> A seamless, modern surface for a clean, polished look.</li>
                        <li><strong>Custom Patterns & Colors –</strong> Personalize your driveway with unique designs and finishes.</li>
                    </ul>
                </Container>
            </section>

            <section>
                <Container>
                    <h2>Why Choose a Concrete Driveway?</h2>
                    <p>When comparing concrete, asphalt, brick, or stone, concrete offers the best combination of durability, affordability, and aesthetics:</p>
                    <ul>
                        <li><strong>Cost-Effective –</strong> More budget-friendly than brick or natural stone.</li>
                        <li><strong>Low Maintenance –</strong> Minimal upkeep compared to other materials.</li>
                        <li><strong>Long-Lasting –</strong> Can last up to 50 years with proper care.</li>
                        <li><strong>Heavy Load Support –</strong> Withstands high traffic and heavy vehicles.</li>
                        <li><strong>Cooler Surface –</strong> Reflects sunlight, reducing heat absorption.</li>
                        <li><strong>Better Traction –</strong> Provides superior grip, even in wet weather.</li>
                    </ul>
                </Container>
            </section>

            <section>
                <Container>
                    <h2>Your Trusted Concrete Driveway Contractor in Placer County</h2>
                    <p>At RMR Construction & Remodeling, we take pride in our exceptional craftsmanship, honesty, and customer satisfaction. Whether you need a new driveway installation, concrete repairs, or a decorative overlay, we are here to help.</p>
                    <p>Contact us today for a free consultation and let’s transform your driveway into a stunning, functional entryway to your home.</p>
                </Container>
            </section>

        </>
    )
}
