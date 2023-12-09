import React from 'react'

export default function UseRefHook() {

    const refInp = React.useRef(null);
    const dispInp = React.useRef('');    
    function Add(){
        const r = Math.floor(Math.random()*255);
        const g = Math.floor(Math.random()*255);
        const b = Math.floor(Math.random()*255);
        dispInp.current.style.backgroundColor = `rgb(${r},${g},${b})`;

        const r1 = Math.floor(Math.random()*255);
        const g1 = Math.floor(Math.random()*255);
        const b1= Math.floor(Math.random()*255);
        dispInp.current.style.color = `rgb(${r1},${g1},${b1})`;

        dispInp.current.innerHTML = refInp.current.value;

        console.log(dispInp.current);
    }

  return (
    <div>

        <h1 ref={dispInp}>Hello world</h1>
        <input type="text" ref={refInp}/>
        <button onClick={Add}>Add</button>
    </div>
  )
}


