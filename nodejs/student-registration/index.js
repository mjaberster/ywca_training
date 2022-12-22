const express = require('express')
const { register, unregister } = require('./modules/registration')

const app = express()



// GET /student?id=123      Retrieve student with id 123
// GET /student             Retrieve all students
// DELETE /student          Unregister student

app.use(express.json())


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

    const studentId = req.query.studentId
    if (!studentId) {
        res.status(400).send(`Student Id was not sent`)
        return
    }

    try {
        unregister(studentId)
        res.send(`student has been deleted succesfully`)
        return
    } catch (e) {
        res.status(404).send(e)
    }
})



app.listen(3000, () => console.log("STARTED!"))