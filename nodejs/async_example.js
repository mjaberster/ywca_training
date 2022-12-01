const fs = require('fs')


async function readFromFile() {
    const data = fs.readFileSync('./data/notes.json')
    const notes = JSON.parse(data)
    await setTimeout(() => { }, 5000)
    console.log('readFromFile Finished')
    return notes
}

async function reading() {
    console.log('aya jumleh')
    readFromFile()
    console.log("Program end")
}

reading()



