import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Aboutfirst = () => {
    return (
        <div>
            <Container className='my-5 bg-danger text-white'>
                <Row>
                    <Col sm={12} md={6}>
                       <div>
                           <img className='img-fluid' src="https://media-cdn.tripadvisor.com/media/photo-s/1b/2a/85/8d/chilli-lounge-team-with.jpg" alt="" />
                       </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className='p-5 border-bottom border-end rounded border-info mt-2'>
                        <h2 className='text-info fs-bolder mb-5'> About Restoral</h2>
                        <p className='text-white fs-italic'>Restoral, one of today’s most renowned fast food restaurants, was established in 2013, as a quiet place where anyone could eat a burger or have a pizza that they loved. Our dedication to customers and quality food helps us to reach more today.</p>
                        </div>
                        <a className='btn rounded-pill px-5 border-warning bg-success fs-2 mt-2 text-warning' href='http://preview.themeforest.net/item/restaurant-website-template-responsive-html5/full_screen_preview/13841323?_ga=2.81255575.1472974408.1639546312-663374516.1637936442'>
                            Learn More
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Aboutfirst;