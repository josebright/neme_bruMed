import React, { Component } from "react";
import { Link } from "react-router-dom";
import image_1 from '../images/1.png';
import image_2 from '../images/2.png';
import image_3 from '../images/3.png';
import image_4 from '../images/4.png';
import image_5 from '../images/5.png';
import button_next from '../images/button_next.svg';
import '../App.css';

const index = Math.floor(Math.random() * 5 + 1)

class Data extends Component {
    render() {
      const { image, title, text, ...props } = this.props;
      return (
        <div {...props}>
            <div className="flex">
                <div className="flex-item-left">
                    <img src={image} className="image_2" alt="image" />
                </div>
                <div className="flex-item-middle">
                    <h4>{title}</h4>
                    <p>{text}</p>
                    <p>Appointments Available in {index} days</p>
                </div>
                <div className="flex-item-left">
                    <img src={button_next} className="image_3" alt="image" />
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
            <h3 className="right-align">Doctors</h3>

            <div>
                <Link className="link" to="/consultation">
                    <Data image={image_1} title={"Dr. Michael Clarke"} text={"General Practitioner, MRCGP"} />
                </Link>
                <Link className="link" to="/consultation">
                    <Data image={image_2} title={"Dr. Nicolas Haviv"} text={"Psychiatrist, Md"} />
                </Link>
                <Link className="link" to="/consultation">
                    <Data image={image_3} title={"Dr. Rajesh Kothrappali"} text={"Dietician, MBBS"} />
                </Link>
                <Link className="link" to="/consultation">
                    <Data image={image_4} title={"Dr. Zoya Hiddleston"} text={"Mental Health, MD"} />
                </Link>
                <Link className="link" to="/consultation">
                    <Data image={image_5} title={"Dr. Rachael Green"} text={"General Practitioner, MRCGP"} />
                </Link>
            </div>
            
        </div>
    );}
}