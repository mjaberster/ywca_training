const express = require("express")

const server = express()

server.get('', (req, res) => res.send('Hello from the server side'))

server.get('/about', (req, res) => res.send('This is the website for nodejs course, serves as a demo example'))
server.get('/help', (req, res) => res.send({
    name: "Marwan"
}))

server.get('/html', (req, res) => res.send("<h1>Hello From the server side</h1>"))

server.post('', (req, res) => res.send("Post served"))

server.use(express.static('./index.html'))

server.listen(3000, () => console.log("Server started on port 3000"))