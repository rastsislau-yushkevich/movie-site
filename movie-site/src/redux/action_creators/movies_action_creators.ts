import { SearchedMovieInfo, MoviesResponse, SearchParams, SelectedMovie } from "../../types"
import { LOAD_MOVIES, LOAD_SELECTED_MOVIE, SEARCH_MOVIE, SET_MOVIES, SET_SELECTED_MOVIE } from "../action_types/movies_action_types"
import { put, takeEvery } from "redux-saga/effects"
import { IFullMovieComponent, IFullMovieInfo } from "../../components/component_types"

const loadMovies = (searchInfo: SearchParams) => ({
    type: LOAD_MOVIES,
    searchInfo
})

// const setMovies = (movies: SearchedMovieInfo[]) => ({
//     type: SET_MOVIES,
//     movies
// })

const setMovies = (movies: MoviesResponse) => ({
    type: SET_MOVIES,
    movies
})

const searchMovies = (search: string) => ({
    type: SEARCH_MOVIE,
    s: search
})

const loadSelectedMovie = (selectedMovieId: string) => ({
    type: LOAD_SELECTED_MOVIE,
    selectedMovieId
})

const setSelectedMovie = (selectedMovie: SelectedMovie) => ({
    type: SET_SELECTED_MOVIE,
    selectedMovie
})

const buildQueryString = (search: SearchParams) => {
    let url = new URL("http://www.omdbapi.com/?apikey=d6201460&s='end'");
    for(let key in search) {
        url.searchParams.set(key, search[key]);
    }
    console.log(url)
    return url;
}

function* fetchMovies(action: any) {
    let { s, page } = action.searchInfo;
    if(s === undefined) {
        s = "end"
    }
    if(page === undefined) {
        page = "1"
    }
    const data: Response = yield fetch(buildQueryString({s, page}));
    const movies: MoviesResponse = yield data.json();
    yield put(setMovies(movies))
}

function* fetchSelectedMovie(action: any) {
    let { selectedMovieId } = action;
    const data: Response = yield fetch(`http://www.omdbapi.com/?apikey=d6201460&i=${selectedMovieId}`);
    const movie: SelectedMovie = yield data.json();
    yield put(setSelectedMovie(movie));
}

function* watcherMovie() {
    yield takeEvery(LOAD_MOVIES, fetchMovies);
    yield takeEvery(LOAD_SELECTED_MOVIE, fetchSelectedMovie)
}

export { loadMovies, setMovies, watcherMovie, searchMovies, loadSelectedMovie }