/* Cards Overlay With Full Width Component */

// React Components
import { Row, Col, Card, Button } from 'react-bootstrap'
import Link from 'next/link';

export default function CardsOverlay({ cardsOverlay }) {

    return (
        <Row className={cardsOverlay.justify + " mx-0 px-0 cards-overlay cards-overlay-full-width"}>
            {cardsOverlay.card.map(({ title, img, text, url }, i) => (
                <Col key={i} md={6} lg={cardsOverlay.col} className="px-0">
                    <Link href={url}>
                        <Card>
                            <Card.Img src={img.src} height={img.height} width={img.width} alt={img.alt} style={{ backgroundImage: `url(${img.lowres})` }} />
                            <Card.ImgOverlay>
                                <Card.Title><strong>{title}</strong></Card.Title>
                                <Card.Text>
                                    {text}
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Link>
                </Col>
            ))}
        </Row>
    );
}
