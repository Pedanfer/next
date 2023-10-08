import MeetUpDetails from "@/components/meetups/MeetupDetails/MeetupDetails";
import React from "react";
import Head from "next/head";

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
  const response = await fetch("http://localhost:3000/api/meetups-fetch");
  const meetups = (await response.json()).meetups;
  const meetupIds = meetups.map((m) => ({ params: { meetupId: m.id } }));
  return {
    // Will re-execute the function if one requested path is not registered
    fallback: "blocking",
    paths: meetupIds,
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const meetups = await fetch("http://localhost:3000/api/meetups-fetch");
  const json = await meetups.json();
  const meetup = json.meetups.find((m) => m.id === meetupId);
  return { props: { meetup: meetup }, revalidate: 10 };
}

export default MeetUp;
