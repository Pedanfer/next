import MeetUpDetails from "@/components/meetups/MeetupDetails/MeetupDetails";
import React from "react";
import Head from "next/head";
import MongoDB from "../api/mongo-db";

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

// We pass the data needed for pre-rendering in the server some or
// all the paths of a dynamic page, in this case the meetup ids

export async function getStaticPaths() {
  const meetups = await MongoDB.getMeetups();
  const meetupIds = meetups.map((m) => ({
    params: { meetupId: m.id },
  }));
  return {
    // Will re-execute the function if one requested path is not registered
    fallback: "blocking",
    paths: meetupIds,
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const meetups = await MongoDB.getMeetups();
  const meetup = meetups.find((m) => m.id === meetupId);
  return { props: { meetup: meetup }, revalidate: 10 };
}

export default MeetUp;
