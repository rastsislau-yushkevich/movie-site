import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadSelectedMovie } from "../redux/action_creators/movies_action_creators";
import { store } from "../redux/store";
import { StoreState } from "../types";

const SelectedPost = () => {
    const validId = new RegExp('[a-z]{2}[0-9]{7}');
    let searchId = window.location.href.split("/")[3];
    if(!validId.test(searchId)) {
        searchId = window.location.href.split("/")[4];
    }

    const dispatch = useDispatch();

    const movie = useSelector((state: StoreState) => state.movies.selectedMovie);
    const { Title, Genre, Year, Rated, Released, Runtime, Director, Writer, Actors, Plot, Poster, Language, Country, Awards, Ratings, Metascore, imdbVotes, Type, DVD, BoxOffice, Production, Website} = movie;

    useEffect(() => {
        dispatch(loadSelectedMovie(searchId));
    }, [searchId])

    let quality = "bad";

    if(+Metascore > 70) {
        quality = "good"
    } else if (+Metascore > 40) {
        quality = "ok"
    } else {
        quality = "bad"
    }

    return(
        <div className="selected-post">
            <div className="img-wrapper">
                <img src={Poster} alt={Title} />
            </div>
            <div className="selected-post-info">
                <p className="genres">{Genre}</p>
                <h2 className="title">{Title}</h2>
                <p className="year">{Year}</p>
                <span className={`rating ${quality}`}>{Metascore}</span>
                <p className="plot">{Plot}</p>
                <p className="director">Director: {Director}</p>
                <p className="actors">Actors: {Actors}</p>
            </div>
        </div>
    )
}

export { SelectedPost }