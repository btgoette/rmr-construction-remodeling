/* Cards With Icon Slider Component */

// React Components
import { Row, Col, Card, Button } from 'react-bootstrap'
import Slider from 'react-slick'
import Link from 'next/link'

export default function CardsWithIconSlider({cardsWithIcon}) {
    
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
        speed: 100,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 512,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="cards cards-with-icon">
            <Slider {...settings}>
            {cardsWithIcon.card.map(({ title, img, text, url }, i) => (
                <div key={i} className="p-4">
                    <Card>
                        <Card.Img variant="top" src={img.src} height={img.height} width={img.width}  alt={img.alt} />
                        <Card.Body>
                            <Card.Title><strong>{title}</strong></Card.Title>
                            <Card.Text>
                                {text}
                                {renderButton(url)}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            ))}
            </Slider>
        </div>
    );
}
