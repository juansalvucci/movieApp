import React, { useState, useEffect } from 'react';
import MovieList from "../MovieList/MovieList";

export default function PopularMovies() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=09cee49b6e07b7d1b8935b4c831d6e6f&language=es-ES&page=1`
    );
    const movies = await response.json();
    setMovieList(movies);
  };

  return (
    <>      
        <h3 className="h3_title">Popular Movies:</h3>
        <MovieList movies={movieList} />
    </>
  );
}
