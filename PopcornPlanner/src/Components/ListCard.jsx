import React from "react";
import styles from "./ListCard.module.css";

const ListCard = (props) => {
  const src = "https://image.tmdb.org/t/p/w500" + props.poster;
  return (
    <div className={styles.border}>
      <img src={src} className={styles.cards}></img>
      <div>{props.title}</div>
      <div>Rating: {props.rating}</div>
      <button
        onClick={() => props.deleteList(props.id)}
        className={styles.button}
      >
        Remove
      </button>
    </div>
  );
};

export default ListCard;
