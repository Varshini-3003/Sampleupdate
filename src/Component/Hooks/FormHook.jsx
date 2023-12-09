import React from 'react'
import { useState } from 'react';
import TableHook from './TableHook';

export default function FormHook() {
    const ar=[];
    const [input, setInput] = useState(ar);
    const [fname,setFname] = useState("");
    const [age,setAge] = useState("");
    const [phone,setPhone] = useState("");
    const [city,setCity]=useState("");

    const dat = {
        Name:fname,
        Age:age,
        Phone:phone,
        City:city
    }
    function send(a){
        a.preventDefault();

        setInput((item)=>[...item,dat]);
        
        console.log(input);
    }


  return (

    <div>
        <form onSubmit={send}>
        <div>
            <label  for="Name">Name: </label>
            <input type="text" value={fname} onChange={(a)=>{setFname(a.target.value)}} id="Name" placeholder="Your Name" />
        </div>
        <div>
            <label  for="Age">Age: </label>
            <input type="text" value={age} onChange={(a)=>{setAge(a.target.value)}} id="Age" placeholder="Your Age" />
        </div>
        <div>
            <label  for="Phone">Phone: </label>
            <input type="phone" value={phone} onChange={(a)=>{setPhone(a.target.value)}} id="Phone" placeholder="Phone" />
        </div>
        <div>
            <label  for="City">City: </label>
            <input type="text" value={city} onChange={(a)=>{setCity(a.target.value)}}  id="City" placeholder="City" />
        </div>
        <button type="submit">Update</button>

        </form>
       <TableHook str={input} />
    </div>
  )
}
