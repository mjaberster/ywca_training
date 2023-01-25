const express = require('express')
const { register, unregister, fetch } = require('./modules/registration')
const { connect, addStudent, close } = require('./modules/mongo-connector')
const mongooseConnecter = require('./modules/mongoose-connecter')
const jsonwebtoken = require('jsonwebtoken')
const privateKey = "sfsfdgt345345jklg!kd"

const app = express()

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

app.post('/login', (req, res) => {
    const username = req.headers.username
    const password = req.headers.password
    console.log(`username: ${username}`)
    console.log(`password: ${password}`)

    if (!username || !password) {
        res.status(400).send('Both username and password are mandatory')
        return
    }
    const user = mongooseConnecter.authenticate(username, password)
    if (user) {
        const options = {
            expiresIn: '1h'
        }
        const jwt = jsonwebtoken.sign({ username: user.username, name: user.name, type: user.type }, privateKey, options)
        res.status(200).send(jwt)
        return
    } else {
        res.status(401).send("User is not allowed")
        return
    }
})

app.post(`/user/register`, async (req, res) => {
    const user = req.body
    // const password = user.password
    // let password = Buffer.from(base64Password, 'base64').toString('ascii');
    console.log(`>>>> ${JSON.stringify(user)}`)
    if (!user) {
        const err = new Error("User must be submited")
        err.status = 400
        throw err
    }
    try {
        // user.password = password
        const addedUser = await mongooseConnecter.createUser(user)
        if (addedUser) {
            let token
            const payload = {
                userId: user.id,
                fullName: user.name,
                type: user.type
            }

            const options = {
                expiresIn: '1h'
            }
            token = jsonwebtoken.sign(payload, privateKey, options)
            res.json({ message: "User has been added successfuly", token })
        } else {
            res.status(500).json({ message: "An error occured, couldn't create user, please try again later" })
        }
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
})


// POST /student            Register new student
app.post('/student', (req, res) => {
    const student = req.body
    console.log(req.body)
    if (!student) {
        res.status(400).send('Student is missing')
        return
    }

    mongooseConnecter.createStudent(student)

    res.send(`Student has been registered succesfully`)

})

// DELETE /student          Unregister student
app.delete('/student/:studentId', (req, res) => {
    const studentId = req.params.studentId
    if (!studentId) {
        res.status(400).send(`Student Id was not sent`)
        return
    }

    unregister(studentId)
    res.send(`student has been deleted succesfully`)
    return
})

app.get('/student/:studentId', async (req, res) => {

    const studentId = req.params.studentId
    console.log(studentId)
    const student = await mongooseConnecter.getStudentById(studentId)
    // const student = fetch(studentId)
    res.json(student).send()

})

app.get('/student', async (req, res) => {
    const students = await mongooseConnecter.getAllStudents()
    res.json(students)
})


app.use((err, req, res, next) => {

    console.log(err)

    if (res.headersSent) {
        return next(err)
    }

    res.status(err.status || 500)
    res.json({ message: err.message || 'an error has occured' }).send()
})



app.listen(3000, () => console.log("STARTED!"))