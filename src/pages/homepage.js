import React from "react";
import { Link } from "react-router-dom";
import image_1 from '../images/image_1.svg';
import button_next from '../images/button_next.svg';
import '../App.css';

const HomePage = () => (
  <div>
          <h2>bruMed</h2>
          <img src={image_1} className="image_1" alt="image_1" />
          
          <div className="box">
            <h3 className="text-center">Consult with a GP Easily</h3>
            <p className="text-center">The smart, easy and convenient way to manage your health</p>
            <Link className="link" to="/onboarding">
              <div className="right arrow">
                <img src={button_next} className="button_next" alt="button_next" />
              </div>
            </Link>
          </div>

        </div>
);

export default HomePage;