import React from "react";
import { movies } from "../data";

/*
This component should render the text Movies Page in an <h1> and make a new <div> for each movie
The <div> should contain the movie's title, time and a <ul> with a list of its genres, each within their own <li>.
*/
function Movies() {
  const movieItems = movies.map((movie) => (
    <div key={movie.title}>
      <h2>{movie.title}</h2>
      <p>Runtime: {movie.time} min.</p>
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ))
  return (
    <div>
      <h1>Movies Page</h1>
      {movieItems}
    </div>
  );
};

export default Movies;
