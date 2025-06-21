/* Cards Overlay Component */

// React Components
import { Row, Col, Card, Button } from 'react-bootstrap'
import Link from 'next/link';

export default function CardsOverlay({ cardsOverlay }) {

    return (
        <Row className={cardsOverlay.justify + " cards-overlay"}>
            {cardsOverlay.card.map(({ title, img, text, url }, i) => (
                <Col key={i} md={6} lg={cardsOverlay.col} className="py-4 px-2 px-md-4">
                    <Link href={url}>
                        <Card>
                            <Card.Img loading="lazy" src={img.src} height={img.height} width={img.width} alt={img.alt} style={{ backgroundImage: `url(${img.lowres})` }} />
                            <Card.ImgOverlay>
                                <Card.Title><strong>{title}</strong></Card.Title>
                                <Card.Text>
                                    {text}
                                </Card.Text>
                                <Button className="btn btn-outline">Learn More</Button>
                            </Card.ImgOverlay>
                        </Card>
                    </Link>
                </Col>
            ))}
        </Row>
    );
}
