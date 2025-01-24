import React from 'react';
import PropTypes from 'prop-types';

export default function JumbotronWithSidebar({ jumbotron, children }) {
    return (
        <div id="headers" className="jumbotron jumbotron-with-sidebar">
            <div className="jumbotron-content">
                <div className="main-content">
                    <h1>{jumbotron.title}</h1>
                    <p className="d-none d-lg-block">{jumbotron.text}</p>
                </div>
                <div className="sidebar-content">
                    {children}
                </div>
            </div>
        </div>
    );
}

JumbotronWithSidebar.propTypes = {
    jumbotron: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired,
    children: PropTypes.node
};
