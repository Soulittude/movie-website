import React from "react";
import MovieCard from "../component/MovieCard";

function Home() {
  const movies = [
    { id: 1, title: "John Wick", release_date: "2011" },
    { id: 2, title: "Matrix", release_date: "2000" },
    { id: 3, title: "Terminator", release_date: "1998" },
    { id: 4, title: "The Godfather", release_date: "1956" },
  ];

  return (
    <div className="home">
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
