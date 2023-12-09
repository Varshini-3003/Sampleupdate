import React, { useState } from 'react'
import './UseCon.css';
import { Container } from 'react-bootstrap';
export const a = React.createContext('');

export default function UseContextHook() {

    const [theme,setTheme] = useState('light');

    function changeTheme(){
        setTheme((crr) => crr === "light" ? "dark" : "light")
    }

    return (
        <div>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={changeTheme}/>
                <label class="form-check-label" for="flexSwitchCheckDefault"  >{theme}</label>
            </div>
            <br />

            

            <a.Provider value={theme}>
                <Disp></Disp>
            </a.Provider>
        </div>
    )
}


function Disp() {

    const chgtheme = React.useContext(a);

    return (
        <div id={chgtheme}>
            <Container>
            <form>
 
 <div class="form-outline mb-4">
 <label class="form-label" for="form2Example1">Email address</label>
   <input type="email" id="form2Example1" class="form-control" />
   
 </div>

 
 <div class="form-outline mb-4">
 <label class="form-label" for="form2Example2">Password</label> 
   <input type="password" id="form2Example2" class="form-control" />
   
 </div>

 <div class="row mb-4">
   <div class="col d-flex justify-content-center">
     <div class="form-check">
       <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
       <label class="form-check-label" for="form2Example31"> Remember me </label>
     </div>
   </div>

   <div class="col">
    
     <a href="#!">Forgot password?</a>
   </div>
 </div>


 <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>


 {/* <div class="text-center">
   <p>Not a member? <a href="#!">Register</a></p>
   <p>or sign up with:</p>
   
 </div> */}
</form>

            </Container>
           
        </div>
    )
}