import React from 'react';
import { MovieListArea, Movies } from './styles';

const MovieRow = ({title, items}) => {
  return (
      <Movies>
          <h2>{title}</h2>
          <MovieListArea>
              {items.results.length > 0 && items.results.map((item, key) => (
                  <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
              ))}
          </MovieListArea>
      </Movies>
  );
}

export default MovieRow;