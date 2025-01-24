/* Cards Overlay Video Component */

// React Components
import { Row, Col, Card, Button } from 'react-bootstrap'
import Link from 'next/link';

export default function CardsOverlayVideo({ cardsOverlayVideo }) {

    return (
        <Row className={cardsOverlayVideo.justify + " cards-overlay cards-overlay-video"}>
            {cardsOverlayVideo.card.map(({ title, video, text, url }, i) => (
                <Col key={i} md={6} lg={cardsOverlayVideo.col} className="p-4">
                    <Link href={url}>
                        <Card>
                            <video autoPlay muted loop id="myVideo" className="card-img">
                                <source src={video.src} type="video/mp4" />
                                    Your browser does not support HTML5 video.
                            </video>
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
