const fs = require('fs')
const notesFileLoction = './data/notes.json'

let id = 0

const readNotes = () => {
    const data = fs.readFileSync(notesFileLoction)
    const notes = JSON.parse(data)

    for (i = 0; i < notes.length; i++) {
        console.log(`Message from: ${notes[i].writer}`)
        console.log(`Message: ${notes[i].message}`)
        id = notes[i].note_id
        console.log('------')
    }

    return notes
}

function appendNote(from, message) {
    let notes = readNotes()
    const note = { note_id: ++id, from, message }
    notes.push(note)
    fs.writeFileSync(notesFileLoction, JSON.stringify(notes))
}

module.exports = appendNote