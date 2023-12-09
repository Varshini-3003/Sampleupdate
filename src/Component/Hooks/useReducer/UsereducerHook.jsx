import React, { useReducer} from 'react'

export default function UsereducerHook() {
   
    const datum = {
        Sname:'',
        Age:0,
        Phone:'',
        Email:''
    }

    const[state,dispatch] = useReducer(rendering,datum);

    function rendering(state,action){
        switch(action.type){
            case 'change_name':{
                return{
                    Name:action.nxtName,
                    Age:state.Age
                }
            }

            case 'inc_age':{
                return{
                    Name:state.Name,
                    Age: state.Age+1
                }
            }
            case 'dec_age':{
                return{
                    Name:state.Name,
                    Age: state.Age - 1
                }
            }
            case 'change_Phone':{
                return{
                    Name:action.nxtName,
                    Age:state.Age,
                    Phone:action.nxtPhone
                    
                }
            }

            case 'change_Email':{
                return{
                    Name:action.nxtName,
                    Age:state.Age,
                    Email:action.nxtEmail
                    
                }
            }
            
        }
    }


  return (
    <div >
         <label  for="Name">Name: </label>
        <input type="text" placeholder='Your Name' onChange={
            (e)=>{
                dispatch({
                    type:'change_name',
                    nxtName:e.target.value
                })
            }
        } />
        <br />
         <label  for="Phone">Phone: </label>
        <input type="phone" placeholder='9568742563' onChange={
            (e)=>{
                dispatch({
                    type:'change_Phone',
                    nxtPhone:e.target.value
                })
            }
        } /><br/>
        <label  for="Email">Email: </label>
        <input type="email" placeholder='abc@gmail.com' onChange={
            (e)=>{
                dispatch({
                    type:'change_Email',
                    nxtEmail:e.target.value
                })
            }
        } /><br/>
        
        <button onClick={()=>{
            dispatch({
                type:'inc_age'
            })
        }}>Age Increase</button>
        <button onClick={()=>{
            dispatch({
                type:'dec_age'
            })
        }}>Age Decrease</button>
        
        
        <h1>Name:{state.Name}</h1>
        <h1>Age:{state.Age}</h1>
        <h1>Phone:{state.Phone}</h1>
        <h1>Email:{state.Email}</h1>
    </div>
    )
    
}