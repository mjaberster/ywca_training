const fs = require('fs')
const register = require('./register.js')

const data_location = './data'
const registration_location = './registration'

const files = fs.readdirSync(data_location)
files.forEach(f => {
    const data = fs.readFileSync(`${data_location}/${f}`)
    const student = JSON.parse(data)
    console.log("---");
    console.log(`Student ID: ${student.studentId}`)
    console.log(`Student Name: ${student.studentName}`)
    console.log(`Courses:`)
    student.courses.forEach(c => {
        console.log(` Course ID: ${c.courseId}`)
        console.log(` Course Name: ${c.courseName}`)
        console.log(` Paid: ${c.paid}`)
    })
})


const registrationFiles = fs.readdirSync(registration_location)
registrationFiles.forEach(f => {
    const file = fs.readFileSync(`${registration_location}/${f}`)
    const student = JSON.parse(file)
    register(student.studentId, student.studentName, student.courses)
})

