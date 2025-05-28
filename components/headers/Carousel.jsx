/* Carousel Component */

// React Components
import { useState } from 'react';
import { Carousel, Image } from 'react-bootstrap';

function ControlledCarousel({ carousel }) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    function renderTitle(title) {
        if (title !== undefined) {
            return (
                <h1>
                    {title}
                </h1>
            )
        }
    }

    function renderSubTitle(subTitle) {
        if (subTitle !== undefined) {
            return (
                <h2>
                    {subTitle}
                </h2>
            )
        }
    }

    return (
        <Carousel id="headers" activeIndex={index} onSelect={handleSelect} controls={false} indicators={false} interval={3000} fade>
            {carousel.slide.map(({ img, title, subTitle }, i) => (
                <Carousel.Item key={i}>
                    <Image loading="lazy" className="d-none d-lg-block w-100" src={img.srcLg} alt={img.alt} height={img.height} width={img.width} style={{ backgroundImage: `url(${img.lowres})` }} />
                    <Image loading="lazy" className="d-none d-sm-block d-lg-none w-100" src={img.srcMd} alt={img.alt} height={img.height} width={img.width} style={{ backgroundImage: `url(${img.lowres})` }} />
                    <Image loading="lazy" className="d-block d-sm-none w-100" src={img.src} alt={img.alt} height={img.height} width={img.width} style={{ backgroundImage: `url(${img.lowres})` }} />
                    <Carousel.Caption className="text-center">
                        {renderTitle(title)}
                        {renderSubTitle(subTitle)}
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default ControlledCarousel;