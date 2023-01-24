const MongoClient = require('mongodb').MongoClient
const connectionString = `mongodb://127.0.0.1:27017/`
const client = new MongoClient(connectionString)
const add = async () => {
    await client.connect()
    const db = client.db('StudentRegistrationSys')

    const results = await db.collection('Students').insertMany([{

        studentId: 1,
        studentName: "Murad"
    },
    {

        studentId: 2,
        studentName: "Muhanad"
    }
    ])


    const oneStudent = await db.collection("Students").findOne({ studentName: "Murad" })

    console.log(oneStudent)

    client.close()
}

add()

