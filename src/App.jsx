import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MovieCard from "./component/MovieCard";

function App() {
  const movieNumber = 1;
  return (
    <>
      {movieNumber === 1 && (
        <MovieCard movie={{ title: "La Vita Bella", release_date: "1986" }} />
      )}
    </>
  );
}

export default App;
