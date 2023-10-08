import Image from "next/image";
import React from "react";
import classes from "./MeetupDetails.module.css";

const MeetUpDetails = ({ image, title, address, description }) => {
  return (
    <section className={classes.detail}>
      <Image
        src={image}
        alt={title}
        width={0}
        height={0}
        sizes="100vw"
        className={classes.detailImg}
      />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
};

export default MeetUpDetails;
