import React, { useEffect } from "react";
import Card from "../Components/Card";
import styles from "./Home.module.css";

const Home = (props) => {
  const handlePageChange = (event, page) => {
    if ((event.target = document.getElementById("back"))) {
      if (page === 1) {
        props.setPage(1);
      } else {
        props.setPage(props.page - 1);
        document.documentElement.scrollTop = 0;
      }
    }
    if ((event.target = document.getElementById("next"))) {
      props.setPage(props.page + 1);
      document.documentElement.scrollTop = 0;
    }
  };

  useEffect(() => {
    console.log("home mounts");

    return () => {
      console.log("home dismounts");
    };
  });

  return (
    <div className={styles.flex}>
      <div className={styles.container}>
        {props.movies.map((item) => (
          <Card
            addList={props.addList}
            key={item.id}
            id={item.id}
            title={item["original_title"]}
            rating={item["vote_average"]}
            poster={`https://image.tmdb.org/t/p/w500` + item["poster_path"]}
            synopsis={item["overview"]}
          ></Card>
        ))}
      </div>
      <div className={styles.button}>
        <button
          id="back"
          className={styles.buttonleft}
          onClick={(event) => {
            handlePageChange(event, props.page);
          }}
        ></button>
        <button
          id="next"
          className={styles.buttonright}
          onClick={(event) => {
            handlePageChange(event, props.page);
          }}
        ></button>
      </div>
    </div>
  );
};

export default Home;
