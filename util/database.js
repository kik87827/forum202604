/* const client = await MongoClient.connect('mongodb+srv://admin:mongoKik12345@cluster0.e9iv5.mongodb.net/?appName=Cluster0', { useNewUrlParser: true });

export { client } */

import { MongoClient } from "mongodb";

const url = ''
let connectDB;
if (process.env.NODE_ENV === 'development') {
    if (!global._mongo) {
        global._mongo = new MongoClient(url).connect();
    }
    connectDB = global._mongo
} else {
    connectDB = new MongoClient(url).connect()
}

export { connectDB }