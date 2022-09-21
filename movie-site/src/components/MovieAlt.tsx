import React from "react";
import { MovieInfo } from "../types";

const MovieAlt = (props: MovieInfo) => {
    const { Title, Year, Poster, imdbId, Type } = props;

    return(
        <div className="movie">
            <div className="movie-poster">
                <img src={Poster} alt={Title} />
                <div className={`movie-rating`}>{imdbId}</div>
            </div>
            <h3 className="movie-title">{Title}</h3>
            <div className="movie-genre">{Year}, {Type}</div>
        </div>
    )
}

export { MovieAlt }