import { Themes } from "./constants"

type UserInfo = {
    username: string
}

type BurgerState = {
    open: boolean
}

type StoreState = {
    burger: BurgerState,
    user: UserState, 
    movies: MoviesState,
    theme: ThemeState
}

type TabsState = {
    active: boolean
}

type MoviesState = {
    // movies: SearchedMovieInfo[],
    movies: MoviesResponse,
    s: string,
    selectedMovie: SelectedMovie
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

type SelectedMovie = {
    Title: string,
    Genre: string,
    Year: string,
    Rated: string,
    Released: string,
    Runtime: string,
    Director: string,
    Writer: string,
    Actors: string,
    Plot: string,
    Poster: string,
    Language: string,
    Country: string,
    Awards: string,
    Ratings: RatingTemplate[],
    Metascore: string,
    imdbVotes: string,
    imdbID: string,
    Type: string,
    DVD: string,
    BoxOffice: string,
    Production: string,
    Website: string,
    Response: string
}

type RatingTemplate = {
    Source: string,
    Value: string
}

type User = {
    id?: number,
    username?: string,
    email: string,
    password: string
}

type JwtResponse = {
    access: string,
    refresh: string
}

type UserState = {
    user: User | null
}

type ThemeState = {
    theme: Themes
}

export type { UserInfo, BurgerState, StoreState, TabsState, SearchedMovieInfo, MoviesResponse, MoviesState, SearchedMovie, SearchParams, SelectedMovie, RatingTemplate, User, JwtResponse, UserState, ThemeState }