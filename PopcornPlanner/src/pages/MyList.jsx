import React from "react";
import ListCard from "../Components/ListCard";
import styles from "./MyList.module.css";

const MyList = (props) => {
  const deleteList = async (id) => {
    try {
      const response = await fetch(import.meta.env.VITE_CHICKEN_DELETE + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_BEARER_TOKEN}`,
        },

        Body: {
          records: [
            {
              id: id,
            },
          ],
        },
      });
      if (!response.ok) {
        throw new Error("error deleting");
      }
      props.getList();
    } catch (error) {
      console.log("error message");
    }
  };

  return (
    <>
      <div className={styles.name}>{props.name}'s list</div>
      <div className={styles.flex}>
        <div className={styles.container}>
          {props.list.map((item) => (
            <ListCard
              id={item.id}
              key={item.id}
              title={item["fields"]["title"]}
              rating={item["fields"]["rating"]}
              poster={item["fields"]["poster_url"]}
              deleteList={deleteList}
            ></ListCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyList;
