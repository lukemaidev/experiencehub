import clientPromise from "@/lib/mongodb";
var mongoose = require('mongoose');

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const { projectId } = req.query;
    const db = client.db("experiencehub");
    switch (req.method) {
      case "GET":
        const myProject = await db.collection("projects").find({_id: new mongoose.Types.ObjectId(projectId)}).toArray();
        res.json({message: "Getting project's info with id of : " + projectId, data: myProject});
        break;
      case "PATCH":
        const myUpdatedProject = await db.collection("projects").updateOne({_id: new mongoose.Types.ObjectId(projectId)}, {$set: req.body});
        res.json({ message: "Updating project's info with id of : " + projectId, data: myUpdatedProject });
        break;
      case "DELETE":
        const myDeletedProject = await db.collection("projects").deleteOne({_id: new mongoose.Types.ObjectId(projectId)});
        res.json({ message: "Deleting project's info with id of : " + projectId, data: myDeletedProject });
        break;
      default:
        res.json({ message: req.method+" method is not allowed!"});
        break;
    }
  } catch (e) {
    res.json({ message: "Failure", error: e.message });
  }
}
