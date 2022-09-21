import React from "react";
import { AiFillHome } from "react-icons/ai"
import { GoFlame } from "react-icons/go"
import { BsFillBookmarkFill } from "react-icons/bs"
import { IoMdSettings } from "react-icons/io"


const Navigation = () => {
    return(
        <div className="navigation">
            <div className="navigation-cell">
                <button><AiFillHome /> <span>Home</span></button>
            </div>
            <div className="navigation-cell">
                <button><GoFlame /> <span>Trends</span></button>
            </div>
            <div className="navigation-cell">
                <button><BsFillBookmarkFill /> <span>Favourites</span></button>
            </div>
            <div className="navigation-cell">
                <button><IoMdSettings /><span>Settings</span></button>
            </div>
        </div>
    )
}

export { Navigation }