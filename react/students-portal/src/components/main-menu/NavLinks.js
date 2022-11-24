import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {

    return <ul className="nav-links">
        <li>
            <NavLink to="/" exact>Home</NavLink>
        </li>
        <li>
            <NavLink to="/students">Students</NavLink>
        </li>
        <li>
            <NavLink to="/course">Courses</NavLink>
        </li>
        <li>
            <NavLink to="/auth">LOGIN</NavLink>
        </li>
    </ul>
};

export default NavLinks;