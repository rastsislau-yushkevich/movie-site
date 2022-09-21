import React from "react";
import { Movies } from "./Movies";
import { Navigation } from "./Navigation";

const MainContent = () => {
    return(
        <div className="main-content">
            <Navigation />
            <Movies />
        </div>
    )
}

export { MainContent }