/* Cards With Title Only Component */

// React Components
import { Row, Col, Card, Button } from 'react-bootstrap'
import Slider from 'react-slick'
import Link from 'next/link'

export default function Cards({ cards }) {

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
        <div className="cards-title-only">
            <Slider {...settings}>
                {cards.card.map(({ title, img, url }, i) => (
                    <div key={i} className="p-4">
                        <Card>
                            <Card.Img variant="top" src={img.src} height={img.height} width={img.width}  alt={img.alt} style={{ backgroundImage: `url(${img.lowres})` }} />
                            <Link href={url}>
                                <Card.Body>
                                    <Card.Title><strong>{title}</strong></Card.Title>
                                </Card.Body>
                            </Link>
                        </Card>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
