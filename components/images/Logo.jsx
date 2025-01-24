/* Logo Component */

// React Components
import { Image } from "react-bootstrap"

export default function Logo({ logo }) {
  return (
    <div className="logo">
      <figure>
        <Image
          src={logo.img.src} alt={logo.img.alt} height={logo.img.height} width={logo.img.width} />
      </figure>
    </div>
  )
}