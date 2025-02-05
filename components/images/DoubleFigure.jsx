/* Double Figure Component */

// React Components
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function DoubleFigure({ image1, image2, className }) {
    return (
        <div className="double-figure">
            <div className="border-box-outline" data-aos="fade-in" data-aos-duration="500"></div>
            <figure className="figure figure-1" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100">
                <LazyLoadImage
                    className={className}
                    src={image1.src}
                    alt={image1.alt}
                    width={image1.width}
                    height={image1.height}
                    style={{ backgroundImage: `url(${image1.lowres})` }}
                />
            </figure>
            <figure className="figure figure-2" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">
                <LazyLoadImage
                    className={className}
                    src={image2.src}
                    alt={image2.alt}
                    width={image2.width}
                    height={image2.height}
                    style={{ backgroundImage: `url(${image2.lowres})` }}
                />
            </figure>
        </div>
    );
}