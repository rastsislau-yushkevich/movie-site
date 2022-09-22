import { MoviesState } from "../../types"
import { SEARCH_MOVIE, SET_MOVIES } from "../action_types/movies_action_types"

const initialState = {
    movies: [], 
    s: ""
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
        default: {
            return state
        }
    }
}