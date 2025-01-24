/* Figure Component */

// React Components
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Figure({ src, alt, width, height, lowres, className }) {
    return (
        <figure className="figure">
            <LazyLoadImage
                className={className}
                src={src}
                alt={alt}
                width={width}
                height={height}
                style={{ backgroundImage: `url(${lowres})` }}
            />
        </figure>
    )
}
