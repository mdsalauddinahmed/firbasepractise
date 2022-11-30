import React, { useState } from 'react';
import {Link} from "react-router-dom"
import firebaseConfig from '../firebaseConfig'

const SignUp = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const [error,setError]=useState("");
     const handleSubmit=()=>{
        if(!name && !email && !pass){
            setError("Fill all the details")
        }else if(!name){
            setError("Enter your name")
        }else if(!email){
            setError("Enter your email")
        }else if(!pass){
            setError("enter your password")
        }else if(pass.length<7){
            setError("password need around Eight character")
        }else{
            setError("")
        }
     }

        return (
        <div id='signup'>
            <div className='signup'>
                
           <h2>Create a account</h2>
           <input onChange={(e)=>setName(e.target.value)}type="text" placeholder='Enter your name' />
           <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter your email' />
           <input onChange={(e)=>setPass(e.target.value)} type="password" placeholder='Enter your password' />
           <p>{error}</p>
           <button className='btn'onClick={handleSubmit}>SignUp</button>
           <Link to ='/signin'>You have already a account?signin?</Link>
                
            </div>
        </div>
    );
};

export default SignUp;