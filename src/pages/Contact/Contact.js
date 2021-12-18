import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Contact = () => {
    return (// contact page
        <div className="container my-5 py-5" id="contact">


            <Container >
                <Row>
                    <Col md={6}>
                      <div>
                          <img className="img-fluid" src="https://www.newzbullet.com/uplds/2020/08/Take-Care-of-These-5-Things-While-Ordering-Food-Online.jpg" alt="" />
                      </div>
                    </Col>
                    <Col md={6}>
                        <div>
                            <form id="contactform" action="https://formsubmit.io/send/imranrh247@gmail.com" method="POST">
                                <div class="row">
                                    <div class="form-group col-md-6 ">
                                        <label  for="name">Your Name</label>
                                        <input type="text" name="name" class="form-control" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="name">Your Email</label>
                                        <input type="email" class="form-control" name="email" />
                                    </div>
                                </div> 
                                <br />
                                <div class="form-group">
                                    <label for="name">Subject</label>
                                    <input type="text" class="form-control" name="subject" />

                                </div> 
                                <br />
                                <div class="form-group">
                                    <label for="name">Message</label>
                                    <textarea class="form-control" name="message" rows="6" data-rule="required" ></textarea>

                                </div>

                                <div class="text-center"><button class="bg-primary mt-2 text-white rounded px-3 py-2" type="submit">Send Message</button></div>
                            </form>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Contact;