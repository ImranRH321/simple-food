import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import banner1 from "../../images/Dinner/dinner1.png"
import banner2 from "../../images/Dinner/dinner2.png"
import banner3 from "../../images/Dinner/dinner3.png"
import banner4 from "../../images/Dinner/dinner4.png"
import banner5 from "../../images/Breakfast/breakfast1.png"
import banner6 from "../../images/Breakfast/breakfast2.png"
import banner7 from "../../images/Breakfast/breakfast3.png"
import banner8 from "../../images/Breakfast/breakfast4.png"
import banner9 from "../../images/lunch/lunch1.png"
import banner10 from "../../images/lunch/lunch2.png"
import banner11 from "../../images/lunch/lunch3.png"
import banner12 from "../../images/lunch/lunch4.png"

import './About.css'
const About = () => {

  return (
    <div id="about">
      <Container>
        <Row> 
          <hr className="text-white fs-bolder"/> <p className="text-warning fs-bold fs-2">**********</p>
          <h2 className="bg-dark text-info p-2 rounded-pill">Dinner food</h2>

          <Col className=" col-sm-12 col-md-6 col-lg-3 g-4 box ">
            <div className="p-3">
            <img className="img-fluid" src={banner1} alt="" />
            <p className="text-info fst-italic">
             Aenean suscipit vehicula purus quis iaculis. Aliquam nec leo nisi. Nam urna arcu, maximus eget ex nec, consequat pellentesque
             </p>
            </div>
          </Col>

          <Col className=" col-sm-12 col-md-6 col-lg-3 g-4 box">
           <div className="p-3">
           <img className="img-fluid" src={banner2} alt="" />
           <p className="text-info fst-italic">
             Aenean suscipit vehicula purus quis iaculis. Aliquam nec leo nisi. Nam urna arcu, maximus eget ex nec, consequat pellentesque
             </p>
           </div>
            </Col>

              <Col className=" col-sm-12 col-md-6 col-lg-3 g-4 box">
            <div className="p-3">
            <img className="img-fluid" src={banner3} alt="" />
             <p className="text-info fst-italic">
             Aenean suscipit vehicula purus quis iaculis. Aliquam nec leo nisi. Nam urna arcu, maximus eget ex nec, consequat pellentesque
             </p>
           </div>
           </Col>

            <Col className=" col-sm-12 col-md-6 col-lg-3 g-4 box">
            <div className="p-3">
            <img className="img-fluid" src={banner4} alt="" />
           <p className="text-info fst-italic">
             Aenean suscipit vehicula purus quis iaculis. Aliquam nec leo nisi. Nam urna arcu, maximus eget ex nec, consequat pellentesque
             </p>
           </div>
            
          </Col>

        </Row>
        {/* ------------------------second row---------------------------- */}

        <Row> 
          {/* <hr className="text-danger fs-bolder"/> */}
          <h2 className="bg-dark text-info p-2 rounded-pill my-5">Breakfast food</h2>
          {/* <hr className="text-danger fs-bolder"/> */}
        
          <Col className=" col-sm-12 col-md-6 col-lg-3 g-4 box">
            <div className="p-3">
            <img className="img-fluid" src={banner5} alt="" />
           <p className="text-warning fst-italic">
             Aenean suscipit vehicula purus quis iaculis. Aliquam nec leo nisi. Nam urna arcu, maximus eget ex nec, consequat pellentesque
             </p>
           </div>
          </Col>

          <Col className=" col-sm-12 col-md-6 col-lg-3 g-4 box">
            <div className="p-3">
            <img className="img-fluid" src={banner6} alt="" />
            <p className="text-warning fst-italic">
             Aenean suscipit vehicula purus quis iaculis. Aliquam nec leo nisi. Nam urna arcu, maximus eget ex nec, consequat pellentesque
             </p>
           </div>
            </Col>

              <Col className=" col-sm-12 col-md-6 col-lg-3 g-4 box">
            <div className="p-3">
            <img className="img-fluid" src={banner7} alt="" />
            <p className="text-warning fst-italic">
             Aenean suscipit vehicula purus quis iaculis. Aliquam nec leo nisi. Nam urna arcu, maximus eget ex nec, consequat pellentesque
             </p>
           </div>
           </Col>

            <Col className=" col-sm-12 col-md-6 col-lg-3 g-4 box">
            <div className="p-3">
            <img className="img-fluid" src={banner8} alt="" />
            <p className="text-warning fst-italic">
             Aenean suscipit vehicula purus quis iaculis. Aliquam nec leo nisi. Nam urna arcu, maximus eget ex nec, consequat pellentesque
             </p>
           </div>
          </Col>

        </Row>

         {/* ------------------------third row---------------------------- */}

         <Row className="g-4"> 
          <h2 className="bg-dark text-info mt-5 my-5 p-2 rounded-pill">lunch food</h2>
          <Col className=" col-sm-12 col-md-6 col-lg-3 box">
            <div className="p-3">
            <img className="img-fluid" src={banner9} alt="" />
            <p className="text-white fst-italic">
             Aenean suscipit vehicula purus quis iaculis. Aliquam nec leo nisi. Nam urna arcu, maximus eget ex nec, consequat pellentesque
             </p>
           </div>
          </Col>

          <Col className=" col-sm-12 col-md-6 col-lg-3  box">
            <div className="p-3">
            <img className="img-fluid" src={banner10} alt="" />
           <p className="text-white fst-italic">
             Aenean suscipit vehicula purus quis iaculis. Aliquam nec leo nisi. Nam urna arcu, maximus eget ex nec, consequat pellentesque
             </p>
           </div>
            </Col>

              <Col className=" col-sm-12 col-md-6 col-lg-3 box">
            <div className="p-3">
            <img className="img-fluid" src={banner11} alt="" />
            <p className="text-white fst-italic">
             Aenean suscipit vehicula purus quis iaculis. Aliquam nec leo nisi. Nam urna arcu, maximus eget ex nec, consequat pellentesque
             </p>
           </div>
           </Col>

            <Col className=" col-sm-12 col-md-6 col-lg-3  box">
            <div className="p-3">
            <img className="img-fluid" src={banner12} alt="" />
            <p className="text-white fst-italic">
             Aenean suscipit vehicula purus quis iaculis. Aliquam nec leo nisi. Nam urna arcu, maximus eget ex nec, consequat pellentesque
             </p>
           </div>
          </Col>

        </Row>
      </Container>
      <p className="text-warning fs-bold fs-2">**********</p>
      <hr className="text-white mt-3 fs-bolder"/>
    </div>
   
   
  );
};

export default About;
