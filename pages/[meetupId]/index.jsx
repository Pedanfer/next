import MeetUpDetails from "@/components/meetups/MeetupDetails/MeetupDetails";
import React from "react";
import Head from "next/head";
import MongoDB from "../api/mongo-db.ts";

const MeetUp = (props) => {
  return (
    <>
      <Head>
        <title>{props.meetup.title}</title>
        <meta name="description" content={props.meetup.description} />
      </Head>
      <MeetUpDetails
        image={props.meetup.image}
        title={props.meetup.title}
        address={props.meetup.address}
        description={props.meetup.description}
        key={props.meetup.key}
      />
    </>
  );
};

export async function getServerSideProps(context) {
  const meetupId = context.params.meetupId;
  const meetup = await MongoDB.getMeetup(meetupId);
  return { props: { meetup: meetup } };
}

export default MeetUp;
