// PATH: our-domain.com/api/new-meetup
import { MongoClient } from "mongodb";

// POST /api/new-meetup HTTP/1.1
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    console.log(data);

    // store in a database
    const client = await MongoClient.connect(process.env.MONGODB_URL);
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);
    console.log("Result: ", result);

    await client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
