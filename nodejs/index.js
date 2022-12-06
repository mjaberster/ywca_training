const fs = require('fs')
const { register, unregister } = require('./registeration.js')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')


const data_location = './data'
try {
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
} catch (err) {
    console.log('An error has occured while trying to read the directory, please try again later')
} finally {
    console.log('Finished')
}


// const registrationFiles = fs.readdirSync(registration_location)
// registrationFiles.forEach(f => {
//     const file = fs.readFileSync(`${registration_location}/${f}`)
//     const student = JSON.parse(file)
//     register(student.studentId, student.studentName, student.courses)
// })


const argv = yargs(hideBin(process.argv)).argv
const operation = argv.operation
const studentId = argv.studentId
const studentName = argv.studentName
const courseId = argv.courseId
const courseName = argv.courseName
const paid = argv.paid

switch (operation) {
    case "register":
        register(studentId, studentName, [{ courseId, courseName, paid }])
        break
    case 'unregister':
        unregister(studentId)
        break
    default:
        console.log('Unsupported operation')
}