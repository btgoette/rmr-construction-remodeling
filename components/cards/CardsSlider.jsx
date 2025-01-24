/* Cards Slider Component */

// React Components
import { Row, Col, Card, Button } from 'react-bootstrap'
import Slider from 'react-slick'
import Link from 'next/link'

export default function CardsSlider({ cards }) {

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

    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="cards">
            <Slider {...settings}>
                {cards.card.map(({ title, title2, img, text, url }, i) => (
                    <div key={i} className="p-4">
                        <Card>
                            <Card.Img variant="top" src={img.src} height={img.height} width={img.width} alt={img.alt} style={{ backgroundImage: `url(${img.lowres})` }} />
                            <Card.Body>
                                <Card.Title>{title} <span>{title2}</span></Card.Title>
                                <Card.Text>
                                    {text}
                                </Card.Text>

                                {renderButton(url)}
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
