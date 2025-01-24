/* Cards Overlay Slider Component */

// React Components
import { Row, Col, Card, Button } from 'react-bootstrap'
import Slider from 'react-slick'
import Link from 'next/link'

export default function CardsOverlaySlider({ cardsOverlay }) {

    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5500,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="cards-overlay cards-overlay-slider">
            <Slider {...settings}>
                {cardsOverlay.card.map(({ title, img, text, url }, i) => (
                    <div key={i} className="py-4 px-2 px-md-4">
                        <Link href={url}>
                            <Card>
                                <Card.Img src={img.src} height={img.height} width={img.width}  alt={img.alt} style={{ backgroundImage: `url(${img.lowres})` }} />
                                <Card.ImgOverlay>
                                    <Card.Title><strong>{title}</strong></Card.Title>
                                    <Card.Text>
                                        {text}
                                    </Card.Text>
                                    <Button className="btn btn-outline">Learn More</Button>
                                </Card.ImgOverlay>
                            </Card>
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
