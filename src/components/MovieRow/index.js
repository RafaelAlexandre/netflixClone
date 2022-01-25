import React from "react";
import { MovieListArea, Movies, MovieRowItem, MovieRowList } from "./styles";

const MovieRow = ({ title, items }) => {
  return (
    <Movies>
      <h2>{title}</h2>
      <MovieListArea>
        <MovieRowList>
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <MovieRowItem key={key}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </MovieRowItem>
            ))}
        </MovieRowList>
      </MovieListArea>
    </Movies>
  );
};

export default MovieRow;
