/* Image Slider Component */

// React Components
import { Container, Row, Col } from 'react-bootstrap'
import ReactCompareImage from 'react-compare-image';

export default function ImageCompareSlider({ images }) {
   return (
      <Row className="image-compare">
         {images.map(({ leftImg, leftImgAlt, rightImg, rightImgAlt }, i) => (
            <Col md={6} key={i} className="image-compare-slider p-3">
               <div className="before-after">
                  <span className="before">Before</span><span className="after">After</span>
               </div>
               <ReactCompareImage leftImage={leftImg} leftImageAlt={leftImgAlt} rightImage={rightImg} rightImageAlt={rightImgAlt} />
            </Col>
         ))}
      </Row>
   )
}