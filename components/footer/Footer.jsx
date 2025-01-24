/* Footer Component */

// React Components
import { Container, Row, Col, Image } from 'react-bootstrap'
import Link from "next/link";

// Custom Components
import Newsletter from "./Newsletter";
import NewsletterModal from "./NewsletterModal";
import NewsletterColumn from "./NewsletterColumn";
import ThankYou from "./ThankYou";
import Brands from "./Brands";
import Marquee from './Marquee'
import Copyright from './Copyright'
import Media from './Media'
import Menu from './Menu'
import Contact from './Contact'
import Summary from './Summary'

// Custom Content
import footer from 'public/content/en_US/components/footer.content'

export default function Footer() {

  /* Check For Newsletter Section */
  function renderNewsletter() {
    if (footer.newsletter.type == "section") {
      return (
        <Newsletter {...footer.newsletter} />
      )
    }
  }

  /* Check For Newsletter Modal */
  function renderNewsletterModal() {
    if (footer.newsletter.type == "modal") {
      return (
        <NewsletterModal {...footer.newsletter} />
      )
    }
  }

  /* Check For Newsletter Column*/
  function renderNewsletterColumn() {
    if (footer.newsletter.type == "column") {
      return (
        <NewsletterColumn {...footer} />
      )
    }
  }

  /* Check For ThankYou */
  function renderThankYou() {
    if (footer.thankYou !== undefined) {
      return (
        <ThankYou {...footer} />
      )
    }
  }

  /* Check For Brands */
  function renderBrands() {
    if (footer.brands !== undefined) {
      return (
        <Brands {...footer} />
      )
    }
  }

  /* Check For SubBanner */
  function renderSubBanner() {
    if (footer.subBanner !== undefined) {
      return (
        <p className="sub-banner">{footer.subBanner}</p>
      )
    }
  }

  /* Check For SuperBanner */
  function renderSuperBanner() {
    if (footer.superBanner !== undefined) {
      return (
        <p className="super-banner">{footer.superBanner}</p>
      )
    }
  }

  /* Check For Banner */
  function renderBanner() {
    if (footer.banner !== undefined) {
      return (
        <p className="banner">{footer.banner}</p>
      )
    }
  }

  /* Check For Summary */
  function renderSummary() {
    if (footer.summary !== undefined) {
      return (
        <Summary {...footer} />
      )
    }
  }

  return (
    <>
      <footer>
        {renderThankYou()}

        <section className="footer">
          <Container className="pb-0">
            <div className="footer-banners">
              {renderBanner()}
              {renderSubBanner()}
            </div>
            <Row className="footer-row align-items-center">
              <Media {...footer} />
              <Menu {...footer} />
              {renderSummary()}
            </Row>
          </Container>
        </section>
        
        <Marquee {...footer} />
        <Copyright {...footer} />
      </footer>
    </>
  );
}
