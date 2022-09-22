import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMovies, searchMovies } from "../redux/action_creators/movies_action_creators";
import { store } from "../redux/store";
import { StoreState } from "../types";
import { Movie } from "./Movie";
import { MovieAlt } from "./MovieAlt";

const Movies = () => {

    const movies = useSelector((state: StoreState) => state.movies.movies);
    const dispatch = useDispatch();

    // const titleToSearch = useSelector((state: StoreState) => state.movies.s);
    const titleToSearch = "Titanic";

    useEffect(() => {
        dispatch(loadMovies({ s: titleToSearch }))
    }, [titleToSearch])

    if(movies.length === 0) {
        return null
    }

    return(
        <div className="movies-page">
            {/* {testData.map((movie, index) => <Movie key={index} movieInfo={movie}/>)} */}
            {movies.map((movie, index) => <MovieAlt key={index} Title={movie.Title} Poster={movie.Poster} Type={movie.Type} Year={movie.Year} imdbID={movie.imdbID}/>)}
        </div>
    )
}

export { Movies }