/* Nav Component */

// React Components
import { Navbar } from 'react-bootstrap'

// Custom Components
import Logo from '../images/Logo'

export default function Brand({ brand }) {
    return (
        <Navbar.Brand href={brand.url}>
            <Logo {...brand} />
        </Navbar.Brand>
    )
}