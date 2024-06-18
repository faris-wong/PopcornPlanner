import React from "react";

const ListCard = (props) => {
  const src = "https://image.tmdb.org/t/p/w500" + props.poster;
  return (
    <div>
      <img src={src}></img>
      <div>Title: {props.title}</div>
      <div>Rating: {props.rating}</div>
      <div>{props.poster}</div>
      <button onClick={() => props.deleteList(props.id)}>Remove</button>
    </div>
  );
};

export default ListCard;
