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
import { ThemeContext } from './context/theme-context';

const App = () => {

  const [students, setStudents] = useState([])

  useEffect(() => {
    console.log(students)
    fetchFromBackend()

  }, [])

  const fetchFromBackend = () => {
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
  }

  let studentsArr = [...students]

  const studentCreated = (student) => {
    console.log(student)
    fetch('http://localhost:3001/student', {
      "method": "POST",
      "headers": {
        'Content-Type': 'application/json'
      },
      "body": JSON.stringify(student)
    }).then(fetchFromBackend)
      .catch(e => console.log(e))
  }

  const studentDeleted = (student) => {
    fetch(`http://localhost:3001/student/${student.studentId}`, {
      "method": "DELETE",
      "headers": {
        'Content-Type': 'application/json'
      }
    }).then(fetchFromBackend)
      .catch(e => console.log(e))
  }

  const [show, setShow] = useState(false)

  const onCloseModal = () => {
    setShow(!show)
  }

  const showLogin = () => {
    console.log("Clicked!")
    setShow(true)
  }

  const [darkTheme, setDarkTheme] = useState(false)

  const toggleTheme = () => {
    setDarkTheme(!darkTheme)
  }

  return (
    <Router>
      <ThemeContext.Provider value={darkTheme}>
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
                <button onClick={toggleTheme}>Toggle theme</button>
                <AddStudent onAdd={studentCreated} />
                <StudentsList students={students} onDelete={studentDeleted} />
              </>
            } />

            <Route path="/students/:studentId" element={
              <Student />
            } />
            <Route path='/auth' element={
              <Login />
            } />
            <Route path='*' element={<Error />} />

          </Routes>

        </main>
      </ThemeContext.Provider>
    </Router>
  )
}

export default App;
