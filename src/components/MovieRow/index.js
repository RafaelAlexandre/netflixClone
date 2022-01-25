import React, { useState } from "react";
import { MovieListArea, Movies, MovieRowItem, MovieRowList, MovieRowLeft, MovieRowRight } from "./styles";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const MovieRow = ({ title, items }) => {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth/2);
    if(x > 0) {
      x = 0;
    }
    setScrollX(x);
  }
  
  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth/2);
    let listWidth = items.results.length * 200;
    if(window.innerWidth - listWidth > x) {
      x = window.innerWidth - listWidth - 60;
    }
    setScrollX(x);
  }

  return (
    <Movies>
      <h2>{title}</h2>
      
      <MovieRowLeft className="scrollIcon" onClick={handleLeftArrow}>
        <NavigateBeforeIcon className="lefticon"/>
      </MovieRowLeft>
      <MovieRowRight className="scrollIcon" onClick={handleRightArrow}>
        <NavigateNextIcon className="righticon"/>
      </MovieRowRight>
      <MovieListArea>
        <MovieRowList listmarginLeft={scrollX} listwidth={items.results.length * 200}>
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
