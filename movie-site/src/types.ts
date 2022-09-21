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
    movies: MovieInfo[]
}

type MovieInfo = {
    Title: string,
    Year: string,
    imdbId: string,
    Type: string,
    Poster: string
}

type MoviesResponse = {
    Search: MovieInfo[],
    totalResults: string,
    Response: string
}

export type { UserInfo, BurgerState, StoreState, TabsState, MovieInfo, MoviesResponse, MoviesState }