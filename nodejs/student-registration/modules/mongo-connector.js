const MongoClient = require('mongodb').MongoClient

const host = '127.0.0.1'
const port = '27017'
const connectionString = `mongodb://${host}:${port}/`
const DB_NAME = 'StudentRegSys'

const client = new MongoClient(connectionString)
let isConnected = false

const connect = async () => {
    try {
        await client.connect()
        isConnected = true
    } catch (e) {
        console.log(e)
    }
}

const addStudent = async (student) => {
    if (isConnected) {
        const db = client.db(DB_NAME)
        const result = await db.collection('Students').insertOne(student)
        console.log(result)
    } else {
        throw new Error("DB is not connected")
    }
}

const close = async () => {
    await client.close()
}

module.exports = { connect, addStudent, close }