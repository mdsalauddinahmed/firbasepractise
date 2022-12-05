import React from 'react';
import {getAuth,GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import app from '../firebaseConfig';
const auth =getAuth(app);

const Home = () => {
    const provider = new GoogleAuthProvider();
    const handleSignIn=()=>{
            signInWithPopup(auth,provider)
            .then(result =>{
              const user = result.user;
              console.log(user);

            })
            .catch(error =>{
              console.log('erroe:',error)
            })
    }
    return (
        <div>
          <button onClick={handleSignIn}>Send me</button>
            
        </div>
    );
};

export default Home;