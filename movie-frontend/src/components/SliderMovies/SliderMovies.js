import React from "react";
import { Carousel } from "antd";
import Loading from "../Loading/Loading";
import Movie from "../Movie";
import "./SliderMovies.css";

export default function SliderMovies(props) {
  const { movies } = props;

  if (movies.loading || !movies.results) {
    return <Loading />;
  }
  
  const results = movies.results;
  return (
    <Carousel autoplay className="slide">
      {results.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </Carousel>
  )
}
