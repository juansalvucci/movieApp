import React from "react";
import { List, Avatar } from "antd";
import { Link } from "react-router-dom"
import Loading from "../Loading/Loading";
import "./MovieList.css"

export default function MovieList(props) {
  const { movies } = props;

  if (movies.loading || !movies.results) {
    return <Loading />;
  }
  
  const results = movies.results;

  return (      
          <List 
            itemLayout="horizontal" 
            dataSource={results} 
            renderItem={movie => (
              <List.Item className="lista-item">
                  <List.Item.Meta
                    avatar={<Link to={`/movie/${movie.id}`}><Avatar shape="square" size={90} src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} /></Link>}
                    title={<Link to={`/movie/${movie.id}`}><h6>{movie.title}</h6></Link>}
                  />
              </List.Item>
            )}
          />         
        );
}
