import { useState } from "react"

const CConverter = () => {

    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")
    const [amount, setAmount] = useState(0)
    const [rate, setRate] = useState("")

    const fromChanged = (e) => setFrom(e.target.value)
    const toChanged = (e) => setTo(e.target.value)
    const amountChanged = (e) => setAmount(e.target.value)
    const convertClicked = (e) => {

        fetch(`https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=${from}&to=${to}&amount=${amount}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
                "x-rapidapi-key": "7e96c81625msh4476496a5805e96p16a530jsn5e2f29723e04"
            }
        }).then(response => {
            response.json().then(data => {
                console.log(data.rates);
                setRate(data.rates[to].rate_for_amount)
            })

        }).catch(err => {
            setRate(`Error due to ${err.msg}`)
        });
    }




    return (
        <div>
            <div>
                <span><label>From:</label></span>
                <span><input type="text" onChange={fromChanged} /></span>
            </div>
            <div>
                <span><label>To:</label></span>
                <span><input type="text" onChange={toChanged} /></span>
            </div>
            <div>
                <span><label>Amount:</label></span>
                <span><input type="text" onChange={amountChanged} /></span>
            </div>
            <div>
                <span><button onClick={convertClicked}>Convert</button></span>
            </div>
            <div>
                <label>{rate}</label>
            </div>
        </div>
    )
}

export default CConverter