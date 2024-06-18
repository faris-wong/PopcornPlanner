import React from "react";
import Card from "../Components/Card";
import styles from "./Home.module.css";

const Home = (props) => {
  return (
    <div className="flex-container">
      <div>
        {props.movies.map((item) => (
          <Card
            key={item.id}
            title={item["original_title"]}
            rating={item["vote_average"]}
            poster={`https://image.tmdb.org/t/p/w500` + item["poster_path"]}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
