import React, { useState } from 'react';
 
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebaseConfig'

const auth = getAuth(app);

const SignIn = () => {
    const[user,setUser]= useState('');
    const provider = new  GoogleAuthProvider();
    const handleSignIn =()=>{
       
        signInWithPopup(auth,provider)
        .then (result => {
            // eslint-disable-next-line no-use-before-define
           
            const user =result.user;
            setUser(user);
            console.log(user)
        })
        .catch(error => {
            console.error(error)
        })
    }

    const handleSignOut =()=>{
        signOut(auth)
        .then(()=>{
           setUser('')
        })
         .catch(()=>{
                setUser('')
         })
    }
    return (
         
             <div>
                {user.email ? <button onClick={handleSignOut}>Google sign out</button> :
                 <button onClick={handleSignIn}>Google sign in</button>
               }
                { user.email && <div>
                     User name: {user.displayName}
                     <br/>
                     User Email : {user.email}
                     <br/>
                     <img src={user.photoURL} alt="" />
                 </div>}
             </div>
    );
};

export default SignIn;