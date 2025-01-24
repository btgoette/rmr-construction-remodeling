/* Cards Component */

// React Components
import { Row, Col, Card, Button } from 'react-bootstrap'
import Link from 'next/link'

export default function Cards({cards}) {

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
        <Row className={cards.justify + " " + cards.align + " cards"}>
            {cards.card.map(({ title, img, text, url }, i) => (
                <Col key={i} md={6} lg={cards.col} className="p-4">
                    <Card>
                        <Card.Img variant="top" src={img.src} height={img.height} width={img.width}  alt={img.alt} style={{backgroundImage: `url(${img.lowres})`}} />
                        <Card.Body>
                            <Card.Title><strong>{title}</strong></Card.Title>
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
