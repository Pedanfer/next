import { MongoClient, ObjectId } from "mongodb";

const url =
  "mongodb+srv://Me:MmNa9W9nUkOYxyli@meetups.xfiat1b.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp";

export default class MongoDB {
  static async getMeetups() {
    const result = await this.doWithCollection(async (col) => {
      const meetups = await col.find().toArray();
      return meetups.map((m) => {
        const { _id, ...rest } = m;
        return { id: _id.toString(), ...rest };
      });
    });
    return result;
  }

  static async getMeetup(meetupId) {
    const result = await this.doWithCollection(async (col) => {
      const meetup = await col.findOne({ _id: new ObjectId(meetupId) });
      const { _id, ...rest } = meetup!;
      return { id: _id.toString(), ...rest };
    });

    return result;
  }

  static async addMeetup(meetup) {
    const result = await this.doWithCollection(
      async (col) => await col.insertOne(meetup)
    );
    return result;
  }

  private static async doWithCollection(
    callback: (collection) => Promise<any>
  ) {
    try {
      const client = await MongoClient.connect(url);
      const collection = await client.db().collection("meetups");
      const result = await callback(collection);
      client.close();
      return result;
    } catch (e) {
      return e;
    }
  }
}
