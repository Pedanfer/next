import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import React from "react";

const NewMeetup = () => {
  const router = useRouter();

  const adddMeetupHandler = async (data) => {
    const response = await fetch("/api/meetup-post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    router.replace("/");
  };
  return <NewMeetupForm onAddMeetup={adddMeetupHandler} />;
};

export default NewMeetup;
