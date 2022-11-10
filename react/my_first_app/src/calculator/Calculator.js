import React, { useState } from "react";

const Calculator = () => {

    const [xVal, setXVal] = useState(0)
    const [yVal, setYVal] = useState(0)
    const [zVal, setZVal] = useState(0)


    const changeXTextValue = (e) => {
        setXVal(parseInt(e.target.value))
    }

    const changeYTextValue = (e) => {
        setYVal(parseInt(e.target.value))
    }

    const Add = (e) => {
        setZVal(xVal + yVal)
    }


    return (
        <>

            <label>X: </label><input id="xTextVal" type="text" value={xVal} onChange={changeXTextValue} />
            <label>Y: </label><input id="yTextVal" type="text" value={yVal} onChange={changeYTextValue} /><br />

            <input type="button" value="+" onClick={Add} />
            <input type="button" value="-" />
            <input type="button" value="*" />
            <input type="button" value="/" />

            <label>The answer is: {zVal}</label>

        </>
    )
}

export default Calculator