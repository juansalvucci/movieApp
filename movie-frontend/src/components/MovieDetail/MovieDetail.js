import React, { useEffect, useState } from "react";
import { Image, Button } from 'antd';
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import moment from 'moment';
import ReactPlayer from 'react-player'
import "./MovieDetail.css";

export default function MovieDetail() {
  const { id } = useParams();  
  
  const [movieInfo, setMovieInfo] = useState({});

  useEffect(() => {
      obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
      const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=09cee49b6e07b7d1b8935b4c831d6e6f&language=es-ES&page=1`
      );
      const movie = await response.json();
      setMovieInfo(movie);
  };
  
  if (movieInfo.loading || !movieInfo.genres) {
    return <Loading />;
  }

  return <RenderMovie movieInfo={movieInfo} />
}
  
function RenderMovie(props) {
    const {
        movieInfo: { title, release_date, overview, backdrop_path, poster_path, genres, video },
    } = props;
    const backdropPath = `https://image.tmdb.org/t/p/w500${backdrop_path}`;
    const posterPath = `https://image.tmdb.org/t/p/w500${poster_path}`;
    const _video = `https://www.youtube.com/watch?${video}`
    return (
        <>
            <div className="_movieDetailFondo"style={{ backgroundImage: `url('${backdropPath}')` }}>
                <div> 
                    <Image className="_image" width={350} src={posterPath} />    
                </div> 
                <div > 
                    <h2>
                        {title} 
                        <h5 className="h5_year"><span>{moment(release_date, "YYYY-MM-DD").format(" YYYY")}</span></h5>
                        <Button size={"large"} type={"primary"} className="button">Ver trailer</Button>                   
                    </h2>             
                    <h3>Vista general:</h3>
                    <p>{overview}</p>
                    <h3>Genero:</h3>
                    <ul>
                    {genres.map((gender) => (
                        <li key={gender.id}>{gender.name}</li>
                        ))}
                    </ul> 
                </div>
            </div>
        </>
    );       
}
  