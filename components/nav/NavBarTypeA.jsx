import { Container, Navbar, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Brand from './Brand';
import NavCTA from './NavCTA';

function NavBarTypeA({ nav }) {
  const { navLinksPosition, ctaPosition } = nav.layoutOptions;

  const renderNavLinks = () => (
    <>
      {nav.navLinks.slice(0, 1).map((link, index) => (
        <Nav.Link key={index} href={link.url}>{link.name}</Nav.Link>
      ))}
      {nav.navDropdown.map((dropdown, i) => (
        <NavDropdown key={i} title={dropdown.title}>
          {dropdown.navLinks.map((item, j) => (
            <NavDropdown.Item key={j} href={item.url}>{item.name}</NavDropdown.Item>
          ))}
        </NavDropdown>
      ))}
      {nav.navLinks.slice(1, 3).map((link, index) => (
        <Nav.Link key={index} href={link.url}>{link.name}</Nav.Link>
      ))}
    </>
  );

  return (
    <>
      {['xl'].map((expand) => (
        <Navbar key={expand} variant={nav.variant} data-bs-theme={nav.variant} expand={expand}>

          <Brand {...nav} />
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className={`justify-content-${navLinksPosition} flex-grow-1`}>
                {renderNavLinks()}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <NavCTA {...nav} className="desktop-cta" />

        </Navbar>
      ))}
    </>
  );
}

NavBarTypeA.propTypes = {
  nav: PropTypes.shape({
    variant: PropTypes.string.isRequired,
    brand: PropTypes.object.isRequired,
    navLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
    navDropdown: PropTypes.arrayOf(PropTypes.object).isRequired,
    cta: PropTypes.object.isRequired,
    layoutOptions: PropTypes.shape({
      navLinksPosition: PropTypes.oneOf(['center', 'end']).isRequired,
      ctaPosition: PropTypes.oneOf(['inline', 'offcanvas']).isRequired
    }).isRequired
  }).isRequired,
};

export default NavBarTypeA;
