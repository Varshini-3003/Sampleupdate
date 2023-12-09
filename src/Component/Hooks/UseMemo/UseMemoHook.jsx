import React, { useMemo, useState } from 'react'

export default function UseMemoHook() {

    const [memvals,setMemvals] = useState(0)

    function Add(){
        setMemvals(e => e+1);
    }

    const Multiple = useMemo(()=>{
        return memvals*2;
    },[memvals])

    const Square = useMemo(()=>{
        return memvals*memvals;
    },[memvals])
    
  return (
    <div>
        <button onClick={Add}>Click Me</button>

        <h1>Added:{memvals}</h1>
        <h1>Multiple:{Multiple}</h1>
        <h1>Square:{Square}</h1>
    </div>
  )
}
