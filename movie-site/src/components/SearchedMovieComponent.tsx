import React from "react";
import { SearchedMovie } from "../types";

const SearchedMovieComponent = (props: SearchedMovie) => {
    const { Title, Year, Poster } = props.movieInfo

    return(
        <div className="searched-movie">
            <div className="poster-wrapper">
                <img src={Poster} alt="Poster" />
            </div>
            <div className="searched-movie-info">
                <h4 className="title">{Title}</h4>
                <p className="year">{Year}</p>
            </div>
        </div>
    )
}

export { SearchedMovieComponent }