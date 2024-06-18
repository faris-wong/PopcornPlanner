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
  const userNameInput = useRef()
  

  const getData = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=" +
          "85e95598f45fa1650e9455d8eb56d6d7"
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
  return (
    <>
      <NavBar></NavBar>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route
            path="login"
            element={<Login userNameInput={userNameInput}></Login>}
          ></Route>
          <Route path="home" element={<Home movies={movies}></Home>}></Route>
          <Route path="myList" element={<MyList></MyList>}></Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
