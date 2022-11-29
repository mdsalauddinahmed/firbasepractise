import React from 'react';
import {Link} from "react-router-dom"

const SignUp = () => {
    return (
        <div id='signup'>
            <div className='signup'>
                
           <h2>Create a account</h2>
           <input type="text" placeholder='Enter your name' />
           <input type="email" placeholder='Enter your email' />
           <input type="password" placeholder='Enter your password' />
           <p>Enter your name!</p>
           <button className='btn'>SignUp</button>
            <Link to ="/login">You have already a account?signin?</Link>
                
            </div>
        </div>
    );
};

export default SignUp;