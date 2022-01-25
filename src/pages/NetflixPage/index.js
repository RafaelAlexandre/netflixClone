import React, { useEffect, useState } from "react";
import Tmdb from '../../api';
import { NetflixMainPage, Lists } from "./styles";
import MovieRow from '../../components/MovieRow';

const NetflixPage = () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, [])

  return(
    <NetflixMainPage>
        <Lists>
            {movieList.map((item, key) => (
                <MovieRow key={key} title={item.title} items={item.items} />
            ))}
        </Lists>
    </NetflixMainPage>
  );
}

export default NetflixPage;