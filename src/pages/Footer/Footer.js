import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import './Footer.css'

import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div>
        <Container fluid className="footer">
       <Row>
         <Col md={3} sm={12}>
           <h3>ABOUT US</h3> <hr />
           <p className="pt-4">Duis leo justo, condimentum at purus eu,Aenean sed dolor sem. Etiam massa libero, auctor vitae egestas et, accumsan quis nunc.Duis leo justo, condimentum at purus eu, posuere pretium tellus..</p>
         </Col>
         <Col md={3} sm={12}> 
           <h3>Feel Hunger! Order Your Like Food.</h3> <hr />
          <div>
              <p>Book A Table</p>
              <p>Dogfood och Sliders foodtruck. Under Om oss kan ni läsa</p>
              <p>Make A Call</p>
          </div>
         </Col>

         <Col md={3} sm={12}>
           <h3>RECENT POST</h3> <hr />
          <div>
              <p>  Opening Hours</p>
              <p>Monday-Friday: 8am - 4pm <br /> Saturday: 9am - 5pm</p>
              <p>Make A Call</p>
             
          </div>
         </Col>
         <Col md={3}>
           <h4>Subscribe</h4> <hr />
           <p>Stay in the know with news and promotions</p> 
            
            <input  type="text" className="form-control w-50 mx-auto" placeholder="text......" />
            <a href="/login"> <Button className="btn bg-primary my-4 px-5">Sign Up</Button></a>
         </Col> 
          <p className="mt-3">Copyright &copy; All Reserved by
       in 2021</p>
       <hr style={{width: "110px", margin: "auto"}} />
       </Row>
     </Container>
   </div>
    );
};

export default Footer;
