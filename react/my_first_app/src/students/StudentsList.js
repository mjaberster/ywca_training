import './StudentsList.css'

function StudentsList() {
    
    const students = ["Mhmd", "Ahmad", "Mariam"]
    return (

        <ul className='list'>
            <li>{students[0]}</li>
            <li>{students[1]}</li>
            <li>{students[2]}</li>
        </ul>

    );
}

export default StudentsList