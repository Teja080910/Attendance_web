import {MongoClient} from "mongodb";
let db; 
async function connectToDB(cb){
    const url = "mongodb+srv://sanjaykumarmullu333:sanju@cluster0.ncxxjig.mongodb.net/";
    const client = new MongoClient(url);
    await client.connect();
    db = client.db("Attendance");
    cb();
}

export {db,connectToDB};