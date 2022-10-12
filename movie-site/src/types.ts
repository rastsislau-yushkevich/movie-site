type UserInfo = {
    username: string
}

type BurgerState = {
    open: boolean
}

type StoreState = {
    burger: BurgerState,
    tabs: TabsState, 
    movies: MoviesState
}

type TabsState = {
    active: boolean
}

type MoviesState = {
    // movies: SearchedMovieInfo[],
    movies: MoviesResponse
    s: string
}

type SearchedMovieInfo = {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
}

type MoviesResponse = {
    Search: SearchedMovieInfo[],
    totalResults: string,
    Response: string
}

type SearchedMovie = {
    movieInfo: SearchedMovieInfo
}

type SearchParams = {
    [index: string]: string
}

export type { UserInfo, BurgerState, StoreState, TabsState, SearchedMovieInfo, MoviesResponse, MoviesState, SearchedMovie, SearchParams }