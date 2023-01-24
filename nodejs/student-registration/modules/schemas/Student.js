const mongoose = require("mongoose")

const studentSchema = mongoose.Schema({
    studentId: {
        type: String,
        required: true
    },
    studentName: {
        type: String,
        required: true
    },
    course: [
        {
            courseId: {
                type: String,
                required: true
            },
            courseName: {
                type: String,
                required: true
            }
        }
    ]
})

module.exports = mongoose.model('Student', studentSchema)