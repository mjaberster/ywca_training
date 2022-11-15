import { useState } from 'react';
import './App.css';
import AddStudent from './components/add/AddStudent';
import StudentsList from './components/list/StudentsList';


function App() {

  const [students, setStudents] = useState([])
  let studentsArr = [...students]

  const studentCreated = (student) => {
    studentsArr.push(student)
    console.log(studentsArr)
    setStudents(studentsArr)
  }

  const studentDeleted = (student) => {

    studentsArr = studentsArr.filter(s => s.studentId !== student.studentId)
    console.log("deleted " + studentsArr)
    setStudents(studentsArr)
  }


  return (
    <>
      <AddStudent onAdd={studentCreated} />
      <StudentsList students={students} onDelete={studentDeleted} />
    </>
  )
}

export default App;
