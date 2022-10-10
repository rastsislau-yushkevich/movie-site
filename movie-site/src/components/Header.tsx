import React, { useEffect, useState } from "react";
import { MdSort } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux";
import { toggleUserBurger } from "../redux/action_creators/burger_action_creators";
import { loadMovies, searchMovies, setMovies } from "../redux/action_creators/movies_action_creators";
import { store } from "../redux/store";
import { StoreState } from "../types";
import { SearchedMovieComponent } from "./SearchedMovieComponent";
import { SearchResult } from "./SearchResult";
import { User } from "./User";
import { BurgerUser } from "./UserBurger";


const Header = () => {
    const userBurger = useSelector((state: StoreState) => state.burger.open)
    const dispatch = useDispatch();

    const search = useSelector((state: StoreState) => state.movies.s);
    const isSearch = !!search;

    const handleBurger = () => {
        console.log("burger")
        dispatch(toggleUserBurger());
    }

    const handleSearchChange = (e: any) => {
        dispatch(searchMovies(e.target.value));
    }

    return(
        <div className="header">
            <div className="logo"><span>pix</span>ema</div>
            <div className="search">
                <input type="text" className="search-input" placeholder="Search" value={search} onChange={handleSearchChange}/>
                <button className="sort-btn"><MdSort /></button>
                {/* {search && <SearchResult />} */}
            </div>
            <div style={{position: "relative"}}>
                <button onClick={handleBurger}><User username="Ilya Yushkevich"/></button>
                {userBurger && <BurgerUser />}
            </div>
        </div>
    )
}

export { Header }