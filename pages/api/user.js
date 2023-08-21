import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;

    const db = client.db("experiencehub");
    switch (req.method) {
      case "POST":
        const bodyObject = req.body;
        const myUser = await db.collection("users").insertOne(bodyObject);
        res.json({data:bodyObject});
        break;
      case "GET":
        const allUsers = await db.collection("users").find({}).toArray();
        res.json({data:allUsers})
        break;
      case "DELETE":
        const allDeletedUsers = await db.collection("users").deleteMany({});
        res.json({message:"All users deleted!", data:allDeletedUsers})
        break;
      default:
        res.json({ message: "Method "+req.method+" not allowed in this route!" });
        break;
    }
  } catch (e) {
    res.json({ message: "Failure", error: e.message });
  }
}
