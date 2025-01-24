/* Footer Summary Component */

// React Components
import { Col } from 'react-bootstrap'
import Link from 'next/link'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import CreditCards from './CreditCards'

export default function Summary({ summary }) {

    function renderTitle() {
        if (summary.title !== undefined) {
            return (
                <p className="footer-title mt-0">
                    <Link href={summary.url}>
                        {summary.title}
                    </Link>
                </p>
            )
        }
    }

    function renderText() {
        if (summary.text !== undefined) {
            return (
                <p className="summary-text">
                    {summary.text}
                </p>
            )
        }
    }

    function renderImage() {
        if (summary.images !== undefined) {
            return (
                <>
                    {summary.images.map(({ src, alt, width, height }, i) => (
                        <figure key={i} className="summary-image w-100 d-flex justify-content-center justify-content-md-start">
                            <LazyLoadImage src={src} alt={alt} width={width} height={height} />
                        </figure>
                    ))}
                </>
            )
        }
    }

    return (
        <Col xl={3} className="summary text-center text-xl-start">

            {renderTitle()}
            {renderText()}
            {renderImage()}
            <CreditCards {...summary} />
        </Col>
    )
}