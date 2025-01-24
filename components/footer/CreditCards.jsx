/* Footer Credit Cards Component */

// React Components
import { Container } from 'react-bootstrap'

export default function CreditCards({ creditCards }) {


    return (
        <>
            <figure className="d-flex justify-content-center justify-content-xl-start text-center text-md-start">
                {creditCards.map(({ src, alt }, i) => (
                    <embed key={i} src={src} alt={alt} height="36" width="63" type="image/svg+xml" />
                ))}
            </figure>
        </>
    )
}