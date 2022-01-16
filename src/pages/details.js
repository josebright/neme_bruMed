import React from "react";
import { Link } from "react-router-dom";
import image_1 from '../images/book_appointment_icon.svg';
import '../App.css';

const Details = () => (
    <div>
        <h2>Patient Details</h2>
        <div>
            <h3>Who is this patient?</h3>
            <div className="rectangle-clone">For Myself (Dwayne)</div>
            <div className="rectangle-clone">Someone Else</div>
        </div>
        <form>
            <label><img src={image_1} className="image_a" alt="image_1" /> Patient Name: <br/>
                    <input 
                        className="input"
                        type="text" 
                        name="name"
                    />
                </label>
            <label><img src={image_1} className="image_a" alt="image_1" /> Phone Number: <br/>
                    <input 
                        className="input"
                        type="number" 
                        name="phone"
                    />
                </label>
        </form>

        <h3>Select Consultation Method</h3>
        <div className="demo">
            <div className="flex-item-left">
                <img src={image_1} className="image_a" alt="image_1" />
            </div>
            <div className="dem">
                <h3>Messaging</h3>
                <p>Chat with a doctor</p>
            </div>
        </div>
        
        <div className="demo">
            <div className="flex-item-left">
                <img src={image_1} className="image_a" alt="image_1" />
            </div>
            <div className="dem">
                <h3>Video Call</h3>
                <p>Video Consultation with a doctor</p>
            </div>
        </div>

        <Link className="link" to="/confirmation">
            <div className="button" >Confirm</div>
        </Link>

    </div>
);

export default Details;