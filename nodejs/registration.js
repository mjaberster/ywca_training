const fs = require('fs')
const data_location = './data'

const register = (studentId, studentName, courses) => {

    const files = fs.readdirSync('./data')
    if (files.includes(`s_${studentId}.json`)) {
        console.log(`Student ${studentId} is already registered in the system`)
        return
    }

    const registerdCourses = []
    for (c of courses) {
        if (c.paid === false || c.paid === "false") {
            console.log(`student ${studentName} has to pay for course ${c.courseName}`)
            continue;
        }
        registerdCourses.push(c)
    }
    const studentObj = {
        studentId,
        studentName,
        courses: registerdCourses
    }

    fs.writeFileSync(`${data_location}/s_${studentId}.json`, JSON.stringify(studentObj))
}

const unregister = (studentId) => {
    const deletedFile = `${data_location}/s_${studentId}.json`
    const files = fs.readdirSync('./data')
    if (files.includes(`s_${studentId}.json`)) {
        fs.unlink(deletedFile, (e) => console.log(e))
        console.log(`Student ${studentId} deleted`)
        return
    }
    console.log('Not found')
}

const getAllStudents = () => {
    const students = []
    const files = fs.readdirSync(data_location)
    files.forEach(f => {
        const file = fs.readFileSync(`${data_location}/${f}`)
        students.push(JSON.parse(file))
    })
    return students
}

const getStudentById = (studentId) => {
    const studentFilePath = `${data_location}/s_${studentId}.json`
    if (!fs.existsSync(studentFilePath))
        throw new Error(`No student with id ${studentId} was found!`)

    const student = fs.readFileSync(studentFilePath)
    return JSON.parse(student)
}

module.exports = { register, unregister, getAllStudents, getStudentById }