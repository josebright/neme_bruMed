import React from "react";
import { Link } from "react-router-dom";
import image_time from '../images/time.png';
import '../App.css';

const Mymedicine = () => (
    <div>
        <h2 className="text-center">My Medicine</h2>
        <h4>Today's Pills</h4>

        <div className="flex-item">
            
                <div className="cap">
                    <div><img src={image_time} className="image_2" alt="image_sample" /></div>
                    <div>
                        Stomach Pill <br />  1 Pill <br /> 07:00 AM
                    </div>
                </div>

                <div className="cap">
                    <div><img src={image_time} className="image_2" alt="image_sample" /></div>
                    <div>
                        Cholestorol <br />  3 Pill <br /> 01:00 PM
                    </div>
                </div>
        </div>

        <Link className="link" to="/newmedication">
            <img src={image_time} className="add" alt="image_sample" />
        </Link>
    </div>
);

export default Mymedicine; 