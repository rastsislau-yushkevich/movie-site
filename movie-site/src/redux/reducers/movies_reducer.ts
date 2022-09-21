import { MoviesState } from "../../types"
import { SET_MOVIES } from "../action_types/movies_action_types"

const initialState = {
    movies: []
}

export default (state: MoviesState = initialState, action: any) => {
    switch(action.type) {
        case SET_MOVIES: {
            return({
                ...state,
                movies: action.movies
            })
        }
        default: {
            return state
        }
    }
}