import React from "react";
import { UserInfo } from "../types";

const User = (props: UserInfo) => {
    const { username } = props;

    return(
        <div className="user">
            <div className="user-avatar">
                {username.split(" ").map((el, index) => {
                    return(<span key={index}>{el.charAt(0)}</span>)
                })}
            </div>
            <div className="username">
                {username}
            </div>
        </div>    
    )
}

export { User }