import React, {  useState  } from "react";
import { Link } from "react-router-dom";
import '../App.css';


const Register = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    return (
        <div className="home section_reg">
            <h2>Create Account</h2>
            <form>
                <label>Full Name: <br/>
                    <input 
                        className="input"
                        type="text" 
                        name="name"
                        onChange={handleChange}
                    />
                </label>

                <label>Email: <br/>
                    <input 
                        className="input"
                        type="email" 
                        name="email" 
                        onChange={handleChange}
                    />
                </label>

                <label>Phone Number: <br/>
                    <input 
                        className="input"
                        type="number" 
                        name="number" 
                        onChange={handleChange}
                    />
                </label>

                <label>Password: <br/>
                    <input 
                        className="input"
                        type="text" 
                        name="password" 
                        onChange={handleChange}
                    />
                </label>
                <Link className="link" to="/verification">
                    <input className="button submit" type="submit" value="Create Account" />
                </Link>
            </form>
            
        </div>
    );
}

export default Register;