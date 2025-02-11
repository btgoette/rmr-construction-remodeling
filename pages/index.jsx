/* Home Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import Link from 'next/link'

// Custom Components
import { Head, JumbotronWithContent, CardsWithIcon, FullWidthSection, DoubleFigure, Figure, ReviewsSlider, GalleryGrid } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/home.content'
import image from 'public/content/en_US/components/image.content'

export default function Home() {

  return (
    <>

      <Head {...content} />
      <JumbotronWithContent>
        <h1>RMR Construction &amp; Remodeling</h1>
        <h3 className="mt-0">Crafting Exceptional Outdoor Spaces<br />with Quality &amp; Expertise</h3>
        <Button className="btn btn-outline" href="/contact">Get an Estimate</Button>

      </JumbotronWithContent>

      <section className="pb-0">
        <Container className="pb-0">
          <h2 data-aos="fade-up">Custom Outdoor Living &amp; Landscape Solutions</h2>
          <div className="border-line-center"></div>
          <p>At RMR Construction & Remodeling, we specialize in transforming outdoor spaces across Placer and Sacramento County with exceptional craftsmanship and innovative design. With decades of experience, our team is dedicated to delivering high-quality concrete work, landscape construction, and outdoor renovations that enhance both beauty and functionality. Whether you are looking to boost your home's curb appeal, create a serene backyard retreat, or add custom outdoor features such as patios, fire pits, or pergolas, we bring your vision to life with precision, expertise, and a commitment to excellence.</p>
        </Container>
      </section>

      <section className="pb-0">
        <Container className="pb-0">
          <Row className="justify-content-center align-items-center">
            <Col lg={{ order: 1, span: 6 }}>
              <DoubleFigure image1={image.figure[3]} image2={image.figure[4]} />
            </Col>
            <Col lg={{ order: 0, span: 6 }}>
              <h2 data-aos="fade-up" className="text-start">Outdoor Living Spaces Designed for You</h2>
              <div className="border-line-start"></div>
              <p>Your outdoor space should reflect your lifestyle. Whether you seek a peaceful oasis or a dynamic space for entertaining, we design and build landscapes that suit your needs. From stunning patios and decorative concrete to custom pergolas, fire pits, and artificial turf installation, we ensure every detail is crafted to perfection. Enhance your home&apos;s value and create lasting memories with our comprehensive outdoor solutions.</p>
              <h3 className="text-start">Our Services</h3>
              <Row className="justify-content-star">
                <Col sm={6}>
                  <ul className="hammer-list">
                    <li data-aos="fade-up">Landscape Construction</li>
                    <li data-aos="fade-up">Sod &amp; Artificial Turf Installation</li>
                    <li data-aos="fade-up">Custom Flowerbeds &amp; Hardscaping</li>
                    <li data-aos="fade-up">Stamped &amp; Stained Concrete</li>
                    <li data-aos="fade-up">Driveways, Patios &amp; Walkways</li>
                    <li data-aos="fade-up">Full Landscape Remodels</li>
                  </ul>
                </Col>
                <Col sm={6}>
                  <ul className="hammer-list">
                    <li data-aos="fade-up">Custom Outdoor Kitchens, BBQs &amp; Fire Pits</li>
                    <li data-aos="fade-up">Landscape Lighting Installation</li>
                    <li data-aos="fade-up">Drainage &amp; Irrigation Solutions</li>
                    <li data-aos="fade-up">Custom Fencing &amp; Decking</li>
                    <li data-aos="fade-up">Pergolas, Arbors &amp; Retaining Walls</li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pb-0">
        <Container className="pb-0">
          <h2 data-aos="fade-up">Our Commitment to Excellence</h2>
          <div className="border-line-center"></div>
          <p className="mb-4">At RMR Construction &amp; Remodeling, our mission is to exceed expectations with every project. Have a question? Our owner, Jose Castaneda, is just a phone call away!</p>
          <Row className="align-items-center py-2">
            <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Clear Communication</h3></Col>
            <Col lg={7}><p className="border-left" data-aos="fade-left">We keep you informed every step of the way for a smooth and stress-free experience.</p></Col>
          </Row>
          <Row className="align-items-center py-2">
            <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Trusted Craftsmanship</h3></Col>
            <Col lg={7}><p className="border-left" data-aos="fade-left">Our team delivers superior quality and attention to detail in every project.</p></Col>
          </Row>
          <Row className="align-items-center py-2">
            <Col lg={5}><h3 className="text-start text-white text-lg-end" data-aos="fade-right">Family-Owned Integrity</h3></Col>
            <Col lg={7}><p className="border-left" data-aos="fade-left">We uphold a legacy of trust, ensuring every job meets the highest standards.</p></Col>
          </Row>
        </Container>
      </section>

      <section className="pb-0">
        <Container className="pb-0">
          <Row className="justify-content-center align-items-center">
            <Col lg={{ order: 0, span: 7 }}>
              <Figure {...image.figure[0]} />
            </Col>
            <Col lg={{ order: 1, span: 5 }} className="px-xl-3">
              <h2 data-aos="fade-up" className="text-start">Proudly Serving Placer County & Sacramento County</h2>
              <div className="border-line-start"></div>
              <p>Based in Rio Linda, CA, we proudly serve homeowners throughout:
                Antelope, Arden Arcade, Carmichael, Citrus Heights, Elverta, Foothill Farms, Fair Oaks, McClellan Park, North Highlands, Orangevale, Rio Linda, Rocklin, Roseville, and Sacramento.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pb-0">
        <Container className="pb-0 text-center">
          <h2 data-aos="fade-up">Our Work Speaks for Itself</h2>
          <div className="border-line-center"></div>
          <GalleryGrid {...content} />
          <Button className="btn btn-primary" href="/gallery/">See Full Gallery</Button>
        </Container>
      </section>

      
      <section>
        <Container>
          <h2 data-aos="fade-up" className="mb-4">What Homeowners Are Saying</h2>
          <div className="border-line-center"></div>
          <ReviewsSlider {...content} />
          <h4 className="text-center">Ready to transform your outdoor space? Let’s make your vision a reality. <Link href="tel:916-533-4758">Call us today!</Link></h4>
        </Container>
      </section>
    </>
  )
}
