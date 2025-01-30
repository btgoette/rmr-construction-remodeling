/* Landscape Construction Services Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link'

// Custom Components
import { Head, Hero, Cards, Figure } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/services/landscapeConstruction.content'
import image from 'public/content/en_US/components/image.content'

export default function LandscapeConstructionServices() {

    return (
        <>

            <Head {...content} />
            <Hero {...content} />

            <section>
                <Container>
                    <h2>Landscape Construction in Placer & Sacramento County</h2>
                    <p>Transform your outdoor space with expert craftsmanship and high-quality materials. At RMR Construction & Remodeling, we specialize in landscape construction that enhances both the beauty and functionality of your property. From durable hardscapes to custom-built outdoor features, we bring your vision to life with precision and care.</p>
                </Container>
            </section>

            <section>
                <Container>
                    <h2>Our Landscape Construction Services</h2>

                    <h3>Driveways</h3>
                    <p>Make a lasting first impression with a custom-designed driveway. We use premium materials such as concrete pavers, natural stone, and poured concrete to create driveways that are both stylish and durable.</p>

                    <h3>Patios</h3>
                    <p>Create an inviting outdoor space with a custom patio. Choose from stone pavers, stamped concrete, or brushed concrete to match your style and enhance your backyard’s functionality.</p>

                    <h3>Walkways</h3>
                    <p>Enhance safety and accessibility with professionally installed walkways. We offer paver and concrete walkways designed to complement your landscaping while providing a durable, slip-resistant surface.</p>

                    <h3>Outdoor Steps</h3>
                    <p>Connect different levels of your yard with beautifully crafted outdoor steps made from flagstone, Silvermist stone, or concrete pavers. Functional and visually appealing, they ensure smooth transitions between spaces.</p>

                    <h3>Fire Pits</h3>
                    <p>Add warmth and ambiance to your backyard with a custom-built fire pit. Available in round or square designs, our fire pits are crafted from natural or paving stones and can be wood-burning or gas-powered.</p>

                    <h3>Outdoor Fireplaces</h3>
                    <p>For a dramatic and cozy outdoor feature, choose a custom outdoor fireplace. Built with high-quality materials, these fireplaces provide warmth, elegance, and a focal point for your outdoor space.</p>

                    <h3>Outdoor Kitchens</h3>
                    <p>Take your cooking outdoors with a fully equipped custom outdoor kitchen. Our designs include grills, pizza ovens, smokers, and stone countertops, giving you a perfect space for entertaining.</p>

                    <h3>Retaining Walls</h3>
                    <p>Control erosion while adding structure and beauty with a custom retaining wall. Our walls, made from stackable blocks, paver blocks, or natural stone, can also incorporate raised planter beds for added appeal.</p>

                    <h3>Seating Walls</h3>
                    <p>Maximize seating options with a built-in seating wall. Made from durable stone or concrete blocks, these walls provide a stylish and long-lasting solution for outdoor gatherings.</p>

                    <h3>Artificial Turf</h3>
                    <p>Enjoy lush, green grass year-round without the maintenance. Our artificial turf installations are ideal for landscaping accents, play areas, and putting greens.</p>

                    <h3>Landscape Lighting</h3>
                    <p>Illuminate your outdoor space with low-voltage LED lighting. Our energy-efficient lighting solutions highlight your landscape’s best features and enhance nighttime safety.</p>

                    <h3>Pergolas</h3>
                    <p>Add shade and sophistication to your yard with a custom pergola. A perfect balance of style and function, pergolas create a beautiful setting for relaxation and entertainment.</p>

                    <h3>Pavilions</h3>
                    <p>For complete shade and weather protection, opt for a custom pavilion. Whether for hosting guests or enjoying quiet outdoor time, our pavilions provide elegant and durable coverage.</p>

                    <h3>Arbors</h3>
                    <p>Frame your garden or entrance with a charming arbor. Designed for beauty and shade, our custom arbors create an inviting focal point in any landscape.</p>
                </Container>
            </section>

            <section>
                <Container>
                    <h2>Start Your Outdoor Transformation Today!</h2>
                    <p>At RMR Construction & Remodeling, we are passionate about turning outdoor dreams into reality. Our experienced team delivers exceptional craftsmanship and superior materials to ensure long-lasting beauty and functionality.</p>
                    <p>Call us at (916) 533-4758 or email us to schedule a consultation today!</p>
                </Container>
            </section>

        </>
    )
}
