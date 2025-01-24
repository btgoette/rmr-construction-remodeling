/* Yelp Reviews Slider Component */

// React Components
import { Button } from 'react-bootstrap'
import Link from 'next/link'
import Slider from "react-slick"

export default function YelpReviews({ yelpReviews }) {

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
            <div>
                <div className="review-list text-center mb-5">
                    <h2 className="mb-0">See our Reviews on Yelp</h2>
                    <p className="mb-2">Want to write us a review on Yelp?</p>
                    <Link href={yelpReviews.newReviewUrl} ><Button>Click Here</Button></Link>
                </div>
                <Slider {...settings}>
                    {yelpReviews.reviewsList.map(({ name, location, date, url, message }, i) => (
                        <div key={i} className="review-card">
                            <div className="review-card-content">
                                <div>
                                    <p className="review-stars yelp">
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
                                    <span className="review-location">{location}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}