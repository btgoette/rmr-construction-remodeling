/* Figure Component */

// React Components
import { useState } from 'react'
import { Image } from 'react-bootstrap'

export default function Figure({ src, alt, title, width, height, lowres, src300 }) {
    return (
        <figure className="figure">
            <Image
                src={src}
                srcSet={`${src300} 300w, ${src} 600w`}
                sizes="(max-width: 600px) 300px, 600px"
                alt={alt}
                title={title}
                loading="lazy"
                width={width}
                height={height}
                style={{ backgroundImage: `url(${lowres})` }}
            />
        </figure>
    )
}