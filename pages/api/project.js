import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;

    const db = client.db("experiencehub");
    switch (req.method) {
      case "POST":
        const bodyObject = req.body;
        const myUser = await db.collection("projects").insertOne(bodyObject);
        res.json(req.body);
        break;
      case "GET":
        const allProjects = await db.collection("projects").find({}).toArray();
        res.json({data:allProjects})
        break;
      case "DELETE":
        const allDeletedProjects = await db.collection("projects").deleteMany({});
        res.json({message:"All projects deleted!", data:allDeletedProjects})
        break;
      default:
        res.json({ message: "Method "+req.method+" not allowed in this route!" });
        break;
    }
  } catch (e) {
    res.json({ message: "Failure", error: e.message });
  }
}
