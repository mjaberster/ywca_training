const express = require('express')

const server = express()

let stopwatch = []

const count = () => {
    const latestIndex = stopwatch.length
    stopwatch[latestIndex] = {
        count: 0,
        status: "RUNNING"
    }
    setInterval(() => {
        if (stopwatch[latestIndex].status === "RUNNING")
            stopwatch[latestIndex].count = stopwatch[latestIndex].count + 1
    }, 1000)

    return latestIndex
}

server.post('/stopwatch', (req, res) => {
    const stopwatchId = count()
    res.status(202).send({
        callback: `/stopwatch?id=${stopwatchId}`
    })
})

server.put('/stopwatch', (req, res) => {
    const stopwatchID = req.query.id
    stopwatch[stopwatchID].status = "STOPPED"
    res.status(202).send({
        counter: stopwatch[stopwatchID].count,
        status: stopwatch[stopwatchID].status
    })
})

server.get('/stopwatch', (req, res) => {
    const stopwatchId = req.query.id
    res.send({
        counter: stopwatch[stopwatchId].count,
        status: stopwatch[stopwatchId].status
    })
})


server.listen(3000, () => console.log("STARTED"))