import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import { useRouter } from "next/router";
import MeetupImage from "./MeetupImage";
import { CircularProgress } from "@mui/material";
import { useState } from "react";

function MeetupItem(props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const showDetailsHandler = async () => {
    setLoading(true);
    await router.push(`/${props.id}`);
    setLoading(false);
  };

  let actions = <button onClick={showDetailsHandler}>Show Details</button>;
  if (loading) actions = <CircularProgress sx={{ color: "#77002e" }} />;

  return (
    <li className={classes.item}>
      <Card>
        <MeetupImage
          className={classes.image}
          image={props.image}
          title={props.title}
        />
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>{actions}</div>
      </Card>
    </li>
  );
}

export default MeetupItem;
