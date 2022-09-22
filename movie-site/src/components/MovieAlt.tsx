import React from "react";
import { SearchedMovieInfo } from "../types";

const MovieAlt = (props: SearchedMovieInfo) => {
    const { Title, Year, Poster, imdbID, Type } = props;

    return(
        <div className="movie">
            <div className="movie-poster">
                <img src={Poster} alt={Title} />
                {/* <div className={`movie-rating`}>{imdbID}</div> */}
            </div>
            <h3 className="movie-title">{Title}</h3>
            <div className="movie-genre">{Year}, {Type}</div>
        </div>
    )
}

export { MovieAlt }