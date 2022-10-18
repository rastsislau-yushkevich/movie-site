import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { store } from "../redux/store";
import { StoreState } from "../types";
import { Favourites } from "./Favourites";
import { Movies } from "./Movies";
import { Navigation } from "./Navigation";
import { SelectedPost } from "./SelectedPost";
import { Settings } from "./Settings";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { Trends } from "./Trends";

const MainContent = () => {
    return(
        <div className="main-content">
            <Navigation />
            <Routes>
                <Route path="/">
                    <Route index element={<Movies />}/>
                    <Route path=":id" element={<SelectedPost />}/>
                    <Route path="signup" element={<SignUp />}/>
                    <Route path="signin" element={<SignIn />}/>
                    <Route path="settings" element={<Settings />}/>
                    <Route path="trends">
                        <Route index element={<Trends />}/>
                        <Route path=":id" element={<SelectedPost />}/>
                    </Route>
                    <Route path="favourites">
                        <Route index element={<Favourites />}/>
                        <Route path=":id" element={<SelectedPost />}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    )
}

export { MainContent }