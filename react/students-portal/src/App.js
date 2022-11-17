import { useState } from 'react';
import './App.css';
import AddStudent from './components/add/AddStudent';
import StudentsList from './components/list/StudentsList';
import { BrowserRouter as Router, NavLink, Route, Routes, useParams } from
  'react-router-dom'
import Home from './components/home/Home';
import Error from './components/error/Error';
import WelcomeMessage from './components/welcome/WelcomeMessage';
import MainMenu from './components/main-menu/MainMenu';
import Student from './components/students/Student';
const App = () => {

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
    <Router>
      <MainMenu />
      <Routes>
        <Route path='/' element={
          <Home>
            <h1>Welcome to my site</h1>
          </Home>
        } />
        <Route path='/students' element={
          <>
            <AddStudent onAdd={studentCreated} />
            <StudentsList students={students} onDelete={studentDeleted} />
          </>
        } />

        <Route path="/students/:studentId" element={
          <Student />
        } />

        <Route path='/welcome/:message' element={<WelcomeMessage />} />
        <Route path='*' element={<Error />} />

      </Routes>
    </Router>
  )
}

export default App;
