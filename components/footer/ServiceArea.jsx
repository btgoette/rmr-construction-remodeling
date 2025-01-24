/* Service Area Component */

// React Components
import { Container, Row, Col, Image } from 'react-bootstrap'

export default function ServiceArea({ serviceArea }) {

    /* Check For Title */
    function renderTitle() {
        if (serviceArea.title !== undefined) {
            return (
                <h4 className="text-start mb-4">{serviceArea.title}</h4>
            )
        }
    }

    return (
        <div className="service-Area px-3 pb-5">
            {renderTitle()}
            <Row className="align-items-center">
                {serviceArea.cities.map(({ city }, i) => (
                    <Col key={i} xs={6} sm={4} md={3} lg={2} className="text-center">
                        {city}
                    </Col>
                ))}
            </Row>
        </div>
    )
}