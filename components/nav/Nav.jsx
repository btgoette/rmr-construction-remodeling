import { Container, Navbar, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import PropTypes from 'prop-types';

// Custom Components
import TopBar from './TopBar';
import Brand from './Brand';
import CTA from '../CTA';
import BottomBar from './BottomBar';
import NavBarTypeA from './NavBarTypeA';
import NavBarTypeB from './NavBarTypeB';

// Custom Content
import defaultNavContent from 'public/content/en_US/components/nav.content';

export default function CustomNav({ navConfig = defaultNavContent }) {
  return (
    <>
      <TopBar {...navConfig} />

      {navConfig.type === 'A' && <NavBarTypeA nav={navConfig} />}
      {navConfig.type === 'B' && <NavBarTypeB nav={navConfig} />}

      <BottomBar {...navConfig} />
    </>
  );
}

CustomNav.propTypes = {
  navConfig: PropTypes.object,
};
