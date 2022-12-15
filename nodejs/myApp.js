const appendNote = require('./notes.js')

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const argv = yargs(hideBin(process.argv)).argv

const from = argv.from
const message = argv.message

console.log

appendNote(from, message)

