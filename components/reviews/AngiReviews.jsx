/* Angi Reviews Component */

// React Components
import { Button } from 'react-bootstrap'
import Link from 'next/link'

export default function AngiReviews({ angiReviews }) {

    return (
        <div className="review">
            <div className="review-list text-center mb-5">
                <h2 className="mb-0 text-center">See our Reviews on Home Advisor</h2>
                <p className="mb-2">Want to write us a review on Home Advisor?</p>
                <Link href={angiReviews.newReviewUrl} target="_blank"><Button>Click Here</Button></Link>
            </div>
            {angiReviews.reviewsList.map(({ name, date, message }, i) => (
                <div key={i} className="review-card">
                    <div data-aos="fade-up" className="review-card-content">
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
        </div>
    )
}