import { Button } from 'react-bootstrap';
import Link from 'next/link';
import PropTypes from 'prop-types';

export default function CTA({ cta, className }) {
  return (
    <div className={className}>
      <Link href={cta.url}>
        <Button className="btn btn-primary">{cta.name}</Button>
      </Link>
    </div>
  );
}

CTA.propTypes = {
  cta: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.string,
};
