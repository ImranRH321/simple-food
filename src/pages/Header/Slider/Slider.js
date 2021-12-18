import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.squarespace-cdn.com/content/v1/56d650774c2f8520908886e3/1519667919545-IROAKT71W3H2KF9UK7QI/POS.gif?format=2500w"
      alt="First slide"
    />
    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
   
  <img
      className="d-block w-100"
      src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/484a6798617563.5ee03c18cfec0.jpg"  alt=''
    />
    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://s.tmimgcdn.com/scr/1200x750/164200/culinary-food-instagram-post-template-for-social-media_164218-original.jpg"  alt=''
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Slider;