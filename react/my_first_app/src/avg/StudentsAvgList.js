import React from "react";

const StudentsAvgList = props => {

    return <table>

            <tr>
                <td>Student Name</td>
                <td>Student Avg</td>
            </tr>

            {
                props.students.map(s => <tr>
                    <td>{s.studentName}</td>
                    <td>{s.avg}</td>
                </tr>)
            }

    </table>
}

export default StudentsAvgList