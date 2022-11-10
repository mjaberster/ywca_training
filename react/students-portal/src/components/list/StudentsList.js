import React from "react";
import './students_list.css'
const StudentsList = (props) => {

    return (
        <div className="table">
            <div className="header">
                <div className="cell">Student Id</div>
                <div className="cell">Student Name</div>
            </div>
            {console.log(">>" + props.students)}
            {props.students.map(s =>
                <div className="rowGroup">
                    <div className="row">
                        <div className="cell">{s.studentId}</div>
                        <div className="cell">{s.studentName}</div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default StudentsList