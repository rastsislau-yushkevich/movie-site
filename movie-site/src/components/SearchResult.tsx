import React from "react";
import { SearchedMovieComponent } from "./SearchedMovieComponent";

const SearchResult = () => {
    const testData = [ {
        "Title": "Pirates of the Caribbean: At World's End",
        "Year": "2007",
        "imdbID": "tt0449088",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjIyNjkxNzEyMl5BMl5BanBnXkFtZTYwMjc3MDE3._V1_SX300.jpg"
    }]

    return(
        <div className="search-result">
            <SearchedMovieComponent movieInfo={testData[0]}/>
            <SearchedMovieComponent movieInfo={testData[0]}/>
        </div>
    )
}

export { SearchResult }