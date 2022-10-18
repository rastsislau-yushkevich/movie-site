import React, { useCallback, useEffect, useState } from "react";
import { BsSortUpAlt, BsSortDownAlt } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux";
import { toggleUserBurger } from "../redux/action_creators/burger_action_creators";
import { loadMovies, searchMovies, setMovies } from "../redux/action_creators/movies_action_creators";
import { store } from "../redux/store";
import { SearchedMovieInfo, StoreState } from "../types";
import { SearchedMovieComponent } from "./SearchedMovieComponent";
import { SearchResult } from "./SearchResult";
import { User } from "./User";
import { BurgerUser } from "./UserBurger";
import * as _ from "lodash";
import { Link } from "react-router-dom";


const Header = () => {
    const userBurger = useSelector((state: StoreState) => state.burger.open)
    const dispatch = useDispatch();
    const [sortedAsc, setSortedAsc] = useState(false);
    const currentUser = useSelector((state: StoreState) => state.user.user);
    const theme = useSelector((state: StoreState) => state.theme.theme);

    const movies = useSelector((state: StoreState) => state.movies.movies);

    function isIterable(obj: any) {
        // checks for null and undefined
        if (obj == null) {
          return false;
        }
        return typeof obj[Symbol.iterator] === 'function';
    }

    let moviesArr: SearchedMovieInfo[] = [];
    if(isIterable(movies.Search)) {
        moviesArr = [...movies.Search];
    }


    const search = useSelector((state: StoreState) => state.movies.s); //не меняется после добавления дебаунса и сортировки

    // const isSearch = !!search;

    const handleBurger = () => {
        dispatch(toggleUserBurger());
    }

    const handleSort = () => {
        if(sortedAsc) {
            movies.Search = moviesArr.sort((a, b) => {
                return Number(b.Year)-Number(a.Year)
            })
            setSortedAsc(false);
        } else {
            movies.Search = moviesArr.sort((a, b) => {
                return Number(a.Year)-Number(b.Year)
            })
            setSortedAsc(true);
        }
        dispatch(setMovies(movies));
    }

    const handleSearchChange = (e: any) => {
        dispatch(searchMovies(e.target.value))
    }

    const debouncedSearch = useCallback(_.debounce(handleSearchChange, 1000), [])

    return(
        <div className={`header header-${theme}`}>
            <div className="logo"><Link to="/"><span>pix</span>ema</Link></div>
            <div className="search">
                <input type="text" className="search-input" placeholder="Search" onChange={debouncedSearch}/>
                <button onClick={handleSort} className="sort-btn">{sortedAsc ? <BsSortUpAlt/> : <BsSortDownAlt />}</button>
                {/* {search && <SearchResult />} */}
            </div>
            <div style={{position: "relative"}}>
                {currentUser ? <button onClick={handleBurger}><User/></button> : <Link to="/signin" style={{backgroundColor: "darkgrey", padding: "10px", borderRadius: "10px", textDecoration: "none", color: "white"}}>Login</Link>}
                {userBurger && <BurgerUser />}
            </div>
        </div>
    )
}

export { Header }