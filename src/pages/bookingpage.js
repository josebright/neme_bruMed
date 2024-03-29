import React, { Component } from "react";
import { Link } from "react-router-dom";
import image_a from '../images/book_appointment_icon.svg';
import image_b from '../images/book_lab_test_icon.svg';
import image_c from '../images/view_appointment_icon.svg';
import image_d from '../images/my_medication_icon.svg';
import '../App.css';

import SearchField from "react-search-field";


class Data extends Component {
    render() {
      const { image, title, text, ...props } = this.props;
      return (
        <div {...props}>
            <div className="flex">
                <div className="flex-item-left">
                    <img src={image} className="image_3" alt="image_sample" />
                </div>
                <div className="flex-item-right">
                    <h4>{title}</h4>
                    <p>{text}</p>
                </div>
            </div>
        </div>
      );
    }
  }

  export default class BookingPage extends Component {
    render() {
    return (
        <div>
            <h3 className="right-align">Good Morning, Dwayne!</h3>

            <SearchField
                placeholder="Search GP By Speciality"
                classNames="box-center"
            />

            <div>
                <Link className="link" to="/doctors">
                    <Data image={image_a} title={"Book an Appointment"} text={"Select Your Doctor"} />
                </Link>
                <Link className="link" to="/">
                    <Data image={image_b} title={"Book a Lab Test"} text={"Get your sample collected from a clinic"} />
                </Link>
                <Link className="link" to="/doctors">
                    <Data image={image_c} title={"View Appointments"} text={"Your Upcoming Appointments"} />
                </Link>
                <Link className="link" to="/mymedicine">
                    <Data image={image_d} title={"My Medication"} text={"Manage your medicine and pills"} />
                </Link>
            </div>
            
        </div>
    );}
}