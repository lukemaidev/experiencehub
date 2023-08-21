import clientPromise from "@/lib/mongodb";
var mongoose = require('mongoose');

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const { userEmail } = req.query;
    const db = client.db("experiencehub");
    switch (req.method) {
      case "GET":
        const myEmail = await db.collection("users").find({email: userEmail}).toArray();
        
        if (myEmail.length == 0) {
          res.json({message: "No user found with email of : " + userEmail, data:[]});
        }
        else{
          res.json({message: "Getting user's info with email of : " + userEmail, data: myEmail});
        }
        break;
      default:
        res.json({ message: req.method+" method is not allowed!"});
        break;
    }
  } catch (e) {
    res.json({ message: "Failure", error: e.message});
  }
}
