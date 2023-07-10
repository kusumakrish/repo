import './App.css';
import NavBar from './component/Nav';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './component/home';
import Students from './component/Student';
import Contact from './component/contact';
import StudentEdit from './component/StudentEdit';
import NewStudents from './component/NewStudent';
import Detail from './component/Detail';

function App() {
  return (
    <Detail>
    <div className="App">
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/home' element={<Home />}/>
      <Route path="/Student" element={<Students/>}/>
      <Route path='/Contact' element={<Contact />}/>
      <Route path="/StudentEdit/:id" element={<StudentEdit/>}/>
  <Route path="/NewStudent" element={<NewStudents/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    </Detail>
  );
}

export default App;
