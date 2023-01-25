import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = ({ showLogin }) => {

    return <ul className="nav-links">
        <li>
            <NavLink end to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/students">Students</NavLink>
        </li>
        <li>
            <NavLink to="/course">Courses</NavLink>
        </li>
        <li>
            <NavLink to="/auth">Auth</NavLink>
        </li>
    </ul>
};

export default NavLinks;