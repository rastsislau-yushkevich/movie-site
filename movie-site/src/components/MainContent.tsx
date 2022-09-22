import React from "react";
import { Movies } from "./Movies";
import { Navigation } from "./Navigation";
import { SearchedMovieComponent } from "./SearchedMovieComponent";

const MainContent = () => {

    
    return(
        <div className="main-content">
            <Navigation />
            <Movies />
        </div>
    )
}

export { MainContent }