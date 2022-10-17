import { MoviesState } from "../../types"
import { SEARCH_MOVIE, SET_MOVIES, SET_SELECTED_MOVIE } from "../action_types/movies_action_types"

const initialState = {
    movies: {Search: [], totalResults: "0", Response: "true"},
    s: "",
    selectedMovie: { Title: "", Genre: "", Year: "", Rated: "", Released: "", Runtime: "", Director: "", Writer: "", Actors: "", Plot: "", Poster: "", Language: "", Country: "", Awards: "", Ratings: [], Metascore: "", imdbVotes: "", imdbID: "", Type: "", DVD: "", BoxOffice: "", Production: "", Website: "", Response: ""}
}

export default (state: MoviesState = initialState, action: any) => {
    switch(action.type) {
        case SET_MOVIES: {
            return({
                ...state,
                movies: action.movies
            })
        }
        case SEARCH_MOVIE: {
            return({
                ...state,
                s: action.s
            })
        }
        case SET_SELECTED_MOVIE: {
            return({
                ...state,
                selectedMovie: action.selectedMovie
            })
        }
        default: {
            return state
        }
    }
}