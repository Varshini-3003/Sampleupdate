import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CRUDoperation() {


    const navi = useNavigate();

    // to create a data// 
    const Uname = useRef('');
    const Uemail = useRef('');
    const Uphone = useRef(0);
    const Upassword = useRef('');

    function AddData() {
        axios.post('http://localhost:2500/crtuser', {
            Name: Uname.current.value,
            Email: Uemail.current.value,
            Phone: Uphone.current.value,
            Password: Upassword.current.value
        })
            .then(res => console.log(res))
            .catch(error => console.log(error));

        Uname.current.value = " ";
        Uemail.current.value = " ";
        Uphone.current.value = " ";
        Upassword.current.value = " ";

    }
    // end of create data

    // get the data
    const [views, setViews] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:2500/user')
            .then(res => setViews(res.data))
            .catch(error => console.log(error));

    })
    // end of get data

    // edit data


    function setEditData(id) {
        console.log('clicked');
        navi('/edit/' + id);
    }

    function delData(id) {
        axios.delete('http://localhost:2500/deluser/' + id)
            .then(alert('deleted'))
            .then(navi('/'))
    }

    return (
        <div>
            {/* To create a data */}

            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Add Data
            </button>


            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Add Detail</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <label htmlFor="" className="form-label">Name</label>
                            <input ref={Uname} type="text" className="form-control" />

                            <label htmlFor="" className="form-label">Email</label>
                            <input ref={Uemail} type="email" className="form-control" />

                            <label htmlFor="" className="form-label">Phone Number</label>
                            <input ref={Uphone} type="number" className="form-control" />

                            <label htmlFor="" className="form-label">Password</label>
                            <input ref={Upassword} type="password" className="form-control" />

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={AddData} data-bs-dismiss="modal">Add</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* End of create data */}
            {/* =============================================================== */}
            {/*to Views the datas  */}
            <table className='table'>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Password</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        views.map((items, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{items.Name}</td>
                                    <td>{items.Email}</td>
                                    <td>{items.Phone}</td>
                                    <td>{items.Password}</td>
                                    <td>

                                        <button onClick={() => {
                                            setEditData(items._id)
                                        }} className="btn btn-dark">Edit Data</button>

                                        <button onClick={() => {
                                            delData(items._id)
                                        }} className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
