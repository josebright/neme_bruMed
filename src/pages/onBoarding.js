import React, { Component } from "react";
import { Link } from "react-router-dom";
import image_2 from '../images/image_2.svg';
import image_3 from '../images/image_3.svg';
import '../App.css';

import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'


class CustomSlide extends Component {
    render() {
      const { image, title, text, ...props } = this.props;
      return (
        <div {...props}>
            <div>
                <img src={image} className="image_1" alt="image" />
                <h3 className="text-center">{title}</h3>
                <p className="text-center">{text}</p>
                <Link className="link" to="/register">
                    <div className="button">Register</div>
                </Link>
                <p className="text-center">Already have an account? <Link className="link" to="/signin">Sign In</Link></p>
            </div>
        </div>
      );
    }
  }

export default class onBoarding extends Component {
    render() {
        const settings = {
            // dots: true,
            arrows: false,
            autoplay: true,
            // autoplaySpeed: 2000,
            // pauseOnHover: true,
            fade: true,
            infinite: false,
            accessibility: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: false
        };

    return (
        <div className="home section_onBoard">
            <Slider {...settings}>
                <CustomSlide image={image_2} title={"Get Online Consultation"} text={"Online video and chat consultation with the doctor of your choice"} />
                {/* <CustomSlide image={image_3} title={"Book Appointments"} text={"No need to go anywhere, book your appointments while seating at homes."} /> */}
            </Slider>
        </div>
    );}
}