import React from "react";
import { useSelector } from "react-redux";
import { StoreState, UserInfo } from "../types";

const User = () => {
    const currentUser = useSelector((state: StoreState) => state.user.user);

    return(
        <div className="user">
            <div className="user-avatar">
                {currentUser?.username?.charAt(0)}
            </div>
            <div className="username">
                {currentUser?.username}
            </div>
        </div>    
    )
}

export { User }