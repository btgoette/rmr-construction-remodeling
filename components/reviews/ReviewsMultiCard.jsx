/* Google Reviews Component */

// React Components
import { Container, Button } from 'react-bootstrap'
import Link from 'next/link'
import Slider from "react-slick"
import Logo from 'components/images/Logo'

export default function GoogleReviewsMultiCard({ googleReviews }) {

    const settings = {
        autoplay: true,
        autoplaySpeed: 10000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: true,
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
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className="p-0">
            <div className="multi-card py-4">
                <Container>
                    <h2 className="mb-2">What Our Customers Have to Say</h2>
                    <div className="multi-card-grid text-center">
                        <div className="review-label">
                            <Logo {...googleReviews.brand} />
                            <Link href={googleReviews.newReviewUrl} target="_blank"><Button>Write a review</Button></Link>
                        </div>
                        <Slider {...settings}>
                            {googleReviews.reviewsList.map(({ name, message, url }, i) => (
                                <div key={i} className="review-card">
                                    <div className="review-card-content">
                                        <p className="review-header">
                                            <span className="review-name">{name}</span><br />
                                            <span className="review-stars google">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </span>
                                        </p>
                                        <quote className="review-quote">
                                            {message.map(({ p }, j) => (
                                                <p key={j}>{p}</p>
                                            ))}
                                        </quote>
                                        <p className="review-url"><Link href={url} target="_blank">Read More</Link></p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </Container>
            </div>
        </section>
    )
}