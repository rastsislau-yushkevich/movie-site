interface IFullMovieComponent extends IShortMovieComponent {
    Year: string,
    Rated: string,
    Released: string,
    Runtime: string,
    Director: string,
    Writer: string,
    Actors: string,
    Plot: string,
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

interface IShortMovieComponent {
    Title: string,
    Genre: string,
    Poster: string,
    imdbRating: string,
}

interface IShortMovieInfo {
    movieInfo: IShortMovieComponent
}

interface IFullMovieInfo {
    movieInfo: IFullMovieComponent
}

type RatingTemplate = {
    Source: string,
    Value: string
}

export type { IFullMovieComponent, IShortMovieComponent, IFullMovieInfo, IShortMovieInfo }