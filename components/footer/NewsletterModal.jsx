import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';

export default function NewsletterModal({newsletter}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // Show the modal after 5 seconds
    const timeoutId = setTimeout(() => {
      handleShow();
    }, 5000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []); // The empty dependency array ensures that this effect runs only once


  /* Check First Name */
  function renderFirstName() {
    if (newsletter.fields.firstName !== undefined) {
      return (
        <fieldset className="newsletter-first-name">
          <input
            aria-label="Name"
            type="text"
            name={newsletter.fields.firstName}
            pattern="[a-zA-Z][a-zA-Z ]+"
            placeholder="First Name"
            required
          />
        </fieldset>
      )
    }
  }

  /* Check Last Name */
  function renderLastName() {
    if (newsletter.fields.lastName !== undefined) {
      return (
        <fieldset className="newsletter-last-name">
          <input
            aria-label="Name"
            type="text"
            name={newsletter.fields.lastName}
            pattern="[a-zA-Z][a-zA-Z ]+"
            placeholder="Last Name"
            required
          />
        </fieldset>
      )
    }
  }

  return (
    <>
      <Modal className="newsletter" show={show} onHide={handleClose}>
        <div className="newsletter-block">
          <Modal.Header closeButton>
            <Modal.Title>{newsletter.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <p>
              {newsletter.text}
            </p>

            <form
              id="newsletterForm"
              className="newsletter-form align-items-center"
              action=""
              method="POST"
              acceptCharset="UTF-8"
            >

              <div className="names d-md-flex">
                {renderFirstName()}
                {renderLastName()}
              </div>

              <fieldset className="newsletter-email">
                <input
                  aria-label="Email"
                  type="email"
                  name={newsletter.fields.email}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  placeholder="Email"
                  required
                />
              </fieldset>
              <fieldset className="newsletter-submit">
                <input
                  onClick={handleClose}
                  type="submit"
                  name="submit-button"
                  value="Submit"
                  className="btn btn-primary"
                />
              </fieldset>
            </form>
          </Modal.Body>
        </div>
      </Modal >
    </>
  );
}