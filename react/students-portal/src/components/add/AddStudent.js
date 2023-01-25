import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/theme-context";
import './addstudent.css'
const AddStudent = (props) => {

    const darkTheme = useContext(ThemeContext)

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

    const themeStyle = {
        backgroundColor: darkTheme ? `#000` : `#fff`,
        color: darkTheme ? `#fff` : `#000`,
        padding: `2rem`,
        margin: `2rem`
    }

    return (
        <div className="section" style={themeStyle}>
            <label>Student Id</label>
            <input type="text" className="input_field" onChange={changeStudentId} value={studentId} />
            <label>Student Name</label>
            <input type="text" className="input_field" onChange={changeStudentName} value={studentName} />
            <button onClick={onAddStudentHandler}>Add Student</button>
        </div>
    );
}

export default AddStudent