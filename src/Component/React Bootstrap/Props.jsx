import React, { useState } from 'react'
import Boot from './Boot'
import { Form } from 'react-bootstrap';
// import Form from './Form'


export default function Props() {

  const [val1, setVal1] = useState(" ")


  return (
    <div>
      <Form onChange={(e) => {
        setVal1(e.target.value);


      }}>
        <label>Enter your name:
          <input type="text" />

        </label>



      </Form>


      {/* <Boot numarr={val1} /> */}
    </div>

  )
}
