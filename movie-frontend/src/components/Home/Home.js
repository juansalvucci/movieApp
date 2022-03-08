import React, { useState, useEffect } from 'react';

import SliderMovies from "../SliderMovies";

export default function Home() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=09cee49b6e07b7d1b8935b4c831d6e6f&language=es-ES&page=1`
    );
    const movies = await response.json();
    setMovieList(movies);
  };

  return (
    <>
      <SliderMovies movies={movieList} />
    </>
  );
}
