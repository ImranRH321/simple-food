import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Our.css'

const Our = () => {
    return (
        <div>
             <section className='showcases '>
              <div className='showcase-overlay'>
                
                <Container>
                  <Row>
                    <Col>
                      <div>
                      <h1 className='mt-5'>Resturent </h1>
                      {/* <img className="img-fluid" src="https://blog.gotenzo.com/hs-fs/hubfs/1%20gif.gif?width=853&name=1%20gif.gif" alt="" /> */}
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </section>
        </div>
    );
};

export default Our;