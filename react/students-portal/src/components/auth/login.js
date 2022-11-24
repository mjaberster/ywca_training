import React, { useState } from 'react'
import './login.css'
import ReactDOM from "react-dom";

export default function Login({ show, closeModal }) {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    if (!show) return null


    const usernameOnChange = (e) => {
        setUserName(e.target.value)
    }

    const passwordOnChange = (e) => {
        setPassword(e.target.value)
    }

    return ReactDOM.createPortal(
        <div className="modal">
            <div className="overlay" onClick={closeModal}></div>
            <div className="content">
                <div>
                    <span><label>Username: </label></span>
                    <span><input type="text" onChange={usernameOnChange} /></span>
                </div>
                <div>
                    <span><label>Password: </label></span>
                    <span><input type="password" onChange={passwordOnChange} /></span>
                </div>
                <div>
                    <span><button>Login</button></span>
                    <span><button>Register</button></span>
                </div>
            </div>
        </div>
        , document.getElementById("modal"))
}