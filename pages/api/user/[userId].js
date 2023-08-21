import clientPromise from "@/lib/mongodb";
var mongoose = require('mongoose');

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const { userId } = req.query;
    const db = client.db("experiencehub");
    switch (req.method) {
      case "GET":
        const myUser = await db.collection("users").find({_id: new mongoose.Types.ObjectId(userId)}).toArray();
        
        if (myUser.length == 0) {
          res.json({message: "No user found with id of : " + userId, data:[]});
        }
        else{
          res.json({message: "Getting user's info with id of : " + userId, data: myUser});
        }
        break;
      case "PATCH":
        const myUpdatedUser = await db.collection("users").updateOne({_id: new mongoose.Types.ObjectId(userId)}, {$set: req.body});
        res.json({ message: "Updating user's info with id of : " + userId, data: myUpdatedUser });
        break;
      case "DELETE":
        const myDeletedUser = await db.collection("users").deleteOne({_id: new mongoose.Types.ObjectId(userId)});
        res.json({ message: "Deleting user's info with id of : " + userId, data: myDeletedUser });
        break;
      default:
        res.json({ message: req.method+" method is not allowed!"});
        break;
    }
  } catch (e) {
    res.json({ message: "Failure", error: e.message });
  }
}
