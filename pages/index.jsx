/* Home Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import Link from 'next/link'

// Custom Components
import { Head, JumbotronWithContent, FullWidthSection, Figure, ReviewsSlider, GalleryGrid } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/home.content'
import image from 'public/content/en_US/components/image.content'

export default function Home() {

  return (
    <>

      <Head {...content} />
      <JumbotronWithContent>
        <h1>RMR Construction &amp; Remodeling</h1>
        <h3>Crafting Exceptional Outdoor Spaces<br/> with Quality &amp; Expertise</h3>
        <p>At RMR Construction &amp; Remodeling, we specialize in transforming outdoor spaces across Placer and Sacramento County. With decades of experience, our team delivers high-quality craftsmanship in concrete work, landscape construction, and outdoor renovations. Whether you're looking to enhance your curb appeal, create a backyard retreat, or add functional outdoor features, we bring your vision to life with precision and expertise.</p>

      </JumbotronWithContent>

      <section>
        <Container>
          <h2>Custom Outdoor Living &amp; Landscape Solutions</h2>
          <p className="mb-5">Your outdoor space should reflect your lifestyle. Whether you seek a peaceful oasis or a dynamic space for entertaining, we design and build landscapes that suit your needs. From stunning patios and decorative concrete to custom pergolas, fire pits, and artificial turf installation, we ensure every detail is crafted to perfection. Enhance your home’s value and create lasting memories with our comprehensive outdoor solutions.</p>

          <Row className="justify-content-center align-items-center">
            <Col lg={5}>
              <Figure {...image.figure[1]} />
            </Col>
            <Col lg={7}>
              <div className="px-3">
                <h3 className="text-start">Our Services</h3>
                <Row>
                  <Col sm={6}>
                    <ul className="hammer-list">
                      <li>Landscape Construction</li>
                      <li>Sod &amp; Artificial Turf Installation</li>
                      <li>Custom Flowerbeds &amp; Hardscaping</li>
                      <li>Stamped &amp; Stained Concrete</li>
                      <li>Driveways, Patios &amp; Walkways</li>
                      <li>Full Landscape Remodels</li>
                    </ul>
                  </Col>
                  <Col sm={6}>
                    <ul className="hammer-list">
                      <li>Custom Outdoor Kitchens, BBQs &amp; Fire Pits</li>
                      <li>Landscape Lighting Installation</li>
                      <li>Drainage &amp; Irrigation Solutions</li>
                      <li>Custom Fencing &amp; Decking</li>
                      <li>Pergolas, Arbors &amp; Retaining Walls</li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

        </Container>
      </section>

      <FullWidthSection background="bg-primary" imageSrc="/images/backgrounds/map.png" imageAlt="map" lowres="/images/backgrounds/map.png" imageFirst={false} textFlex="flex-10" imageFlex="flex-9">
        <div>
          <h2>Proudly Serving Placer &amp; Sacramento County</h2>
          <p>Based in Elverta, CA, we proudly serve homeowners throughout:
            Antelope, Arden Arcade, Carmichael, Citrus Heights, Elverta, Foothill Farms, Fair Oaks, McClellan Park, North Highlands, Orangevale, Rio Linda, Rocklin, Roseville, and Sacramento.</p>
        </div>
      </FullWidthSection>


      <section>
        <Container>
          <h2>Our Work Speaks for Itself</h2>
          <p>From classic designs to custom showpieces, our projects reflect quality and creativity. Browse our <Link href="/gallery/">gallery</Link> to see our latest work. Have questions? Contact us today—we’re happy to help!</p>
          <GalleryGrid {...content} />
        </Container>
      </section>

      <section className="bg-tertiary">
        <Container>
          <h2>Our Commitment to Excellence</h2>
          <p>At RMR Construction &amp; Remodeling, our mission is to exceed expectations with every project. We take pride in clear communication, transparency, and superior craftsmanship. As a family-owned business, we uphold a legacy of trust, ensuring that every project is completed to the highest standard.</p>
          <p>Have a question? Our owner, Jose Castaneda, is just a phone call away!</p>
        </Container>
      </section>

      <section>
        <Container>
          <h2 className="mb-4">What Homeowners Are Saying</h2>

          <ReviewsSlider {...content} />
          <h4 className="mt-4 text-center">Ready to transform your outdoor space? Let’s make your vision a reality. Call us today!</h4>
        </Container>
      </section>
    </>
  )
}
