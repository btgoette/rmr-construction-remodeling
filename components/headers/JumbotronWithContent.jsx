import PropTypes from 'prop-types';

export default function JumbotronWithContent({ children }) {
    return (
        <section id="headers" className="jumbotron">
            <div className="jumbotron-content">
                {children}
            </div>
        </section>
    );
}

JumbotronWithContent.propTypes = {
    jumbotron: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired,
};
