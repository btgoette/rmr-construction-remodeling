/* Brands Component */

// React Components
import { Container, Row, Col, Image } from 'react-bootstrap'
import Slider from 'react-slick'
import Link from 'next/link'

export default function Brands({ brands }) {

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
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

    /* Check For Title */
    function renderTitle() {
        if (brands.title !== undefined) {
            return (
                <h2>{brands.title}</h2>
            )
        }
    }

    return (
        <div className="brands">
            {renderTitle()}
            <div className="align-items-center justify-content-around d-none d-lg-flex p-5">
                {brands.brandImages.map(({ url, src, alt, width, height }, i) => (
                    <div key={i} className="text-center">
                        <Link href={url} target="_blank">
                            <Image className="brand-image" src={src} alt={alt} height={height} width={width} />
                        </Link>
                    </div>
                ))}
            </div>
            <Slider {...settings} className="d-lg-none">
                {brands.brandImages.map(({ url, src, alt, width, height }, i) => (
                    <Link key={i} href={url} target="_blank">
                        <Image className="brand-image" src={src} alt={alt} height={height} width={width} />
                    </Link>
                ))}
            </Slider>
        </div>
    )
}