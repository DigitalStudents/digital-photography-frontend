// ImageGallery.jsx
import React, { useState } from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import './ImageGallery.css'

const ImageGallery = ({ productImages, id }) => {
    const [mainImage, setMainImage] = useState(productImages[0]);

    return (
        <div>
            <Image src={import.meta.env.VITE_IMAGES_URL+id+"%2F"+mainImage+"?alt=media"} alt="Main Product" fluid className="main-product-image" />
            <Row>
                {productImages.map((img, index) => (
                    <Col xs={3} key={index} className="mb-2">
                        <Image className="gallery-product-image" src={import.meta.env.VITE_IMAGES_URL+id+"%2F"+img+"?alt=media"} alt={`Product ${index}`} thumbnail onClick={() => setMainImage(img)} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default ImageGallery;
