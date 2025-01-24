/* Cards No Image Component */

// React Components
import { Row, Col, Card, Button } from 'react-bootstrap'
import Link from 'next/link'

export default function CardsNoImage({cardsNoImage}) {

    return (
        <Row className={cardsNoImage.justify + " " + cardsNoImage.align + " cards cards-no-image"}>
            {cardsNoImage.card.map(({ title, text }, i) => (
                <Col key={i} md={6} lg={cardsNoImage.col} className="p-4">
                    <Card data-aos="fade-up">
                       <Card.Body>
                            <Card.Title><strong>{title}</strong></Card.Title>
                            <Card.Text>
                                {text}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}
