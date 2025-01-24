import React, { useState } from 'react';
import { Row, Col, Modal, Button, Image, Carousel } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function GalleryGrid({ gallery }) {
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
      <Row className="gallery-grid my-5">
        {gallery.images.map((image, i) => (
          <Col key={i} md={6} lg={3} className="thumbnail-container">
            <Image
              className="thumbnail"
              src={image.thumbnail}
              alt={image.thumbnailAlt || `Image ${i}`}
              onClick={() => handleShow(i)}
            />
            {renderCaption()}
          </Col>
        ))}
      </Row>

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

GalleryGrid.propTypes = {
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
