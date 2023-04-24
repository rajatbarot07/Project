import React from 'react';
import './login.css'
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

function Login(props) {
    const cnfpwd = () =>{
        var pwd1 = document.getElementsByName('pswd1');
        var pwd2 = document.getElementsByName('pswd2');

        if(pwd1 === '')
       
           alert('Please Enter the password');            
       
        else if(pwd2 === '')
        
           alert('Please Enter confirm password');
        
        else if(pwd1 !== pwd2)
        {
            alert("Password doesn't match")
            return false;
        }
    }
    return (
        <>
        <div className="container">
            <div className=" login1 mx-auto">
                <h2 className="text-center">Sign Up</h2>
                <p className="text-center">Create your account to get full access</p>
            <form onSubmit={cnfpwd}>
                <div className="mt-3 user-name">
                    <label htmlFor="name" className="float-start">Full Name</label>
                    <input type="name" className="form-control" id="name" placeholder="Enter full name" name="name"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="float-start">Email Address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email address" name="email"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="pwd" className="float-start">Password:</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Enter Password" name="pswd1"/>
                </div>
                <div className="cnf-space">
                    <label htmlFor="pwd" className="float-start">Confirm Password:</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Confirm Password" name="pswd2"/>
                </div>
                <div className="col-12 d-flex">
                <div className="col-6 float-start">
                  <p>Already have an account? <Link className='text-danger text-decoration-none' to='/login'>Login</Link> here</p>
                </div>
                <div className="col-4 log">
                  <button type="submit" className="btn">Sign Up</button>
                </div>
                </div>
            </form>
            </div>
            </div>
        </>
    );
}

export default Login;