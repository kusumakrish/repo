import React, { useContext } from 'react'
import { store } from './Detail'
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const StudentEdit = () => {
  const [name, setName] = useState("");

  const [age, setAge] = useState("");

  const [course, setCourse] = useState("");

  const [batch, setBatch] = useState("");
  const [hobbies , setHobbies] = useState([]);
  console.log(hobbies);

  const { id } = useParams();

  const [students, setStudents] = useContext(store);

  const ChangeHandlerName = (e) => {
    setName(e.target.value);
  };
  const ChangeHandlerAge = (e) => {
    setAge(e.target.value);
  };
  const ChangeHandlerCourse = (e) => {
    setCourse(e.target.value);
  };
  const ChangeHandlerStudent = (e) => {
    setBatch(e.target.value);
  };
  useEffect(() => {
    students.forEach((element) => {
      if (element.id === id) {
        setName(element.Name);
        setAge(element.Age);
        setCourse(element.Course);
        setBatch(element.Batch);
        setHobbies(element.hobbies);
      }
    });
  }, [id, students]);

  const ChangeHandler5 = (e) => {
    hobbies.push(e.targrt.value)
    // setHobbies(hobbiesarr);
    console.log(hobbies);
  }

  const SubmitHandler = () => {
    setStudents((previousV) =>
      previousV.map((store) =>
        store.id === id
          ? {
              id: id,
              Name: name,
              Age: age,
              Batch: batch,
              Course: course,
              hobbies: hobbies
            }
          : store
      )
    );
  };

  return (
    <div style={{display:'flex', justifyContent:'center'}}>
      <form style={{ marginTop: "25px" }}>
        <label>Name:</label>
            <input id="name" type="text" name='name' value={name} onChange={ChangeHandlerName} />
            <label>Address:</label>
            <input id="age" type="text" name='age' value={age} onChange={ChangeHandlerAge} />
            <label>City:</label>
            <input id="course" type="text" name='course' value={course} onChange={ChangeHandlerCourse} />
            <label>state:</label>
            <input id="batch" type="text" name='batch' value={batch} onChange={ChangeHandlerStudent} />
        <div style={{ marginTop: "25px" }}>
        <div>
  <input type='checkbox' value="Singing" onChange={ChangeHandler5}/><b>Singing</b>
  <input type='checkbox' value="Dancing" onChange={ChangeHandler5}/><b>Dancing</b>
  <input type='checkbox' value="Cooking" onChange={ChangeHandler5}/><b>cooking</b>
  <input type='checkbox' value="Drawing" onChange={ChangeHandler5}/><b>Drawing</b>
  <input type='checkbox' value="Painting" onChange={ChangeHandler5}/><b>Painting</b>
</div>
          <Link to="/Student"><button style={{ marginLeft: "25px" }}>Cancel</button></Link>
          <Link to="/Student" onClick={SubmitHandler}><button>Submit</button></Link>
        </div>      
    </form>
      </div>
    )
  

};

export default StudentEdit;