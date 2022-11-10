import { useState } from 'react';
import './App.css';
import AddStudent from './components/add/AddStudent';
import StudentsList from './components/list/StudentsList';


function App() {

  const [students, setStudents] = useState([])
  const studentsArr = [...students]

  const studentCreated = (student) => {
    studentsArr.push(student)
    console.log(studentsArr)
    setStudents(studentsArr)
  }


  return (
    <>
      <AddStudent onAdd={studentCreated} />
      <StudentsList students={students} />
    </>
  )
}

export default App;
