/* Cards Overlay Video Slider Component */

// React Components
import { Row, Col, Card, Button } from 'react-bootstrap'
import Slider from 'react-slick'
import Link from 'next/link'

export default function CardsOverlayVideoSlider({ cardsOverlayVideo }) {

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
        <div className="cards-overlay cards-overlay-video cards-overlay-slider">
            <Slider {...settings}>
                {cardsOverlayVideo.card.map(({ title, video, text, url }, i) => (
                    <div key={i} className="p-4">
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
                    </div>
                ))}
            </Slider>
        </div>
    );
}
