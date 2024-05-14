import React from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Homepage from "./pages/Home";
import Plays from "./pages/page";
import Movie from "./pages/Movie";

//basic setting

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;





function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/play" element={<Plays />} />
        <Route path="/movie/:id" element={<Movie/>} />


      </Routes>
    </>
  );
}

export default App;
