/* Testimonials Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Custom Components
import { Head, CustomHero, YelpReviews, GoogleReviews, Figure } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/testimonials/testimonials.content'

export default function Testimonials() {

    return (
        <>

            <Head {...content} />
            <CustomHero {...content} />

            <section>
                <Container>
                    <h2>Why Your Neighbors<br/><span>Trust Roseville Roofing</span></h2>
                    <div className="border-line-center"></div>
                    <p className="mb-5">Homeowners and businesses throughout the region trust Roseville Roofing for dependable, high-quality roofing services that stand the test of time. With a steadfast commitment to exceptional craftsmanship and personalized customer care, we have earned a reputation for reliability and excellence in the roofing industry. Whether it&rsquo;s a small repair, routine maintenance, or a complete roof replacement, our skilled team is dedicated to delivering results that not only protect but also enhance the value and appearance of your property. But don&rsquo;t just take our word for it—hear from your neighbors who have experienced firsthand the professionalism, expertise, and satisfaction that come with every roofing project we undertake.</p>
                    <GoogleReviews {...content} /><br />
                    <YelpReviews {...content} />
                </Container>
            </section>

        </>
    )
}
