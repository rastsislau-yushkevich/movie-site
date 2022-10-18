import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "../redux/action_creators/movies_action_creators";
import { StoreState } from "../types";
import { MovieAlt } from "./MovieAlt";
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Favourites = () => {

    let [currentPage, setCurrentPage] = useState(1);

    const movies = useSelector((state: StoreState) => state.movies.movies.Search);
    const dispatch = useDispatch();
    const totalResults = Number(useSelector((state: StoreState) => state.movies.movies.totalResults));
    const theme = useSelector((state: StoreState) => state.theme.theme);
    const pageCount = Math.ceil(totalResults/10);

    let titleToSearch = useSelector((state: StoreState) => state.movies.s);
    if(titleToSearch === "") {
        titleToSearch = "legend";
    }

    const newMovies = [...movies];
    newMovies.sort((a, b) => {
        if(a.Title < b.Title) {
            return 1;
        }
        if(a.Title > b.Title) {
            return -1;
        }
        return 0;
    })

    useEffect(() => {
        dispatch(loadMovies({ s: titleToSearch, page: String(currentPage) }))
    }, [titleToSearch, currentPage])

    const handlePaginationClick = (e: any) => {
        setCurrentPage(e.target.innerHTML)
        dispatch(loadMovies({ s: titleToSearch, page: String(currentPage) }))
    }

    if(!movies || movies.length === 0) {
        return null
    }

    return(
        <div className={`movies movies-${theme}`}>
            <div className="movies-page">
                {newMovies.map((movie, index) =><Link to={`${movie.imdbID}`} key={index}><MovieAlt Title={movie.Title} Poster={movie.Poster} Type={movie.Type} Year={movie.Year} imdbID={movie.imdbID}/></Link>)}
            </div>
            <div className="movies-footer">
            <Pagination>
                {currentPage == 1 ? <Pagination.Prev disabled/> : <Pagination.Prev onClick={() => setCurrentPage(currentPage-1)}/> }
                {/* <Pagination.Item onClick={(e) => handlePaginationClick(e)}>{1}</Pagination.Item> */}
                {currentPage > 1 ? <Pagination.Item onClick={(e) => handlePaginationClick(e)}>{1}</Pagination.Item> : ""}
                {currentPage > 2 ?<Pagination.Ellipsis /> : ""}

                {currentPage > 3 ? <> <Pagination.Item onClick={(e) => handlePaginationClick(e)}>{+currentPage-2}</Pagination.Item><Pagination.Item onClick={(e) => handlePaginationClick(e)}>{+currentPage-1}</Pagination.Item> </> : ""}
                <Pagination.Item active>{+currentPage}</Pagination.Item>
                {pageCount - currentPage < 2 ? "" :<> <Pagination.Item onClick={(e) => handlePaginationClick(e)}>{+currentPage+1}</Pagination.Item><Pagination.Item onClick={(e) => handlePaginationClick(e)}>{+currentPage+2}</Pagination.Item></>}
                {/* {pageCount - currentPage !== 0 ? <Pagination.Item onClick={(e) => handlePaginationClick(e)}>{+currentPage+2}</Pagination.Item> : ""} */}

                {pageCount - currentPage < 2 ? "" : <Pagination.Ellipsis />}
                {currentPage == pageCount ? <Pagination.Next disabled/> : <><Pagination.Item onClick={(e) => handlePaginationClick(e)}>{pageCount}</Pagination.Item><Pagination.Next onClick={() => setCurrentPage(currentPage+1)}/></>}
            </Pagination>
            </div>
        </div>
    )
}

export { Favourites }