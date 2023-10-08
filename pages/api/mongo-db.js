import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://Me:MmNa9W9nUkOYxyli@meetups.xfiat1b.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp";

export default class MongoDB {
  static async getMeetups() {
    const client = await MongoClient.connect(url);
    const meetups = await client.db().collection("meetups").find().toArray();
    const meetupList = meetups.map((m) => {
      const { _id, ...rest } = m;
      return { id: _id.toString(), ...rest };
    });
    client.close();
    return meetupList;
  }

  static async addMeetup(meetup) {
    const client = await MongoClient.connect(url);
    const collection = client.db().collection("meetups");
    const result = await collection.insertOne(meetup);
    client.close();
    return result;
  }
}
