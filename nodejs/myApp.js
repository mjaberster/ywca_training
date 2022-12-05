const appendNote = require('./notes.js')

const messageFromArg = process.argv[2] //from=Ali
console.log(messageFromArg)
const messageTextArg = process.argv[3] //message=Hi
console.log(messageTextArg)

const fromKeyValue = messageFromArg.split('=') //[from, ali]
const messageKeyValue = messageTextArg.split('=')//[message, hi]

appendNote(fromKeyValue[1], messageKeyValue[1])

