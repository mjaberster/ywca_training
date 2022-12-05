const fs = require('fs')
const register = (studentId, studentName, courses) => {

    const files = fs.readdirSync('./data')
    if (files.includes(`s_${studentId}.json`)) {
        console.log(`Student ${studentId} is already registered in the system`)
        return
    }

    const registerdCourses = []
    for (c of courses) {
        if (c.paid === false) {
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

    fs.writeFileSync(`./data/s_${studentId}.json`, JSON.stringify(studentObj))
}

module.exports = register