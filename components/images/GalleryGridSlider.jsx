/* Gallery Grid Slider Component */

import React, { useState } from 'react';
import { Row, Col, Modal, Button, Image, Carousel } from 'react-bootstrap';
import Slider from 'react-slick'
import PropTypes from 'prop-types';

export default function GalleryGridSlider({ gallery }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleShow = (index) => {
    setSelectedIndex(index);
    setShowModal(true);
  };

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

  const handleClose = () => setShowModal(false);

  function renderCaption(caption) {
    if (caption !== undefined) {
      return (
        <p className="thumbnail-caption">{image.caption}</p>
      )
    }
  }

  return (
    <div className="gallery-grid gallery-grid-slider">
      <p>
        <strong>*click on an image below to see full size.</strong>
      </p>
        <Slider {...settings}>
        {gallery.images.map((image, i) => (
          <div key={i} className="thumbnail-container">
            <Image
              className="thumbnail"
              src={image.thumbnail}
              alt={image.thumbnailAlt || `Image ${i}`}
              onClick={() => handleShow(i)}
            />
            {renderCaption()}
          </div>
        ))}
        </Slider>

      <Modal show={showModal} onHide={handleClose} size="xl">
        <Modal.Body className="modal-body-custom">
          {/* Close Button */}
          <Button
            variant="outline-secondary"
            className="gallery-modal-close-button"
            onClick={handleClose}
          >
            &times;
          </Button>

          <Carousel activeIndex={selectedIndex} onSelect={(selectedIndex) => setSelectedIndex(selectedIndex)}>
            {gallery.images.map((image, i) => (
              <Carousel.Item key={i}>
                <Image
                  className="full-size-image"
                  src={image.original}
                  alt={image.originalAlt || 'Full-Size'}
                  fluid
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </div>
  );
}

GalleryGridSlider.propTypes = {
  gallery: PropTypes.shape({
    images: PropTypes.arrayOf(
      PropTypes.shape({
        thumbnail: PropTypes.string.isRequired,
        thumbnailAlt: PropTypes.string,
        original: PropTypes.string.isRequired,
        originalAlt: PropTypes.string,
        caption: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
};
