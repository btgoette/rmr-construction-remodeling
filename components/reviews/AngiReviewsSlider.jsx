/* Angi Reviews Slider Component */

// React Components
import { Button } from 'react-bootstrap'
import Link from 'next/link'
import Slider from "react-slick"

export default function AngiReviews({ angiReviews }) {

    const settings = {
        autoplay: true,
        autoplaySpeed: 10000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true
    };

    return (
        <div className="review">
            <div className="review-slider text-center mb-5">
                <h2 className="mb-0">See our Reviews on Angi</h2>
                <p className="mb-2">Want to write us a review on Angi?</p>
                <Link href={angiReviews.newReviewUrl} target="_blank"><Button>Click Here</Button></Link>
            </div>
            <Slider {...settings}>
                {angiReviews.reviewsList.map(({ name, message }, i) => (
                    <div key={i} className="review-card">
                    <div className="review-card-content">
                        <div>
                            <p className="review-stars angi">
                                <i className="fa fa-star"></i>&nbsp;
                                <i className="fa fa-star"></i>&nbsp;
                                <i className="fa fa-star"></i>&nbsp;
                                <i className="fa fa-star"></i>&nbsp;
                                <i className="fa fa-star"></i>
                            </p>
                            <p className="review-quote">
                                {message.map(({ p }, j) => (
                                    <quote key={j}>&ldquo;{p}&rdquo;</quote>
                                ))}
                            </p>
                        </div>
                        <p className="review-header">
                            <span className="review-name">{name}</span>
                        </p>
                    </div>
                </div>
                ))}
            </Slider>
        </div>
    )
}