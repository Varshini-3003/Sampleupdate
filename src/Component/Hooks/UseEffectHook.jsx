import React, { useState, useEffect } from 'react'

export default function UseEffectHook() {
    const arr = ["app","react","boot"];
    const [inp, setInp] = useState(0);
    const [views, setViews] = useState([]);
    const [rend,setRend] = useState(arr)




    useEffect(() => {
        console.log(rend);
    }, [inp])
    

    return (
        <div>
            
            <h1>IDM:{inp}</h1>
            <h1>Hari:{rend}</h1>

            <button onClick={()=>{
                setInp(inp+1)
                arr.push(inp+1);
            }}>Submit</button>

            {/* <button onClick={
                ()=>{
                    setRend(rend+1)
                }}
                >Render</button> */}
        </div>
    )
}
