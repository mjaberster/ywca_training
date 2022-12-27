const express = require('express')
const { register, unregister, fetch } = require('./modules/registration')

const app = express()



// GET /student?id=123      Retrieve student with id 123
// GET /student             Retrieve all students
// DELETE /student          Unregister student

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-type, Accept, Authorization'
    )
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    console.log(`CORS!! ${req.originalUrl}`)
    next()
})



// POST /student            Register new student
app.post('/student', (req, res) => {
    const student = req.body.student
    if (!student) {
        res.status(400).send('Student is missing')
        return
    }

    register(student)
    res.send(`Student has been registered succesfully`)

})

// DELETE /student          Unregister student
app.delete('/student', (req, res) => {
    debugger
    const studentId = req.query.studentId
    if (!studentId) {
        res.status(400).send(`Student Id was not sent`)
        return
    }

    unregister(studentId)
    res.send(`student has been deleted succesfully`)
    return
})

app.get('/student/:studentId', (req, res) => {

    const studentId = req.params.studentId
    console.log(studentId)
    const student = fetch(studentId)
    res.json(student).send()

})

app.get('/student', (req, res) => {
    const students = fetch()
    res.json(students).send()
})


app.use((err, req, res, next) => {

    console.log(err)

    if (res.headersSent) {
        return next(err)
    }

    res.status(err.status || 500)
    res.json({ message: err.message || 'an error has occured' }).send()
})



app.listen(3001, () => console.log("STARTED!"))