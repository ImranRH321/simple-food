import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import './Ourservices.css'
import man1 from '../../images/man/ma1.png'
import man2 from '../../images/man/man2.png'
import man3 from '../../images/man/man3.png'

const Ourservices = () => {
    return (
        <div>
           <section className='showcase'>
              <div className='showcase-overlay'>
                <h1>Food</h1>
              </div>
            </section>
         <Container className="border-top-0 border border-info border border-3  p-5">
        <Row className="mx-auto g-3 text-center"> 
          <h2 className="">THE RESTAURANT</h2>
          <h4>A little about us and a breif history of how we started.</h4>
          <Col md={6} sm={12}>
            <Row>
              <Col md={6} sm={12}>
                <img src="https://demo.web3canvas.com/themeforest/tomato/img/thumb1.png" alt="loading" />
              </Col>
              <Col md={6} sm={12}>
                <img src="https://demo.web3canvas.com/themeforest/tomato/img/thumb2.png" alt="" />
                <img src="https://demo.web3canvas.com/themeforest/tomato/img/thumb3.png" alt="" />
              </Col>
            </Row>
          </Col>
          <Col md={6} sm={12}>
            <h5 className="text-center fst-italic">Cras ut viverra eros. Phasellus sollicitudin sapien id luctus tempor. Sed hend rerit inter dum sagittis. Donec nunc lacus, dapibus nec interdum eget, ultrices eget justo. Nam purus lacus, efficitur eget laoreet sed, finibus nec neque. Cras eget enim in diam dapibus sagittis. In massa est, dignissim in libero ac, fringilla ornare mi. Etiam interdum ligula purus.</h5>
          </Col>
        </Row>
    </Container>

        </div>
    );
};

export default Ourservices;