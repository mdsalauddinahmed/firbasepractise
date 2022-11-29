import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './componenets/Home';
import SignIn from './componenets/SignIn';
import SignUp from './componenets/SignUp';
function App() {
   
 
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
       
     </Routes>
    </>
       )
    
 
}
export default App;
