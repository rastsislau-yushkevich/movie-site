import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Movies } from "./Movies";
import { Navigation } from "./Navigation";
import { SignUp } from "./SignUp";

const MainContent = () => {
    return(
        <div className="main-content">
            <Navigation />
            <Routes>
                <Route path="/">
                    <Route index element={<Movies />}/>
                </Route>
                <Route path="/signup">
                    <Route index element={<SignUp />}/>
                </Route>
            </Routes>
        </div>
    )
}

export { MainContent }