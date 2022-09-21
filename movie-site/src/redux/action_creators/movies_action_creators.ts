import { MovieInfo, MoviesResponse } from "../../types"
import { LOAD_MOVIES, SET_MOVIES } from "../action_types/movies_action_types"
import { put, takeEvery } from "redux-saga/effects"

const loadMovies = () => ({
    type: LOAD_MOVIES
})

const setMovies = (movies: MovieInfo[]) => ({
    type: SET_MOVIES,
    movies
})

function* fetchMovies() {
    const data: Response = yield fetch('http://www.omdbapi.com/?apikey=d6201460&s=end');
    const movies: MoviesResponse = yield data.json();
    yield put(setMovies(movies.Search));
}

function* watcherMovie() {
    yield takeEvery(LOAD_MOVIES, fetchMovies);
}

export { loadMovies, setMovies, watcherMovie }