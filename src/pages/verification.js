import React from "react";
import { Link } from "react-router-dom";
import '../App.css';


const verification = () => (

    <div>
        <h3 className="text-center blue-text" >Get Your Code</h3>
        <p className="text-center">Please enter the 4 digit code sent to your phone number.</p>
        <div className="text-center">
            <input className="square" />
            <input className="square" />
            <input className="square" />
            <input className="square" />
        </div>
        <p className="text-center">
            If you don't receive code! &nbsp;&nbsp;
            <Link to="" className="blue-text link">
                Resend
            </Link>
        </p>
        <Link className="link" to="/bookingpage">
            <input className="button submit" type="submit" value="Verify and Proceed" />
        </Link>
    </div>
)

export default verification;