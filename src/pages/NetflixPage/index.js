import React, { useEffect, useState } from "react";
import Tmdb from "../../api";
import { NetflixMainPage, Lists, Footer } from "./styles";
import MovieRow from "../../components/MovieRow";
import FeaturedMovie from "../../components/FeaturedMovie";
import Header from "../../components/Header";

const NetflixPage = () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter((item) => item.slug === "originals");
      let ramdomChosenMovie = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosenMovie = originals[0].items.results[ramdomChosenMovie];
      let chosenMovieInfo = await Tmdb.getMovieInfo(chosenMovie.id, "tv");
      setFeaturedData(chosenMovieInfo);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <NetflixMainPage>
      <Header blackHeader={blackHeader} />

      {featuredData && <FeaturedMovie item={featuredData} />}

      <Lists>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </Lists>

      <Footer>
        Feito com{" "}
        <span role="img" aria-label="coração">
          💖
        </span>{" "}
        por Rafael Alexandre, seguindo projeto da B7Web. <br />
        Direitos de imagem para Netflix.
        <br />
        Os dados podem ser obtidos no site themoviedb.org
      </Footer>
    </NetflixMainPage>
  );
};

export default NetflixPage;
