import MongoDB from "./mongo-db.ts";

// Everything here is run server side so we can deal with sensitive data like credentials

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const result = await MongoDB.addMeetup(data);
    return await res.status(200).json({ result: result });
  }
}

export default handler;
