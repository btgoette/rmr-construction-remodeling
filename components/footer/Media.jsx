/* Footer Media Component */

// React Components
import { Col } from 'react-bootstrap'
import Link from 'next/link'

// Custom Components
import Logo from '../images/Logo'
import Socials from './Socials'
import Contact from './Contact'

export default function Media(footer) {


    function renderLicense() {
        if (footer.license !== undefined) {
            return (
                <p className="mt-0 mb-1">
                    <Link href={"https://www.cslb.ca.gov/onlineservices/checklicenseII/LicenseDetail.aspx?LicNum=" + footer.license} target="_blank">
                        <strong>
                            CA LIC.#{footer.license}
                        </strong>
                    </Link>
                </p>
            )
        }
    }

    return (
        <Col xl={3} className="media">
            <Link href="/">
                <Logo {...footer} />
            </Link>
            {renderLicense()}
            <Socials {...footer} />
        </Col>
    )
}