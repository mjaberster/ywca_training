import { useParams } from "react-router-dom"

const Student = () => {
    return <>
        <label>Student id:</label><label>{useParams().studentId}</label>
        <label>Student name:</label><label> Mohammad</label>
    </>
}

export default Student