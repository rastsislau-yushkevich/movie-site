import { SearchedMovieInfo, MoviesResponse, SearchParams } from "../../types"
import { LOAD_MOVIES, SEARCH_MOVIE, SET_MOVIES } from "../action_types/movies_action_types"
import { put, takeEvery } from "redux-saga/effects"

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
    console.log("page in creator" ,page);
    const data: Response = yield fetch(buildQueryString({s, page}));
    const movies: MoviesResponse = yield data.json();
    // yield put(setMovies(movies.Search));
    yield put(setMovies(movies))
}

function* watcherMovie() {
    yield takeEvery(LOAD_MOVIES, fetchMovies);
}

export { loadMovies, setMovies, watcherMovie, searchMovies }