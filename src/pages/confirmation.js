import React from "react";
import { Link } from "react-router-dom";
import image_con from '../images/Confirmation.png';
import image_time from '../images/time.png';
import image_phone from '../images/Phone.png';
import '../App.css';

const Confirmation = () => (
    <div>
        <img src={image_con} className="image_2 padding" alt="image_1" />
        <h2 className="text-center">Confirmation</h2>
        <p className="text-center">Your Appointment Was Created.</p>

        <div className="folder">
            <div>
                <h3>Dr. Michael Clarke</h3>
                <p>Dermatologist</p>
            </div>
            <hr />
            <div>
                <p>Appointment: <Link to="" className="link">Video Call</Link></p>
                <p>Date: <Link to="" className="link">Wednesday 30 december</Link></p>
                <div className="demo1">
                    <div className="flex-item-main"><img src={image_phone} className="image_a" alt="image_1" /></div>
                    <div>Phone <br /> 08229110525</div>
                </div>
                <div className="demo1">
                    <div className="flex-item-main"><img src={image_time} className="image_a" alt="image_1" /></div>
                    <div>Time <br /> 3:40 PM</div>
                </div>
            </div>
        </div>

        <Link className="link" to="/">
            <div className="button" >Back To Home</div>
        </Link>

        <Link className="link" to="/bookingpage">
            <div className="button" >View Appointment</div>
        </Link>
    </div>
);

export default Confirmation; 