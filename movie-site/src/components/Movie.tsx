import React from "react";
import { IShortMovieInfo } from "./component_types";

const Movie = (props: IShortMovieInfo) => {
    const { Title, Genre, Poster, imdbRating } = props.movieInfo;

    return(
        <div className="movie">
            <div className="movie-poster">
                <img src={Poster} alt={Title} />
                <div className={`movie-rating ${Number(imdbRating) < 5 ? "movie-rating-bad" : Number(imdbRating) < 7 ? "movie-rating-average" : "movie-rating-good" }`}>{imdbRating}</div>
            </div>
            <h3 className="movie-title">{Title}</h3>
            <div className="movie-genre">{Genre.split(", ").map((genre, index) => {
                if(index > 0) {
                    return(
                        <><span className="movie-genre-bulletpoint">•</span><span>{genre}</span></>
                    )
                } else {
                    return(
                        <span>{genre}</span>
                    )
                }
            })}</div>
        </div>
    )
}

export { Movie }