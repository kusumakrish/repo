import React, { useContext } from 'react'
import { store } from './Detail'
import { Link } from 'react-router-dom'
import { useState } from 'react'




const NewStudents = () => {

const[Name,setName]=useState("")

const[Age,setAge]=useState("")


const[Course,setCourse]=useState("")


const[Batch,setBatch]=useState("")

const[hobbies] = useState([]);

const[students,setStudents]=useContext(store);


const ChangeHandler1=(e)=>
{
setName(e.target.value)

}
const ChangeHandler2=(e)=>
{
setAge(e.target.value)

}
const ChangeHandler3=(e)=>
{
setCourse(e.target.value)

}
const ChangeHandler4=(e)=>
{
setBatch(e.target.value)

}

const ChangeHandler5 = (e) => {
  hobbies.push(e.target.value)

}

const SubmitHandler=()=>{

setStudents([...students,{Name:Name,Age:Age,Course:Course,Batch:Batch,hobbies:hobbies,id:new Date().getTime().toString()}])


}
  return (
    <div>


<div className='addbox'>

<label className='num1'>Name:</label>
<input className='num2' id="name" type="text" name='name' placeholder='Name' value={Name} onChange={ChangeHandler1} required /> 
<label className='num1'>Address:</label>
<input className='num2' id="age" type="text" name='age' placeholder='Address' value={Age} onChange={ChangeHandler2} required />
<label className='num1'>City:</label>
<input className='num2' id="course" type="text" name='City' placeholder='City' value={Course} onChange={ChangeHandler3} required /> 
<label className='num1'>State:</label>
<input className='num2' id="batch" type="text" name='State' placeholder='State' value={Batch} onChange={ChangeHandler4} required /> <br/><br/><br/>
<b>Hobbies</b>
<div>
  <input type='checkbox' value="Singing" onChange={ChangeHandler5}/><b>Singing</b>
  <input type='checkbox' value="Dancing" onChange={ChangeHandler5}/><b>Dancing</b>
  <input type='checkbox' value="Cooking" onChange={ChangeHandler5}/><b>cooking</b>
  <input type='checkbox' value="Drawing" onChange={ChangeHandler5}/><b>Drawing</b>
  <input type='checkbox' value="Painting" onChange={ChangeHandler5}/><b>Painting</b>
</div>
</div>

<div><br/><br/><br/>

<Link className='cancel' to="/student"><button>Cancel</button></Link>
<Link className='submit' to="/student" onClick={SubmitHandler}><button>Submit</button></Link>

</div>



    </div>
  )
}

export default NewStudents