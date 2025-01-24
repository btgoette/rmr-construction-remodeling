/* Google Reviews Component */

// React Components
import { Button } from 'react-bootstrap'
import Link from 'next/link'

export default function GoogleReviews({ googleReviews }) {

    return (
        <div className="review">
            <div className="review-list text-center">
                <div className="text-center mb-5">
                    <h2 className="mb-0 text-center">See our Reviews on Google</h2>
                    <p className="mb-2">Want to write us a review on Google?</p>
                    <Link href={googleReviews.newReviewUrl}><Button>Click Here</Button></Link>
                </div>
                {googleReviews.reviewsList.map(({ name, date, message, url }, i) => (
                    <div key={i} className="review-card">
                        <div data-aos="fade-up" className="review-card-content">
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
            </div>
        </div>
    )
}