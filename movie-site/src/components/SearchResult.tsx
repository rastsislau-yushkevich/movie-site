import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "../redux/action_creators/movies_action_creators";
import { StoreState } from "../types";
import { SearchedMovieComponent } from "./SearchedMovieComponent";

const SearchResult = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state: StoreState) => state.movies.movies);
    const search = useSelector((state: StoreState) => state.movies.s);

    useEffect(() => {
        dispatch(loadMovies({s: search}));
    }, [search])

    if(!movies || movies.length === 0) {
        return null;
    }

    return(
        <div className="search-result">
            {movies.map((movie, index) => <SearchedMovieComponent key={index} movieInfo={movie}/>)}
        </div>
    )
}

export { SearchResult }