import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { store } from './Detail'
import "./css.css";
const Students = () => {
    const [student]= useContext(store)

    const handleDelete = (id) => {
        let item = student.find(x=> x.id === id);
        console.log(item);
        let itemIndex =student.indexOf(item);
        console.log(itemIndex);
        console.log(student.splice(itemIndex,1));
      
    }
  return (
    <div>

<div><Link className='addnew' to="/NewStudent"><button className='addstudent'>Add Student</button></Link></div>

<table style={{marginTop:"30px"}} className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Address</th>
      <th scope="col">City</th>
      <th scope="col">State</th>
      <th scope="col">Hobbies</th>
      <th scope="col">Change</th>

    </tr>
  </thead>

  <tbody>
      {student.map((student)=>(<tr key={student.id}>

<td>{student.Name}</td>
<td>{student.Age}</td>
<td>{student.Course}</td>
<td>{student.Batch}</td>
<td>{student.hobbies}</td>
<td ><Link to={`/StudentEdit/${student.id}`}>Edit</Link></td>
<td ><button onClick={()=>handleDelete(student.id)}>Delete</button></td>

</tr>


      ))}
  
  
  </tbody>
</table>







    </div>
  )
}

export default Students