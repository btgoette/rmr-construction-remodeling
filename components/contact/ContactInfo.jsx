/* ContactInfo Component */

// React Components
import { useState } from 'react';
import { Col } from 'react-bootstrap';
import Link from 'next/link'

export default function ContactInfo({ contact }) {

  function renderOwner() {
    if (contact.owner !== undefined) {
      return (
        <p><strong>Owner:</strong><br />{contact.owner}</p>
      )
    }
  }

  function renderPhone() {
    if (contact.phone !== undefined) {
      return (
        <p><strong>Phone:</strong><br /><Link href={"tel:" + contact.phone}>{contact.phone}</Link><br/>
        <strong>Call or Text</strong></p>
      )
    }
  }

  function renderSecondPhone() {
    if (contact.secondPhone !== undefined) {
      return (
        <p><strong>Phone:</strong><br /><Link href={"tel:" + contact.secondPhone}>{contact.secondPhone}</Link></p>
      )
    }
  }

  function renderFax() {
    if (contact.fax !== undefined) {
      return (
        <p><strong>Fax:</strong><br /><Link href={"tel:" + contact.fax}>{contact.fax}</Link></p>
      )
    }
  }


  function renderEmail() {
    if (contact.email !== undefined) {
      return (
        <p><strong>Email:</strong><br /><Link href={"mailto:" + contact.email}>
          {contact.email}
        </Link></p>
      )
    }
  }

  function renderAddress() {
    if (contact.address !== undefined) {
      return (
        <p><strong>Address:</strong><br />
          {contact.address.map(({ line }, i) => (
            <span key={i}>{line}<br /></span>
          ))}
        </p>
      )
    }
  }

  function renderOpenClose() {
    if (contact.openClose !== undefined) {
      return (
        <p><strong>Hours of Operation:</strong><br />
          {contact.openClose.days}<br />
          {contact.openClose.hours}
          {contact.openClose.additionalDays}
          {contact.openClose.additionalHours}
        </p>
      )
    }
  }


  return (
    <Col md={contact.col}>
      <div className="contact-info">
        <h2>Contact Info</h2>
        <h3 className="company-name">{contact.companyName}</h3>
        {renderOwner()}
        {renderAddress()}
        {renderPhone()}
        {renderSecondPhone()}
        {renderFax()}
        {renderEmail()}
        {renderOpenClose()}
      </div>
    </Col >

  )
}