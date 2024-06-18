import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div>
      <img src={props.poster}></img>
      <div>Title: {props.title}</div>
      <div>Rating: {props.rating}</div>
      <button
        onClick={() =>
          props.addList(props.id, props.title, props.rating, props.poster)
        }
      >
        Add to MyList
      </button>
    </div>
  );
};

export default Card;
