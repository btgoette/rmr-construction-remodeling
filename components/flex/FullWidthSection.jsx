import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col, Image } from 'react-bootstrap'

const FullWidthSection = ({ background, imageSrc, imageAlt, lowres, children, textFlex, imageFlex, imageFirst = true }) => {
    return (
        <>
            <div className={background + " full-width-section d-none d-lg-flex"}>
                {imageFirst ? (
                    <>
                        <div className={"image-section " + imageFlex} style={{ backgroundImage:`url(${lowres})`}}>
                            <Image src={imageSrc} alt={imageAlt} className="image" />
                        </div>
                        <div className={"text-section " + textFlex}>
                            <div>
                                {children}
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className={"text-section " + textFlex}>
                            <div>
                                {children}
                            </div>
                        </div>
                        <div className={"image-section " + imageFlex} style={{ backgroundImage:`url(${lowres})`}}>
                            <Image src={imageSrc} alt={imageAlt} className="image" />
                        </div>
                    </>
                )}
            </div>
            <Row className={background + " d-lg-none"}>
                <Col lg={6}>
                    <figure className="mt-0">
                        <Image src={imageSrc} className="w-100" alt={imageAlt} style={{ backgroundImage:`url(${lowres})`}}/>
                    </figure>
                </Col>
                <Col lg={6}>
                    <div className="text-section">
                        <div>
                            {children}
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

FullWidthSection.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    children: PropTypes.node,
    imageFirst: PropTypes.bool
};

export default FullWidthSection;
