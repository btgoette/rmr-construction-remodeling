/* Commercial Gallery Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Custom Components
import { Head, CustomHero, GalleryGrid, Figure } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/gallery/commercialGallery.content'

export default function CommercialGalleryPage() {

    return (
        <>

            <Head {...content} />
            <CustomHero {...content} />

            <section>
                <Container>
                    <h2>Commercial <span>Gallery</span></h2>
                    <h4>Excellence in <span>Commercial Roofing</span></h4>
                    <div className="border-line-center"></div>
                    <p className="mb-5">Explore our comprehensive commercial roofing solutions, designed to safeguard and elevate your business property. Whether you&rsquo;re looking for a robust, long-lasting roof or an aesthetically striking design to make a statement, our projects reflect the high standards of durability, functionality, and visual appeal that we uphold in every commercial endeavor. From large-scale installations to custom roof designs, Roseville Roofing brings professionalism, reliability, and attention to detail to every project. Our roofs are not only built to withstand the toughest weather but also enhance the overall appearance of your business, ensuring that your property stands out for years to come.</p>
                    <GalleryGrid {...content} />
                </Container>
            </section>

        </>
    )
}
