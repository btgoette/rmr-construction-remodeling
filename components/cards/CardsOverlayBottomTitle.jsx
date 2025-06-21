/* Cards Overlay Bottom Title Component */

// React Components
import { Row, Col, Card, Button } from 'react-bootstrap'
import Link from 'next/link';

export default function CardsOverlayBottomTitle({cardsOverlay}) {
    return (
        <Row className={cardsOverlay.justify + " cards-overlay cards-overlay-bottom-title"}>
            {cardsOverlay.card.map(({ title, img, url }, i) => (
                <Col key={i} md={6} lg={cardsOverlay.col} className="p-4">
                    <Link href={url}>
                        <Card>
                            <Card.Img loading="lazy" src={img.src} height={img.height} width={img.width} alt={img.alt} style={{backgroundImage: `url(${img.lowres})`}} />
                            <Card.ImgOverlay>
                                    <Card.Title><strong>{title}</strong></Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </Link>
                </Col>
            ))}
        </Row>
    );
}
