import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import { useRouter } from "next/router";
import MeetupImage from "./MeetupImage";

function MeetupItem(props) {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push(`/${props.id}`);
  };

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
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
