import React, { useState, useEffect } from 'react'



function MoveMouse() {


    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [username, setUsername] = useState("")

    const usernameTextChanged = (e) => {
        setUsername(e.target.value)
    }

    const logMousePosition = e => {
        console.log('mouseEvent')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called')
        // window.addEventListener('mousemove', logMousePosition)
    }, [username])

    return (
        <div>
            <input type="text" value={username} onChange={usernameTextChanged}></input>
            Hooks X - {x} Y {y}
        </div>
    )
}

export default MoveMouse;