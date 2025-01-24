import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-bootstrap'

export default function JumbotronWithVideo({ jumbotron, children }) {
    return (
        <div id="headers" className="jumbotron-with-video">
            <Row className="jumbotron-content align-items-center justify-content-center">
                <Col lg={7}>
                    <div className="main-content">
                        <h1>{jumbotron.title}</h1>
                        <p>{jumbotron.text}</p>
                    </div>
                </Col>
                <Col lg={3} className="video-content">
                    {children}
                </Col>
            </Row>
        </div>
    );
}

JumbotronWithVideo.propTypes = {
    jumbotron: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired,
    children: PropTypes.node
};
