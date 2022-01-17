import React from "react";
import { Link } from "react-router-dom";
import image_time from '../images/time.png';
import '../App.css';

const Mymedicine = () => (
    <div>
        <h2 className="text-center">New Medication</h2>
        <input 
            className="search"
            type="text" 
            name="name"
            placeholder="Medication Name"
        />

        <div className="flex-item-clone">
            <div><h4>Dose</h4></div>
            <div className="right">
                <select>
                    <option selected value="1">1 Pill</option>
                    <option value="2">2 Pills</option>
                    <option value="3">3 Pills</option>
                </select>
            </div>
        </div>

        <div className="flex-item-clone">
            <div><h4>Date</h4></div>
            <div className="right">
                <select>
                    <option selected value="1">Today</option>
                    <option value="2">27 Dec</option>
                    <option value="3">28 Dec</option>
                </select>
            </div>
        </div>

        <div className="flex-item-clone">
            <div><h4>Time</h4></div>
            <div className="right">
                <select>
                    <option selected value="1">8:05 PM</option>
                    <option value="2">12:00 AM</option>
                    <option value="3">3:45 PM</option>
                </select>
            </div>
        </div>

        <div>Remind me before</div>
        <div className="flex-item">
            <div className="circle">30 Min</div>
            <div className="circle">40 Min</div>
            <div className="circle">25 Min</div>
            <div className="circle">10 Min</div>
            <div className="circle">35 Min</div>
        </div>

        <Link className="link" to="/">
            <div className="button" >Save Medication</div>
        </Link>
    </div>
);

export default Mymedicine; 