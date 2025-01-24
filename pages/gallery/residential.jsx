/* Residential Gallery Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Custom Components
import { Head, CustomHero, GalleryGrid, Figure } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/gallery/residentialGallery.content'

export default function ResidentialGalleryPage() {

    return (
        <>

            <Head {...content} />
            <CustomHero {...content} />

            <section>
                <Container>
                    <h2>Residential <span>Gallery</span></h2>
                    <h4>Enhancing Homes, <span>One Roof at a Time</span></h4>
                    <div className="border-line-center"></div>
                    <p className="mb-5">Browse through our portfolio of residential roofing projects, where elegance seamlessly meets functionality. From contemporary upgrades that elevate a home&rsquo;s style to preserving the timeless charm of classic roofs, each project showcases our dedication to quality and craftsmanship. At Roseville Roofing, we take great care in ensuring that every roof not only enhances the aesthetic appeal of your home but also provides reliable protection. Whether it&rsquo;s a new installation or a roof replacement, our work is a testament to our commitment to durability, beauty, and attention to detail. Explore our completed projects to see how we transform homes with roofs that stand the test of time.</p>
                    <GalleryGrid {...content} />
                </Container>
            </section>


        </>
    )
}
