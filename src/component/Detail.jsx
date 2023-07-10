import React, { createContext, useState } from 'react'

export const store =createContext()

const Detail = (props) => {

    const [students,setStudents]=useState([

{

"Name":"Kusuma",
"Age":"Tirupati",
"Course":"Tirupati",
"Batch":"Andhra Pradesh",
"hobbies": ["Singing"],
"id":"1"

},

{

"Name":"Kusuma",
"Age":"Tirupati",
"Course":"Tirupati",
"Batch":"Andhra Pradesh",
"hobbies": ["Singing","dancing"],
"id":"2"
    
    },


    ])
  return (
    <div>



<store.Provider  value={[students,setStudents]}>


    {props.children}


</store.Provider>




        
    </div>
  )
}

export default Detail;