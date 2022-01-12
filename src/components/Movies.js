import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(
        ({title, time, genres}) => 
        <div>
          <h1>Name: {title}</h1>
          <p>Time: {time}</p>
          <p>Genres:</p>
          <ul>
            <li>{genres[0]}</li>
            <li>{genres[1]}</li>
            <li>{genres[2]}</li>
          </ul>
        </div>)}

    </div>
  )
}

export default Movies;
