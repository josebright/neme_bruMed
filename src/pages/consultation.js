import React from "react";
import { Link } from "react-router-dom";
import image_1 from '../images/book_appointment_icon.svg';
import '../App.css';

const Consultation = () => (
    <div>
        <h2>Book Consultation</h2>
        <div className="flex-item">
            <div>
                <img src={image_1} className="image_3" alt="image_1" />
            </div>
            <div>
                <h3>Dr. Michael Clarke</h3>
                <div><img src={image_1} className="image_a" alt="image_1" /> Dermatologist</div>
                <div><img src={image_1} className="image_a" alt="image_1" /> Elizabeth hospital</div>
                <div><img src={image_1} className="image_a" alt="image_1" /> 4 miles away from you</div>
            </div>
        </div>

        <div className="blue-text"><img src={image_1} className="image_a" alt="image_1" /> Add to my care</div>

        <h3>Select Date for Consultation</h3>
        <div className="flex-item">
            <div className="rectangle">Wednesday <br /> Dec 30</div>
            <div className="rectangle">Thursday <br /> Dec 31</div>
            <div className="rectangle">Friday <br /> Jan 1</div>
        </div>

        <h3>Select Time for Consultation</h3>
        <div><img src={image_1} className="image_a" alt="image_1" /> Morning</div>
        <div className="flex-item">
            <div className="rectangle">9:30 AM</div>
            <div className="rectangle">10:30 AM</div>
            <div className="rectangle">11:45 AM</div>
        </div>

        <div><img src={image_1} className="image_a" alt="image_1" /> Afternoon</div>
        <div className="flex-item">
            <div className="rectangle">12:30 PM</div>
            <div className="rectangle">2:30 PM</div>
            <div className="rectangle">4:45 PM</div>
        </div>

        <div>Remind me before</div>
        <div className="flex-item">
            <div className="circle">30 Min</div>
            <div className="circle">40 Min</div>
            <div className="circle">25 Min</div>
            <div className="circle">10 Min</div>
            <div className="circle">35 Min</div>
        </div>

        <Link className="link" to="/details">
            <div className="button" >Continue</div>
        </Link>

    </div>
);

export default Consultation;