import React, { useEffect, useState } from "react";
import Tmdb from "../../api";
import { NetflixMainPage, Lists } from "./styles";
import MovieRow from "../../components/MovieRow";
import FeaturedMovie from "../../components/FeaturedMovie";

const NetflixPage = () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter((item) => item.slug === 'originals');
      let ramdomChosenMovie = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosenMovie = originals[0].items.results[ramdomChosenMovie];
      let chosenMovieInfo = await Tmdb.getMovieInfo(chosenMovie.id, 'tv');
      setFeaturedData(chosenMovieInfo);
    };

    loadAll();
  }, []);

  return (
    <NetflixMainPage>

      { featuredData &&
          <FeaturedMovie item={featuredData}/>
      }      
      
        <Lists>
          {movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items} />
          ))}
        </Lists>    
    </NetflixMainPage>
  );
};

export default NetflixPage;
