import { useRef } from "react"

const Home = (props) => {
    const divRef = useRef(null)

    const changeToRed = () => {
        divRef.current.style.backgroundColor = "red"
    }

    const changeToWhite = () => {
        divRef.current.style.backgroundColor = "white"
    }

    return <>
        <div ref={divRef} style={{ width: "100%" }}
            onMouseOver={changeToRed}
            onMouseOut={changeToWhite}
        >
            أثممخ
        </div>
        {props.children}
    </>
}

export default Home