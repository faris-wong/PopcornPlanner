import React, { Suspense, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
const Home = React.lazy(() => import("./pages/Home"));
const MyList = React.lazy(() => import("./pages/MyList"));
const Login = React.lazy(() => import("./pages/Login"));
import NavBar from "./Components/NavBar";
import styles from "./index.css";

const App = () => {
  const [movies, setMovies] = useState([]); // fetching from database
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_SERVER + import.meta.env.VITE_API_KEY
        // `https://api.themoviedb.org/3/movie/top_rated?api_key=85e95598f45fa1650e9455d8eb56d6d7`
      );

      if (!response.ok) {
        throw new Error("fetch error");
      }
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getList = async () => {
    try {
      const response = await fetch(
        "https://api.airtable.com/v0/appa8TOXF3jwz74S8/Table%201",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${
              import.meta.env.VITE_AIRTABLE_BEARER_TOKEN
            }`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("fetch error");
      }
      const list = await response.json();
      console.log(list.records);
      setList(list.records);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  const addList = async (chicken, duck, cow, pig) => {
    try {
      const response = await fetch(import.meta.env.VITE_AIRTABLE_SERVER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_BEARER_TOKEN}`,
        },
        body: JSON.stringify({
          fields: {
            id: chicken.toString(),
            title: duck,
            rating: cow.toString(),
            poster_url: pig,
          },
        }),
      });

      console.log(response);
      if (!response.ok) {
        throw new Error("error adding");
      }
      getList();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <NavBar></NavBar>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route
            path="login"
            element={<Login name={name} setName={setName}></Login>}
          ></Route>
          <Route
            path="home"
            element={
              <Home
                movies={movies}
                setList={setList}
                getList={getList}
                addList={addList}
              ></Home>
            }
          ></Route>
          <Route
            path="myList"
            element={
              <MyList
                list={list}
                getList={getList}
                setList={setList}
                name={name}
              ></MyList>
            }
          ></Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
