import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { store } from "../redux/store";
import { StoreState } from "../types";
import { Movies } from "./Movies";
import { Navigation } from "./Navigation";
import { SelectedPost } from "./SelectedPost";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

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
                </Route>
            </Routes>
        </div>
    )
}

export { MainContent }