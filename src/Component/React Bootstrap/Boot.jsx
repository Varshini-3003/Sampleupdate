import React from 'react'
import { Table,Button } from 'react-bootstrap'



export default function Boot(eve) {

    const datum = eve.datas;
    const datum1=eve.dat;
   
   
   return (
        <div>
            <Table className='table'>
                <thead className='thead'>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        {/* <th>Action</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        datum.map((items)=>{
                            return(
                                <tr>
                                    <td>{items.Name}</td>
                                    <td>{items.Email}</td>
                                    <td>{items.Phone}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <Table>
            <thead className='thead'>
                    <tr>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                        {/* <th>Action</th> */}
                    </tr>
                </thead>
                <tbody>
                {
                        datum1.map((item1)=>{
                            return(
                                <tr>
                                    <td>{item1.NAME}</td>
                                    <td>{item1.EMAIL}</td>
                                    <td>{item1.PHONE}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </Table>
        </div>
    )
}
