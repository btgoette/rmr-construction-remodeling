/* Yelp Reviews Component */

// React Components
import { Button } from 'react-bootstrap'
import Link from 'next/link'

export default function YelpReviews({ yelpReviews }) {

    return (
        <div className="review">
            <div className="review-list text-center">
                <div className="text-center mb-5">
                    <h2 className="mb-0 text-center">See our Reviews on Yelp</h2>
                    <p className="mb-2">Want to write us a review on Yelp?</p>
                    <Link href={yelpReviews.newReviewUrl}><Button>Click Here</Button></Link>
                </div>
                {yelpReviews.reviewsList.map(({ name, date, message, location, url }, i) => (
                    <div key={i} className="review-card">
                        <div data-aos="fade-up" className="review-card-content">
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
            </div>
        </div>
    )
}