import React from 'react';
import './login.css'
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

function Login(props) {
    return (
        <>
        <div className="container">
            <div className=" login1 mx-auto">
                <h2 className="text-center">Login</h2>
                <p className="text-center">Enter Login details to get access</p>
            <form action="/action_page.php">
                <div className="mt-3 user-name">
                    <label htmlFor="email" className="float-start">Username Or Email Address</label>
                    <input type="email" className="form-control" id="email" placeholder="Username / Email Address" name="email"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="pwd" className="float-start">Password:</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
                </div>
                <div className="form-check keep-check">
                 <label className="form-check-label float-start">
                    <input className="form-check-input" type="checkbox" name="remember"/> Keep Me Logged In
                 </label>
                  <a href="#" className="forget">Forget Password?</a>
                </div>
                <div className="col-12 d-flex">
                <div className="col-6 float-start">
                  <p>Don't have an account? <Link className='text-danger text-decoration-none' to='/signup'>Sign Up</Link> Here</p>
                </div>
                <div className="col-4 log">
                  <button type="submit" className="btn">Login</button>
                </div>
                </div>
            </form>
            </div>
            </div>
        </>
    );
}

export default Login;