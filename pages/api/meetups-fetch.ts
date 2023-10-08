import { NextApiRequest, NextApiResponse } from "next";
import MongoDB from "./mongo-db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const meetups = await MongoDB.getMeetups();
  return await res.status(200).send({ meetups: meetups });
}

export default handler;
