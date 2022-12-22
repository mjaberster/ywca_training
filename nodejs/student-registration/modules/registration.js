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

module.exports = { register, unregister }