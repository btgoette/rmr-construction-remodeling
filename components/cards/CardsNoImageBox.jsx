/* Cards No Image Box Component */

// React Components
import { Row, Col, Card, Button } from 'react-bootstrap'
import Link from 'next/link'

export default function CardsNoImageBox({cardsNoImageBox}) {

    return (
        <Row className={cardsNoImageBox.justify + " " + cardsNoImageBox.align + " cards cards-no-image box"}>
            {cardsNoImageBox.card.map(({ title, text }, i) => (
                <Col key={i} md={6} lg={cardsNoImageBox.col} className="p-4">
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
