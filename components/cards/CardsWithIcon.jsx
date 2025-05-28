/* Cards With Icon Component */

// React Components
import { Row, Col, Card, Button } from 'react-bootstrap'
import Link from 'next/link'

export default function CardsWithIcon({cardsWithIcon}) {
    
    function renderButton(url) {
        if (url !== undefined) {
            return (
                <Link href={url} className="card-button">
                    <Button className="btn btn-primary">
                        See More
                    </Button>
                </Link>
            )
        }
    }

    return (
        <Row className={cardsWithIcon.justify + " " + cardsWithIcon.align + " cards cards-with-icon"}>
            {cardsWithIcon.card.map(({ title, img, text, url }, i) => (
                <Col key={i} md={6} lg={cardsWithIcon.col} className="p-4" data-aos="fade-in" data-aos-duration="1000" data-aos-delay={i * 200}>
                    <Card>
                        <Card.Img loading="lazy" variant="top" src={img.src} height={img.height} width={img.width}  alt={img.alt} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {text}
                                {renderButton(url)}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}
