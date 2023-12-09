import React, { useRef, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function Editdata() {

    const { id } = useParams();

    const navi = useNavigate();

    const Uname = useRef('');
    const Uemail = useRef('');
    const Uphone = useRef(0);
    const Upassword = useRef('');

    useEffect(() => {
        axios.get('http://localhost:2500/user/' + id)
            .then(res => {
                Uname.current.value = res.data.Name;
                Uemail.current.value = res.data.Email;
                Uphone.current.value = res.data.Phone;
                Upassword.current.value = res.data.Password;
            })
    }, [])
    function BackPage() {
        navi('/')
    }

    function SubmitDatas() {
        axios.put('http://localhost:2500/update/' + id, {
            Name: Uname.current.value,
            Email: Uemail.current.value,
            Phone: Uphone.current.value,
            Password: Upassword.current.value
        })
            .then(alert('edited'))
            .then(navi('/'))


    }

    return (
        <div>
            <label htmlFor="" className="form-label">Name</label>
            <input ref={Uname} type="text" className="form-control" />

            <label htmlFor="" className="form-label">Email</label>
            <input ref={Uemail} type="email" className="form-control" />

            <label htmlFor="" className="form-label">Phone Number</label>
            <input ref={Uphone} type="number" className="form-control" />

            <label htmlFor="" className="form-label">Password</label>
            <input ref={Upassword} type="password" className="form-control" />



            <button onClick={BackPage} className='btn btn-dark'>Cancel</button>
            <button onClick={SubmitDatas} className='btn btn-primary'>Submit</button>
        </div>


    )
}
