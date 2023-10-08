import React from "react";
import classes from "./MeetupDetails.module.css";
import MeetupImage from "./../MeetupImage";

const MeetUpDetails = ({ image, title, address, description }) => {
  return (
    <section className={classes.detail}>
      <MeetupImage className={classes.detailImg} image={image} title={title} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
};

export default MeetUpDetails;
