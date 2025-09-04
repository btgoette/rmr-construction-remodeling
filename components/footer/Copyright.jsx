/* Footer Copyright Component */

// React Components
import { Container } from 'react-bootstrap'
import Link from 'next/link'

export default function Copyright({copyright}) {

    const today = new Date();

    return (
        <section className="copyright">
            <Container fluid className="py-1">
                <p>
                    &copy; {today.getFullYear()} {copyright.company}&nbsp;&nbsp;
                    All rights reserved.&nbsp;
                    <Link
                        href="/policies/privacy-policy/"
                        title={copyright.company + "'s Privacy Policy"}
                    >
                        Privacy Policy
                    </Link>&nbsp;|&nbsp;
                    <Link
                        href="/service-area/"
                        target="top"
                        title="RMR Concrete Construction Service Area Roseville CA"
                    >
                        Service Area </Link>&nbsp;|&nbsp;
                    <Link
                        href="https://brymels.com"
                        target="top"
                        title="Website design by Brymels LLC Website Designer Roseville CA"
                    >
                        Website Design </Link>&nbsp;
                    by Brymels LLC.<br />
                    All files, images, and information
                    contained in this Website copyright by {copyright.company} and may not
                    be duplicated, copied, modified, or adapted, in any way
                    without our written permission.
                </p>
            </Container>
        </section>
    )
}