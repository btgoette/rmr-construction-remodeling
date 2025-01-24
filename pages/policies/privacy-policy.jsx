/* Privacy Policy Page */

// React Compontents
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Custom Components
import { Head, CustomHero, Privacy } from '@/components'

// Custom Content
import content from 'public/content/en_US/pages/policies/privacyPolicy.content'

export default function PrivacyPolicy() {

    return (
        <div className="privacy">

            <Head {...content} />
            <CustomHero {...content} />

            <section>
                <Container>
                    <Privacy {...content} />
                </Container>
            </section>

        </div>
    )
}
