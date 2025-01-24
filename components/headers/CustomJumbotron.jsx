import PropTypes from 'prop-types';

export default function CustomJumbotron({ jumbotron }) {
    return (
        <section id="headers" className="jumbotron clip-bottom-right">
            <div className="jumbotron-content">
                <h3>{jumbotron.title3.map(({service}, index) => <span key={index}>{service}</span>)}</h3>
                <h1>{jumbotron.title}&nbsp;<span>{jumbotron.title2}</span></h1>
                <p>{jumbotron.text}</p>
            </div>
        </section>
    );
}

CustomJumbotron.propTypes = {
    jumbotron: PropTypes.shape({
        title: PropTypes.string.isRequired,
        title2: PropTypes.string.isRequired,
        title3: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired,
};
