/* Review Slider Component */

// React Components
import { Button } from 'react-bootstrap'
import Link from 'next/link'
import Slider from "react-slick"

export default function ReviewsSlider({ reviews }) {

    const settings = {
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        infinite: true,
        speed: 1000,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div className="review">
            <div className="review-slider text-center">
                <Slider {...settings}>
                    {reviews.reviewsList.map(({ name, message, location, url }, i) => (
                        <div key={i} className="review-card">
                            <div className="review-card-content">
                                <div>
                                    <p className="review-quote">
                                        {message.map(({ p }, j) => (
                                            <quote key={j}>&ldquo;{p}&rdquo;</quote>
                                        ))}
                                    </p>
                                </div>
                                <p className="review-header">
                                    <Link className="review-url" href={url}><span className="review-name">{name}</span></Link>
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}