import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Aboutfirst from '../Aboutfirst/Aboutfirst';
import AboutUs from '../AboutUS/AboutUs';
import Contact from '../Contact/Contact';
import Slider from '../Header/Slider/Slider';
import Our from '../Our/Our';
import Ourservices from '../Ourservices/Ourservices';

// import PopularServices from '../PopularServices/PopularServices/PopularServices';
import Services from '../Services/Services/Services';



const Home = () => {
    const { isLoading } = useAuth();
    if (isLoading) {
        return <Spinner className="my-5" animation="border" variant="success" />
    }
    return (
        <div id="home">
            <Slider></Slider>
            <Aboutfirst />
            <Our />
            <Services></Services>
            {/* <PopularServices></PopularServices> */}
            <AboutUs></AboutUs>
          <Ourservices />
            <Contact></Contact>
        </div>

    );
};

export default Home;