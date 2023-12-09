import React from 'react'
// import Boot from './Boot';
// import Props from './Props'
import Boot from './Boot'
import { useState } from 'react';



export default function Form() {
    const arr =[];
    const ar=[];
    


    const [val1, setVal1] = useState(arr)
    const [val2,setVal2] = useState(ar)
    const [fname,setFname] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState(0);
    const [Fname,setFiname] = useState("");
    const [Email,setEmaill] = useState("");
    const [Phone,setPhonee] = useState(0);
    


    const datum = {
        Name:fname,
        Email:email,
        Phone:phone
    }
   const datum1 ={
    NAME : Fname,
    EMAIL: Email,
    PHONE:Phone
   }
    
   


    function sendData(e){
        e.preventDefault();

        setVal1((items)=>[...items,datum]);
        
        setVal2((item1) =>[...item1,datum1]);

    }
    console.log(val1);
    console .log(val2);
    return (
        <div>
            <form onSubmit={sendData}>

                < div className="form">

                    <div className="form-body">
                        <div className="username">
                            <label className="form-label" for="firstName">First Name </label>
                            <input className="form-input" type="text" value={fname} onChange={(e)=>{setFname(e.target.value)}}   id="firstName" placeholder="First Name" />
                        </div>
                        <div className="email">
                            <label className="form-label" for="email">Email </label>
                            <input type="email" id="email" className="form-input" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" />
                        </div>
                        <div className="phone">
                            <label className="form__label" for="phone">Phone </label>
                            <input type="phone" id="phone" className="form-input" value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder="9568742568" />
                        </div>
                        <div class="footer">
                            <button type="submit">Update</button>
                        </div>
                    </div>
                </div>

            </form>

            
            <Boot datas={val1} dat={val2} />
            
            
        </div>

    )
}
