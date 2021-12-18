import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, fee, img, description } = service;
    return (
       
            <div className=" col-sm-12 col-md-6 col-lg-4 g-4 ">
            <Card className="card  text-dark text-start hovers">
                <Card.Img variant="top"  src={img} height="300px" />
                <Card.Body className='co box'>
                    <Card.Title className="title">{name}</Card.Title>
                    <Card.Title className="title">Price : {fee}</Card.Title>
                    <Card.Text>{description} </Card.Text>
                    <Link to={`/booking/${_id}`}><button className="btn rounded-pill co box border border-danger my-3">Book Now</button> </Link>
                </Card.Body>
                
            </Card>

        </div>
       
    );
};

export default Service;