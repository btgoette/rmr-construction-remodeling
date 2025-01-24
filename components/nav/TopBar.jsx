/* Nav Top Bar Component */

// React Components
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function TopBar({ topBar }) {
    return (
        <div className={topBar.display + " top-bar"}>
            <span className="d-none d-sm-flex">CALL US FOR FREE QUOTE &nbsp;&nbsp;</span>
            <i className="fa fa-phone-volume"></i>&nbsp;&nbsp;<Link href={"tel:" + topBar.phone}>{topBar.phone}</Link>
        </div>
    )
}