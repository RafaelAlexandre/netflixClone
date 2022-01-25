import React from "react";
import {
  Featured,
  FeaturedButtons,
  FeaturedDescription,
  FeaturedGenres,
  FeaturedHorizontalTranparent,
  FeaturedInfo,
  FeaturedName,
  FeaturedPoints,
  FeaturedSeasons,
  FeaturedVerticalTranparent,
  FeaturedYear,
} from "./styles";

const FeaturedMovie = ({ item }) => {

    let firstDate = new Date(item.first_air_date);
    let genresArray = [];
    item.genres.forEach(element => {
        genresArray.push(element.name)
    });

  return (
    <Featured
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <FeaturedVerticalTranparent>
        <FeaturedHorizontalTranparent>
          <FeaturedName>{item.original_name}</FeaturedName>
          <FeaturedInfo>
            <FeaturedPoints className="featured--points">{item.vote_average} pontos </FeaturedPoints>
            <FeaturedYear className="featured--year">{firstDate.getFullYear()}</FeaturedYear>
            <FeaturedSeasons className="featured--seasons">
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 && "s"}
            </FeaturedSeasons>
            <FeaturedDescription>{item.overview}</FeaturedDescription>
            <FeaturedButtons>
                <a href={`/watch/${item.id}`} className="featured--watchbutton" >► Assistir</a>
                <a href={`/list/add/${item.id}`} className="featured--mylistbutton" >+ Minha Lista</a>
            </FeaturedButtons>
            <FeaturedGenres><strong>Gêneros:</strong> {genresArray.join(", ")}</FeaturedGenres>
          </FeaturedInfo>
        </FeaturedHorizontalTranparent>
      </FeaturedVerticalTranparent>
    </Featured>
  );
};

export default FeaturedMovie;
