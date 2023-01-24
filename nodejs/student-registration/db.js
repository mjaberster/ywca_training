const { MongoClient, ObjectId } = require("mongodb");

const data = [
    {
        "studentId": 0,
        "studentName": "Leonor Dixon"
    },
    {
        "studentId": 1,
        "studentName": "Hester West"
    },
    {
        "studentId": 2,
        "studentName": "Contreras Berger"
    },
    {
        "studentId": 3,
        "studentName": "Ochoa Stafford"
    },
    {
        "studentId": 4,
        "studentName": "Silva Robertson"
    }
]
// Connection URI
const uri = `mongodb://127.0.0.1:27017`;
const dbName = "StudentRegistrationSys"

// Create a new MongoClient
const client = new MongoClient(uri);

async function addAll() {
    const client = new MongoClient(uri)
    await client.connect()
    console.log("Connected!")
    const db = client.db(dbName)
    const results = await db.collection("Students").insertMany(data)
    console.log(results.insertedCount, results.insertedIds)
    console.log("Added")

    const students = db.collection("Students").find({ studentName: "Wajeeh" })
    // console.log(await results.toArray())
    console.log("Added")


    console.log(oneStudent)

    // const byId = await db.collection("Students").findOne({ _id: new ObjectId("62055b0a2e3dddd3fb19928e") })
    // console.log(">>>>>>>>>>>")
    // console.log(byId)

    client.close()


}




addAll()


