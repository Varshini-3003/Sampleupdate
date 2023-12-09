// import React from 'react'
// import { useState } from 'react';
// export default function Todolist() {
// 	// const ar=[];
//     // const [input, setInput] = useState(ar);
// 	// const [task,addtask] = useState("");

// 	// const dat = {
//     //     Task:task,
        
//     // }
//     // function send(a){
//     //     a.preventDefault();

//     //     setInput((item)=>[...item,dat]);
        
//     //     console.log(input);
//     // }
	
	

//   return (
	

// 	<div>


		        
//         <form onSubmit={send}>
//         <div>
//             <label  for="task">Task: </label>
//             <input type="text" value={task}   onChange={(a)=>{addtask(a.target.value)}} id="task" placeholder="Your Name" />
//         </div>
        
//         <button type="submit">Add</button>


		 
  

		
//         </form>
      
//     </div>
//   )
// }

	  
	
import React from 'react'

import { useState,useRef } from 'react'
function Todolist() {
    const[task,setTask]=useState("");
    const [tasklist,settasklist]=useState([]);
    // const refInp = React.useRef(null);

    // const dispInp = React.useRef('');    
    

    const handleChange =(e)=>{
        setTask(e.target.value);
        
    };
    
    

    const Addtask=()=>{
        if(task!==""){
            const taskdetails={
                id:Math.floor(Math.random()*1000),
                value:task,
            
            }
            settasklist([...tasklist,taskdetails]);
        }
        
    };
    console.log("tasklist",tasklist);

    const deletetask =(e,id)=> {
        e.preventDefault();
    settasklist(tasklist.filter((t) => t.id !=id));
    
    


        
    }

    
    // dispInp.current.innerHTML = refInp.current.value;

    // console.log(dispInp.current);
    return (
    <div className='todocontainer'>
        <input type='text'  name='text' id='text' placeholder='Add task...' onChange={(e)=> handleChange(e)}/>
        <button className='addBtn' onClick={Addtask}>Add</button>

        <div className='listcontainer'>
            { tasklist != [] ?
            <ul>
                {tasklist.map(t=>
                <li className='listitem'>{t.value}
                <button className='deleteBtn' onClick={(e)=>deletetask(e,t.id)}>Delete</button>

                </li>
                )}
            </ul>
            
           :null }

        </div>

    </div>
  )
}

export default Todolist
	





