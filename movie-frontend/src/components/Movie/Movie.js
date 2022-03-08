import React from "react";
import 'antd/dist/antd.css';
import { Card } from 'antd';
import "./Movie.css";

function Movie(props) {
    const {
        movie: { backdrop_path, title, overview },
    } = props;
    console.log(props);
    const backdropPath = `https://image.tmdb.org/t/p/w500${backdrop_path}`;
    return (
        <>
            <div 
                className="_movie" 
                style={{ backgroundImage: `url('${backdropPath}')` }}
            >
                <Card className="_card" bordered={false} title={<h3 className="h3_card">{title}</h3>} style={{ width: 685 }}>
                    <p>{overview}</p>
                </Card>                           
            </div>            
        </>
    );       
}

export default Movie
