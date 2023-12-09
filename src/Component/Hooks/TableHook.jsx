import React, { useEffect, useState } from 'react'

export default function TableHook(tab) {
  const dat=tab.str;
  const [views,setViews] = useState(dat)

  console.table(dat);
  useEffect(()=>{
    // fetch('https://6528c2f0931d71583df26e10.mockapi.io/user')
    // .then(res=>res.json())
    // .then(resdata => setViews(resdata))
    // .catch(err => console.log(err));

    console.log(views);
  },[])
  return (
    <div>
        <table className='table'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>City</th>  
                    </tr>
                </thead>
                <tbody>
                  {
                    dat.map((items)=>{
                      return(
                        <tr>
                          <td>{items.Name}</td>
                          <td>{items.Age}</td>
                          <td>{items.Phone}</td>
                          <td>{items.City}</td>
                        </tr>
                      )
                    })
                  }
                    
                </tbody>
            </table>

    </div>
  )
}