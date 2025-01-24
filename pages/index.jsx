/* Home Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import Link from 'next/link'

// Custom Components
import { Head, CustomJumbotron, ContactForm, Figure, CardsSlider, ReviewsSlider, CustomGalleryGrid } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/home.content'
import image from 'public/content/en_US/components/image.content'

export default function Home() {

  return (
    <>

      <Head {...content} />
      <CustomJumbotron {...content} />

      <section>
        <Container>
          <div className="d-block d-lg-none mb-5">
            <h2>About <span>Us</span></h2>
            <div className="border-line-center"></div>
          </div>
          <Row className="align-items-center">
            <Col lg={{ order: 1, span: 6 }}>
              <Figure className="right-shadow" {...image.figure[19]} />
            </Col>
            <Col lg={{ order: 0, span: 6 }}>
              <div className="d-none d-lg-block">
                <h2 className="text-start">About <span>Us</span></h2>
                <div className="border-line-start"></div>
              </div>
              <p>For over three decades, RMR Construction & Remodeling has been the trusted roofing provider in Sacramento, CA, and surrounding areas. Established in 1989, we bring unparalleled expertise to every project, serving both residential and commercial clients across El Dorado, Placer, and Sacramento Counties. Our deep understanding of California&rsquo;s climate challenges, from intense summer heat to heavy storms, enables us to deliver roofing solutions designed for long-term performance. When you choose RMR Construction & Remodeling, you are partnering with a team dedicated to craftsmanship, reliability, and customer satisfaction.</p>
              <p className="mt-5">
                <Button as={Link} href="/about/" variant="primary">Learn More</Button>
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bg-otis clip-right">
        <Container>
          <h2>Why choose <br /><span>RMR Construction & Remodeling?</span></h2>
          <div className="border-line-center"></div>
          <Row className="align-items-center py-2">
            <Col lg={5}><h3 className="text-start text-lg-end">Commitment to Excellence</h3></Col>
            <Col lg={7}><p className="border-left" data-aos="fade-up">At RMR Construction & Remodeling, we are dedicated to exceeding customer expectations on every project. Our focus on delivering exceptional service ensures that your roofing needs are met with precision and care.</p></Col>
          </Row>
          <Row className="align-items-center py-2">
            <Col lg={5}><h3 className="text-start text-lg-end">Unmatched Quality</h3></Col>
            <Col lg={7}><p className="border-left" data-aos="fade-up">We pride ourselves on using the best materials and techniques to provide durable, long-lasting roofs. Our meticulous attention to detail guarantees a finished product that stands the test of time.</p></Col>
          </Row>
          <Row className="align-items-center py-2">
            <Col lg={5}><h3 className="text-start text-lg-end">Owens Corning Preferred Contractor</h3></Col>
            <Col lg={7}><p className="border-left" data-aos="fade-up">As a trusted Owens Corning contractor, we bring industry-leading materials and advanced training to every job. This partnership ensures reliable roofing solutions you can depend on in Roseville and the surrounding area.</p></Col>
          </Row>
          <Row className="align-items-center py-2">
            <Col lg={5}><h3 className="text-start text-lg-end">CertainTeed Select Shingle Master</h3></Col>
            <Col lg={7}><p className="border-left" data-aos="fade-up">Our team has earned one of the industry&rsquo;s highest certifications, showcasing expertise in installing CertainTeed&rsquo;s premium roofing products. This ensures your roof delivers exceptional performance and protection for years to come.</p></Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <h2>Our <span>Services</span></h2>
          <div className="border-line-center"></div>
          <p className="text-center mx-w-lg">RMR Construction & Remodeling offers a full range of roofing services designed to meet the specific needs of both residential and commercial properties. Whether it&rsquo;s minor repairs or a complete roof replacement, our team provides solutions that combine durability, style, and value to ensure your property is well-protected and visually appealing.</p>
          <CardsSlider {...content} />
        </Container>
      </section>

      <section className="bg-home">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h2 className="mt-0 text-start border-bottom">Get<br /> <span>Free Estimates!</span></h2>
            </Col>
            <Col lg={6}>
              <p>Whether you need a roof inspection, roof repair, roof replacement, or new roof installation, we are here to help. Our team works with industry-leading materials to ensure superior results every time.</p>
              <p className="my-4">
                <Button as={Link} href="/contact/" variant="primary">Free Estimates</Button>
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bg-otis">
        <Container>
          <h2>Our Recent <span>Projects</span></h2>
          <div className="border-line-center"></div>
          <p className="text-center mx-w-lg mb-4">RMR Construction & Remodeling delivers exceptional roofing solutions with outstanding craftsmanship and attention to detail, ensuring durability, style, and the highest standards for both residential and commercial properties.</p>
          <CustomGalleryGrid {...content} />
          <p className="text-center">
            <Button as={Link} href="/gallery/recent-projects/" variant="primary">Explore More</Button></p>
        </Container >
      </section >

      <section className="bg-tertiary">
        <Container>
          <h2 className="mb-0">What Our Clients Say</h2>
          <h4 className="d-block d-sm-none mb-4">Real Stories. <br/> <span>Real Satisfaction.</span></h4>
          <h4 className="d-none d-sm-block mb-4">Real Stories. <span>Real Satisfaction.</span></h4>
          <ReviewsSlider {...content} />
          <div className="text-center">
            <Button className="mt-3" href="/testimonials/">Read More Testimonials</Button>
          </div>
        </Container>
      </section>




    </>
  )
}
