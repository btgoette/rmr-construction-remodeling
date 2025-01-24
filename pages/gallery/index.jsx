/* Recent Projects Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Script from 'next/script'

// Custom Components
import { Head, CustomHero, GalleryGrid, Figure } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/gallery/recentProjects.content'

export default function RecentProjectsPage() {

    return (
        <>

            <Head {...content} />
            <CustomHero {...content} />

            <section>
                <Container>
                    <h2>Recent <span>Projects Gallery</span></h2>
                    <h4>Showcasing <span>Our Expertise</span></h4>
                    <div className="border-line-center"></div>
                    <p className="mb-5">At RMR Construction & Remodeling, we take immense pride in our work, which is evident in every roofing project we undertake. Our portfolio showcases a diverse range of projects, from residential roof upgrades to large-scale commercial installations. Each project reflects our commitment to exceptional craftsmanship, quality materials, and customer satisfaction. We approach every roof with the same level of attention to detail, ensuring long-lasting durability, superior performance, and aesthetic appeal. Whether it&rsquo;s installing a modern roof for a new home or restoring the integrity of a commercial building, we bring both functionality and style to every roof we touch. Take a look at some of our recent projects and see the difference RMR Construction & Remodeling can make for your property.</p>
                    <GalleryGrid {...content} />
                    <Script
                        id="realworklabs-plugin"
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                            __html: `
            (function() {
              var d = document, t = 'script',
                  o = d.createElement(t),
                  s = d.getElementsByTagName(t)[0];
              o.src = 'https://app.realworklabs.com/static/plugin/loader.js?v=' + new Date().getTime();
              window.addEventListener('rwlPluginReady', function () {
                  window.rwlPlugin.init('https://app.realworklabs.com', 'HR7KBIXh3fsR8TSX');
              }, false);
              s.parentNode.insertBefore(o, s);
            }());
          `,
                        }}
                    />
                    <div id="rwl-output"></div>
                </Container>
            </section>

        </>
    )
}
