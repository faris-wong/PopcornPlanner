import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  // const [overlay, SetOverlay] = useState(false)
  // const toggleOverlay = (event) => {

  // }

  return (
    <div className={styles.border}>
      <div className={styles.cards}>
        <img className={styles.poster} src={props.poster}></img>
        <div className={styles.overlay}>{props.synopsis}</div>
      </div>

      <div>{props.title}</div>
      <div>Rating: {props.rating}</div>
      <button
        onClick={() =>
          props.addList(props.id, props.title, props.rating, props.poster)
        }
        className={styles.button}
      >
        Add to MyList
      </button>
    </div>
  );
};

export default Card;
