import React from "react";
import './students_list.css'
const StudentsList = (props) => {

    const onDeleteClicked = (e) => {
        props.onDelete({ studentId: e.target.value })
    }

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
                        <div className="cell">
                            <button onClick={onDeleteClicked} value={s.studentId}>X</button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default StudentsList