import PropTypes from 'prop-types';

export default function Jumbotron({ jumbotron }) {
    return (
        <section id="headers" className="jumbotron">
            <div className="jumbotron-content">
                <h1>{jumbotron.title}</h1>
                <p>{jumbotron.text}</p>
            </div>
        </section>
    );
}

Jumbotron.propTypes = {
    jumbotron: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired,
};
