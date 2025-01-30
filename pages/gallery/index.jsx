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

            <section>
                <Container>
                    <h2>Gallery – RMR Construction & Remodeling</h2>
                    <p>Welcome to our gallery! At RMR Construction & Remodeling, we take pride in delivering exceptional landscape construction services that turn your vision into reality. Whether you need concrete walkways, driveways, patios, custom wood structures, outdoor kitchens, drainage and irrigation, landscape design and consulting, artificial turf installation, retaining walls, pavers, or more—we’re your all-in-one solution!</p>
                    <p>Our experienced team is dedicated to transforming outdoor spaces into beautiful, functional environments tailored to your unique needs.</p>
                    <p>Explore our projects below to see the quality and craftsmanship that set us apart. You might even find inspiration for your own outdoor project!</p>
                    <GalleryGrid {...content} />
                </Container>
            </section>

            <section>
                <Container>
                    <h2>Why Choose RMR Construction & Remodeling?</h2>
                    <ul>
                        <li><strong>Experienced Team –</strong> As a family-owned business, we bring generations of expertise, creativity, and a passion for excellence to every project.</li>

                        <li><strong>Customized Solutions –</strong> Every project is uniquely designed to meet your specific needs and vision—ensuring no two projects are alike.</li>

                        <li><strong>Quality Materials –</strong> We use only the highest-quality materials for long-lasting results and stunning finishes.</li>

                        <li><strong>Attention to Detail –</strong> From initial concept to final completion, we meticulously craft every detail to exceed your expectations.</li>
                    </ul>
                </Container>
            </section>

            <section>
                <Container>
                    <h2>Contact RMR Construction & Remodeling Today!</h2>
                    <p>Ready to transform your outdoor space? Let’s bring your dream landscape to life!</p>
                    <p>Call us today to schedule your consultation and get started with RMR Construction & Remodeling.</p>
                </Container>
            </section>

        </>
    )
}
