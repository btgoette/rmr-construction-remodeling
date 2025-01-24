/* PageLayout Component */

// Custom Components
import Nav from './nav/Nav'
import Footer from './footer/Footer'

export default function PageLayout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
