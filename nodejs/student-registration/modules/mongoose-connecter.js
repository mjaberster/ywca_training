const mongoose = require('mongoose')
const Student = require('./schemas/Student')
const User = require('./schemas/User')

const host = '127.0.0.1'
const port = '27017'
const DB_NAME = 'StudentRegSys'
const connectionString = `mongodb://${host}:${port}/${DB_NAME}`

mongoose.set('strictQuery', false);

mongoose.connect(connectionString).then(
    console.log('Mongo is connected')
).catch((e) => {
    console.log('Connection to mongo has failed due to an error')
    console.log(e)
})


const createStudent = async (student) => {
    const studentToCreate = new Student(
        {
            studentId: student.studentId,
            studentName: student.studentName,
            courses: student.courses
        }
    )

    const result = await studentToCreate.save()
    return result

}

const createUser = async (user) => {
    const userToCreate = new User(
        {
            username: user.username,
            password: user.password,
            name: user.name,
            type: user.type
        }
    )
    const result = await userToCreate.save()
    return result
}

const getAllStudents = async () => {
    const result = await Student.find()
    return result
}

const getStudentById = async (studentId) => {
    const result = await Student.find({ studentId: studentId })
    return result
}

const authenticate = async (username, password) => {
    const result = await User.find({ username })
    return result
}

module.exports = { createStudent, getAllStudents, getStudentById, authenticate, createUser }