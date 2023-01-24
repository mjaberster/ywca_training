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


const getAllStudents = async () => {
    const result = await Student.find()
    return result
}

const getStudentById = async (studentId) => {
    const result = await Student.find({ studentId: studentId })
    return result
}

const isSignedIn = async (username, password) => {
    const result = await User.find({ username })
    if (!result) {
        return false
    }

    if (result.password === password) {
        return true
    }

    return false

}

module.exports = { createStudent, getAllStudents, getStudentById, isSignedIn }