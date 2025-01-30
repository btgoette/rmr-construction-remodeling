/* Walkways Services Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';

// Custom Components
import { Head, Hero, Cards, Figure, Gallery } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/services/walkways.content'
import image from 'public/content/en_US/components/image.content'

export default function WalkwaysServices() {

    return (
        <>

            <Head {...content} />
            <Hero {...content} />

            <section>
                <Container>
                    <h2>Concrete Walkways That Elevate Your Home’s Curb Appeal</h2>
                    <p>At RMR Construction & Remodeling, we specialize in expertly crafted concrete walkways that combine durability, functionality, and aesthetic appeal. More than just a path, a well-designed concrete walkway enhances the beauty and value of your property while providing a smooth, long-lasting surface for everyday use.</p>
                    <p>Whether you need a new installation or walkway repairs, our team brings expertise and quality craftsmanship to every project. Using high-grade materials and advanced techniques, we create walkways that stand the test of time.</p>
                </Container>
            </section>

            <section>
                <Container>
                    <h2>Why Choose RMR Construction & Remodeling for Your Walkway Project?</h2>
                    <ul>
                        <li><strong>Over 14 Years of Expertise –</strong> With years of experience in walkway design, installation, and repair, we ensure superior craftsmanship and precision.</li>

                        <li><strong>Premium Materials & Techniques –</strong> We use only the highest-quality concrete and industry-leading methods to provide long-lasting results with resistance to cracks and wear.</li>

                        <li><strong>Custom Designs for Every Home –</strong> Whether you prefer a sleek modern look or a textured surface for added safety, we tailor our designs to match your vision.</li>

                        <li><strong>Commitment to Excellence –</strong> Our team prioritizes meticulous attention to detail, reliability, and customer satisfaction at every stage of the project.</li>

                        <li><strong>Hassle-Free Process –</strong> From permit approvals to final installation, we handle everything so you can enjoy a stress-free experience.</li>
                    </ul>

                </Container>
            </section>

            <section>
                <Container>
                    <h2>Our Concrete Walkway Installation Process</h2>
                    <h3>1. Consultation & Planning</h3>
                    <p>We start with an on-site consultation to discuss your ideas, assess your space, and develop a custom design that fits your needs. You’ll receive a detailed project quote so you know exactly what to expect.</p>

                    <h3>2. Site Preparation</h3>
                    <p>A strong foundation is key to a durable, long-lasting walkway. Our team will:</p>
                    <ul>
                        <li>Clear and grade the area for proper drainage.</li>
                        <li>Secure permits if needed.</li>
                        <li>Prepare the site to ensure structural integrity.</li>
                    </ul>

                    <h3>Precision Installation</h3>
                    <p>Using top-quality concrete and expert techniques, we install your walkway with a flawless, even finish. Choose from textured, stamped, or smooth surfaces to achieve the perfect aesthetic for your home.</p>
                </Container>
            </section>

            <section>
                <Container>
                    <h2>Recent Projects</h2>
                    <p>Don’t just take our word for it—explore our previous projects and see the transformation for yourself. From patios and pool decks to driveways, walkways, and porches, we bring your vision to life with expert craftsmanship and high-quality materials.</p>
                    <p>At RMR Construction & Remodeling, we do more than just pour concrete. Our mission is to inspire homeowners to step outside, embrace their outdoor living spaces, and enjoy them for years to come.</p>
                    <p>Browse our gallery and get inspired for your next project!</p>
                    <GalleryGrid {...content} />
                </Container>
            </section>

            <section>
                <Container>
                    <h2>Enhance Your Outdoor Space with a Custom Concrete Walkway</h2>
                    <p>A well-designed walkway does more than connect spaces—it enhances the beauty and usability of your yard. Whether you need a straight, curved, or decorative walkway, RMR Construction & Remodeling has the expertise to bring your vision to life.</p>
                    <p>Contact us today to schedule a consultation and start your walkway project with Roseville’s trusted concrete experts!</p>
                </Container>
            </section>

        </>
    )
}