import { ReactDOM } from "react"
import { useParams } from "react-router-dom"

const WelcomeMessage = () => {
    return <h3>{useParams().message}</h3>
}

export default WelcomeMessage