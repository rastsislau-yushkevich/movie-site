import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMovies, searchMovies } from "../redux/action_creators/movies_action_creators";
import { store } from "../redux/store";
import { StoreState } from "../types";
import { Movie } from "./Movie";
import { MovieAlt } from "./MovieAlt";
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';

const Movies = () => {

    const movies = useSelector((state: StoreState) => state.movies.movies);
    const dispatch = useDispatch();

    let titleToSearch = useSelector((state: StoreState) => state.movies.s);
    if(titleToSearch === "") {
        titleToSearch = "titanic";
    }

    useEffect(() => {
        dispatch(loadMovies({ s: titleToSearch }))
    }, [titleToSearch])

    if(!movies || movies.length === 0) {
        return null
    }

    return(
        <div className="movies">
            <div className="movies-page">
                {movies.map((movie, index) => <MovieAlt key={index} Title={movie.Title} Poster={movie.Poster} Type={movie.Type} Year={movie.Year} imdbID={movie.imdbID}/>)}
            </div>
            <div className="movies-footer">
            <Pagination>
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
            </Pagination>
            </div>
        </div>
    )
}

export { Movies }