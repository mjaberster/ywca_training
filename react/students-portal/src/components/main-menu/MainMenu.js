import { NavLink } from "react-router-dom"

const MainMenu = () => {
    return <>
        <NavLink to="/">Home</NavLink><br />
        <NavLink to="/students">Students</NavLink>
    </>
}

export default MainMenu