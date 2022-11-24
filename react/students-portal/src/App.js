import { useState } from 'react';
import './App.css';
import AddStudent from './components/add/AddStudent';
import StudentsList from './components/list/StudentsList';
import { BrowserRouter as Router, Route, Routes } from
  'react-router-dom'
import Home from './components/home/Home';
import Error from './components/error/Error';
import MainNavigation from './components/main-menu/MainNavigation';
import Student from './components/students/Student';
import data from './data/students.json'
import Login from './components/auth/login';

const App = () => {

  const [students, setStudents] = useState([...data])
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
      <MainNavigation />
      <main>
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

          <Route path='/auth' element={<Login />} />



          <Route path='*' element={<Error />} />

        </Routes>
      </main>
    </Router>
  )
}

export default App;
