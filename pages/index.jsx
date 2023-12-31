import MeetupList from "@/components/meetups/MeetupList";
import Head from "next/head";
import MongoDB from "./api/mongo-db.ts";

const Home = (props) => {
  return (
    <>
      <Head>
        <title>React meetups</title>
        <meta
          name="description"
          content="Search for your favorite react meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups}></MeetupList>
    </>
  );
};

// Runs every 10 seconds on the server side to pre-render what the client
// requests and the search engines can see

export async function getStaticProps() {
  const meetups = await MongoDB.getMeetups();
  return { props: { meetups: meetups }, revalidate: 5 };
}

// Runs with every incoming request on the server side to pre-render it,
// for example needed if we want to validate the user in every request

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//fetch data from an API

//   return { props: { meetups: DUMMY_MEETUPS } };
// }

export default Home;
