import Button from '@restart/ui/esm/Button';
import React from 'react';
import logo from '../../../images/logo.png'
import './menu.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink as NavLink} from 'react-router-hash-link';

import useAuth from '../../../hooks/useAuth';

const Menu = () => {
    const { user, logOut } = useAuth()
    return (
        // header main menu
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-warning" sticky="top" >
            {/*  */}
                <Container>
                    <Navbar.Brand as={NavLink} className="text-white bg-dark px-3 rounded" to="/home">  <img width="110px" src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={NavLink} to="/home" className="text-dark fw-bolder fst-italic" >HOME</Nav.Link>
                        <Nav.Link as={NavLink} to="/home#about" className="text-dark fw-bolder fst-italic" >ABOUT</Nav.Link> 
                        <Nav.Link as={NavLink} to="/home#services" className="text-dark fw-bolder fst-italic" >SERVICES</Nav.Link>
                        {user?.email ?
                            <Nav.Link as={NavLink} to="/my-bookings#myBookings" className="text-dark fw-bolder fst-italic" >MY BOOKINGS</Nav.Link>
                            : ""}
                        {user?.email ?
                            <Nav.Link as={NavLink} to="/manage-all-bookings#MangeAllBookings" className="text-dark fw-bolder fst-italic" >MANAGE BOOKINGS</Nav.Link>
                            : ""}
                        {user?.email ?
                            <Nav.Link as={NavLink} to="/add-new-service" className="text-dark fw-bolder fst-italic" >ADD SERVICES</Nav.Link>
                            : ""}

                        <Nav.Link as={NavLink} to="/home#contact" className="text-dark fw-bolder fst-italic" >CONTACT</Nav.Link>
                        <Navbar.Text className="text-black">

                        </Navbar.Text>

                        {user?.email ?
                            <Button onClick={logOut} className="btn btn-danger text-white py-1 px-1 color">Log Out</Button> :
                            <Nav.Link as={NavLink} to="/login"  >LOGIN</Nav.Link>
                        }
                    </Navbar.Collapse>
                </Container>
                {

                    user?.email ? <a href="#login"><p className="">{user?.displayName}</p></a> : <b></b>
                }
            </Navbar>

        </>
    );
};

export default Menu;

