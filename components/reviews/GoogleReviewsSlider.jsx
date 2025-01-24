/* Google Reviews Slider Component */

// React Components
import { Button } from 'react-bootstrap'
import Link from 'next/link'
import Slider from "react-slick"

export default function GoogleReviews({ googleReviews }) {

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
            <div className="review-slider text-center">
                <div className="text-center mb-5">
                    <h2 className="mb-0">See our Reviews on Google</h2>
                    <p className="mb-2">Want to write us a review on Google?</p>
                    <Link href={googleReviews.newReviewUrl} ><Button>Click Here</Button></Link>
                </div>
                <Slider {...settings}>
                    {googleReviews.reviewsList.map(({ name, message, url }, i) => (
                        <div key={i} className="review-card">
                            <div className="review-card-content">
                                <div>
                                    <p className="review-stars google">
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
                                    <Link href={url}><span className="review-name">{name}</span></Link><br />
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}