import React, { useState } from "react";

const Counter = () => {
    const [counterVal, setCounter] = useState(0);

    const handleCounter = () => setCounter(counterVal + 1);

    return (
        <>
            <button onClick={handleCounter}>Count +1</button>
            <p>{counterVal}</p>
        </>
    )
}

export default Counter