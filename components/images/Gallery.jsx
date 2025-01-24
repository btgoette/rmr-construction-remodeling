/* Gallery Component*/

// React Components
import ImageGallery from "react-image-gallery";

export default function Gallery({ gallery }) {

    return (
        <div className="my-5">
            <p>
                <strong>
                    *Feel free to arrow through our slides below.
                </strong>
            </p>
            <ImageGallery items={gallery.images} />
        </div>
    )
}
