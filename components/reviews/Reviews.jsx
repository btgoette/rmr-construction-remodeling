/* Google Reviews Component */

// React Components
import { Button } from 'react-bootstrap'
import Link from 'next/link'

export default function Reviews({ reviews }) {

    return (
        <div className="review">
            <div className="review-list text-center">
                {reviews.reviewsList.map(({ name, message, location, url, date }, i) => (
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
                                <span className="review-location">{location}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}