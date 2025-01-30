/* Home Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import Link from 'next/link'

// Custom Components
import { Head, JumbotronWithContent, ContactForm, Figure, CardsSlider, ReviewsSlider, CustomGalleryGrid } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/home.content'
import image from 'public/content/en_US/components/image.content'

export default function Home() {

  return (
    <>

      <Head {...content} />
      <JumbotronWithContent>
        <h1>RMR Construction &amp; Remodeling</h1>
        <h3>Crafting Exceptional Outdoor Spaces with Quality & Expertise</h3>
        <p>At RMR Construction & Remodeling, we specialize in transforming outdoor spaces across Placer and Sacramento County. With decades of experience, our team delivers high-quality craftsmanship in concrete work, landscape construction, and outdoor renovations. Whether you're looking to enhance your curb appeal, create a backyard retreat, or add functional outdoor features, we bring your vision to life with precision and expertise.</p>

      </JumbotronWithContent>

      <section>
        <Container>
          <h2>Custom Outdoor Living & Landscape Solutions</h2>
          <p>Your outdoor space should reflect your lifestyle. Whether you seek a peaceful oasis or a dynamic space for entertaining, we design and build landscapes that suit your needs. From stunning patios and decorative concrete to custom pergolas, fire pits, and artificial turf installation, we ensure every detail is crafted to perfection.</p>
          <p>Enhance your home’s value and create lasting memories with our comprehensive outdoor solutions:</p>
       
          <h3 className="text-start">Our Services</h3>
          <Row>
            <Col sm={6}>
              <ul>
                <li>Landscape Construction</li>
                <li>Sod & Artificial Turf Installation</li>
                <li>Custom Flowerbeds & Hardscaping</li>
                <li>Stamped & Stained Concrete</li>
                <li>Driveways, Patios & Walkways</li>
                <li>Full Landscape Remodels</li>
              </ul>
            </Col>
            <Col sm={6}>
              <ul>
                <li>Custom Outdoor Kitchens, BBQs & Fire Pits</li>
                <li>Landscape Lighting Installation</li>
                <li>Drainage & Irrigation Solutions</li>
                <li>Custom Fencing & Decking</li>
                <li>Pergolas, Arbors & Retaining Walls</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bg-map">
        <Container>
          <h2>Proudly Serving Placer & Sacramento County</h2>
          <p>Based in Elverta, CA, we proudly serve homeowners throughout:
            Antelope, Arden Arcade, Carmichael, Citrus Heights, Elverta, Foothill Farms, Fair Oaks, McClellan Park, North Highlands, Orangevale, Rio Linda, Rocklin, Roseville, and Sacramento.</p>
        </Container>
      </section>

      <section>
        <Container>
          <h2>Our Work Speaks for Itself</h2>
          <p>From classic designs to custom showpieces, our projects reflect quality and creativity. Browse our <Link href="/gallery/">gallery</Link> to see our latest work. Have questions? Contact us today—we’re happy to help!</p>
          <CustomGalleryGrid {...content} />
        </Container>
      </section>

      <section className="bg-tertiary">
        <Container>
          <h2>Our Commitment to Excellence</h2>
          <p>At RMR Construction & Remodeling, our mission is to exceed expectations with every project. We take pride in clear communication, transparency, and superior craftsmanship. As a family-owned business, we uphold a legacy of trust, ensuring that every project is completed to the highest standard.</p>
          <p>Have a question? Our owner, Jose Castaneda, is just a phone call away!</p>
        </Container>
      </section>

      <section>
        <Container>
          <h2>What Homeowners Are Saying</h2>
          <p>Ready to transform your outdoor space? Let’s make your vision a reality. Call us today!</p>
          <ReviewsSlider {...content} />
        </Container>
      </section>
    </>
  )
}
