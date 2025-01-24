import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';

export default function RotatingPictureFrame({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [images]);

    return (
        <div className="rotating-picture-frame">
            {images.map(({src, alt, height, width, lowres}, index) => (
                <Image
                    key={index}
                    src={src}
                    alt={alt}
                    height={height}
                    width={width}
                    className={index === currentIndex ? 'active' : ''}
                    style={{ backgroundImage:`url(${lowres})`}}
                />
            ))}
        </div>
    );
};