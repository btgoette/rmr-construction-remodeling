import { Container, Navbar, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Brand from './Brand';
import Logo from '../images/Logo';

function NavBarTypeB({ nav }) {
  return (
    <>
      <div className="w-100 text-center d-none d-md-block">
        <Logo {...nav.brand} />
      </div>
      {['xl'].map((expand) => (
        <Navbar key={expand} variant={nav.variant} data-bs-theme={nav.variant} expand={expand}>
          <Container fluid>
            <div className="d-flex d-md-none">
              <Brand {...nav} />
            </div>
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
                <Nav className="justify-content-center flex-grow-1">
                  {nav.navLinks.map((link, index) => (
                    <Nav.Link key={index} href={link.url}>{link.name}</Nav.Link>
                  ))}
                  {nav.navDropdown.map((dropdown, i) => (
                    <NavDropdown key={i} title={dropdown.title}>
                      {dropdown.navLinks.map((item, j) => (
                        <NavDropdown.Item key={j} href={item.url}>{item.name}</NavDropdown.Item>
                      ))}
                    </NavDropdown>
                  ))}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

NavBarTypeB.propTypes = {
  nav: PropTypes.shape({
    variant: PropTypes.string.isRequired,
    brand: PropTypes.shape({
      url: PropTypes.string.isRequired,
      logo: PropTypes.shape({
        img: PropTypes.shape({
          src: PropTypes.string.isRequired,
          alt: PropTypes.string.isRequired,
          width: PropTypes.string.isRequired,
          height: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
    navLinks: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
    navDropdown: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        navLinks: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
          })
        ).isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default NavBarTypeB;
