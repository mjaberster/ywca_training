import { useEffect, useState } from 'react';
import './App.css';
import AddStudent from './components/add/AddStudent';
import StudentsList from './components/list/StudentsList';
import { BrowserRouter as Router, Route, Routes } from
  'react-router-dom'
import Home from './components/home/Home';
import Error from './components/error/Error';
import MainNavigation from './components/main-menu/MainNavigation';
import Student from './components/students/Student';
import Login from './components/auth/login';


const App = () => {

  const [students, setStudents] = useState([])

  useEffect(() => {

    fetch(`http://localhost:3001/student`, {
      "method": "GET"
    })
      .then((response) =>
        response.json().then((data) => {
          setStudents(data);
        })
      )
      .catch((err) => {
        console.error(err);
      });

  },
    [students, setStudents])


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

  const [show, setShow] = useState(false)

  const onCloseModal = () => {
    setShow(!show)
  }

  const showLogin = () => {
    console.log("Clicked!")
    setShow(true)
  }

  return (
    <Router>
      <MainNavigation showLogin={showLogin} />
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

          <Route path='*' element={<Error />} />

        </Routes>
        <Login show={show} closeModal={onCloseModal} />
      </main>
    </Router>
    // <div>
    //   <CConverter />
    // </div>

  )
}

export default App;
