const express = require('express')
const { getAllStudents, getStudentById } = require('./registration')
const validate = require('./permissions')

const server = express()



server.use((req, res, next) => {
    console.log("Request recieved")
    next()
})



server.use((req, res, next) => {
    const username = req.headers.username
    const password = req.headers.password
    if (validate(username, password)) {
        next()
        return
    } else {
        res.status(401).send("Not a user")
    }
})


server.get('/student', (req, res) => {
    const studentId = req.query.studentId
    if (!studentId) {
        const students = getAllStudents()
        res.send(students)
        return
    }
    try {
        const student = getStudentById(studentId)
        res.send(student)
    } catch (e) {
        res.status(404).send(e.message)
    }

})




server.listen(3000, () => console.log("Started"))