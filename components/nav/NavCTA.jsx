import { Button } from 'react-bootstrap';
import Link from 'next/link';
import PropTypes from 'prop-types';

export default function NavCTA({ cta, className }) {
  return (
    <div className={"nav-cta "+ className}>
      <Link href={cta.url}>
        CALL US FOR FREE QUOTE<br/>
        <span><i className="fa fa-phone-volume"></i>&nbsp;{cta.name}</span>
      </Link>
    </div>
  );
}

NavCTA.propTypes = {
  cta: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.string,
};
