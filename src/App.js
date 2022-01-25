import React, { useEffect } from "react";
import Tmdb from './api';

const HelloWorld = () => {

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
    }

    loadAll();
  }, [])

  return(
    <div>Olá mundo!</div>
  );
}

export default HelloWorld;