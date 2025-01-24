import React, { useState } from 'react';
import { Row, Col, Modal, Button, Image, Carousel } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function CustomGalleryGrid({ gallery }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleShow = (index) => {
    setSelectedIndex(index);
    setShowModal(true);
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
    <div id="images">
      <p>
        <strong>*click on an image below to see full size.</strong>
      </p>
      <div className="custom-gallery-grid mb-5">
        {gallery.images.map((image, i) => (
          <div key={i} 
          className={"thumbnail-container thumbnail-" + i}
          style={{ backgroundImage:`url(${image.original})`}}
            onClick={() => handleShow(i)}>

          </div>
        ))}
      </div>

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

CustomGalleryGrid.propTypes = {
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
