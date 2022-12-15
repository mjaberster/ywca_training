const e = require("express")
const fs = require("fs")



const validate = (username, password) => {

    const file = fs.readFileSync(`./permissions/user1.json`)
    const user = JSON.parse(file)

    if (username === user.username && password === user.password) {
        return true
    } else {
        return false
    }
}

module.exports = validate