const fs = require('fs')
const DATA_REGISTRATION = './data/registration'

const register = (student) => {
    if (fs.existsSync(`${DATA_REGISTRATION}/s_${student.studentId}.json`)) {
        throw new Error(`Student ${student.studentId} is already exist`)
    }

    fs.writeFileSync(`${DATA_REGISTRATION}/s_${student.studentId}.json`, JSON.stringify(student))
}

const unregister = (studentId) => {
    debugger
    if (!fs.existsSync(`${DATA_REGISTRATION}/s_${studentId}.json`)) {
        throw new Error(`Student ${studentId} is not registered`)
    }
    fs.unlinkSync(`${DATA_REGISTRATION}/s_${studentId}.json`)
}

const fetch = (studentId) => {
    if (!studentId) {
        return fetchAll()
    }

    const file = fs.readFileSync(`${DATA_REGISTRATION}/s_${studentId}.json`)
    if (!file) {
        throw new Error('Student not found')
    }
    const student = JSON.parse(file)
    return student
}

const fetchAll = () => {
    const files = fs.readdirSync(DATA_REGISTRATION)

    const students = files.map((f) => {
        const student = fs.readFileSync(`${DATA_REGISTRATION}/${f}`)
        return JSON.parse(student)
    })

    return students
}

module.exports = { register, unregister, fetch }