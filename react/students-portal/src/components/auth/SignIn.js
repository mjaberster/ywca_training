import React, { useRef, useState, useEffect } from "react";

const SignIn = () => {

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const loginButtonRef = useRef(null)

    const usernameOnChange = (e) => {
        setUserName(e.target.value)
    }

    const passwordOnChange = (e) => {
        setPassword(e.target.value)
    }

    useEffect(() => {
        if (username.length === 0 || password.length === 0) {
            loginButtonRef.current.disabled = true
        } else {
            loginButtonRef.current.disabled = false
        }
    }, [username, password])

    const loginClicked = (e) => {
        console.log("Clicked")
    }

    return (
        <div>
            <div>
                <span><label>Username: </label></span>
                <span><input type="text" onChange={usernameOnChange} /></span>
            </div>
            <div>
                <span><label>Password: </label></span>
                <span><input type="password" onChange={passwordOnChange} /></span>
            </div>
            <div>
                <span><button onClick={loginClicked} ref={loginButtonRef}>Login</button></span>
                <span><button  >Register</button></span>
            </div>
        </div>
    )
}

export default SignIn