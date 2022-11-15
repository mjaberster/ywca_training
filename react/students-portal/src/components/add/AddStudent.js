import React, { useState } from "react";
import './addstudent.css'
const AddStudent = (props) => {

    const [studentId, setStudentId] = useState("")
    const [studentName, setStudentName] = useState("")

    const onAddStudentHandler = (e) => {
        let student = {
            studentId,
            studentName
        }
        props.onAdd(student)
    }

    const changeStudentId = (e) => {
        setStudentId(e.target.value)
    }

    const changeStudentName = (e) => {
        setStudentName(e.target.value)
    }

    return (
        <div className="section">
            <label>Student Id</label>
            <input type="text" className="input_field" onChange={changeStudentId} value={studentId} />
            <label>Student Name</label>
            <input type="text" className="input_field" onChange={changeStudentName} value={studentName} />
            <button onClick={onAddStudentHandler}>Add Student</button>
        </div>
    );
}

export default AddStudent