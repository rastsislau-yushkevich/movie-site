import React from "react";
import { AiFillHome } from "react-icons/ai"
import { GoFlame } from "react-icons/go"
import { BsFillBookmarkFill } from "react-icons/bs"
import { IoMdSettings } from "react-icons/io"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { StoreState } from "../types";


const Navigation = () => {

    const theme = useSelector((state: StoreState) => state.theme.theme)

    return(
        <div className={`navigation navigation-${theme}`}>
            <div className="navigation-cell">
                <Link to="/"><AiFillHome /> <span>Home</span></Link>
            </div>
            <div className="navigation-cell">
                <Link to="/trends"><GoFlame /> <span>Trends</span></Link>
            </div>
            <div className="navigation-cell">
                <Link to="/favourites"><BsFillBookmarkFill /> <span>Favourites</span></Link>
            </div>
            <div className="navigation-cell">
                <Link to="/settings"><IoMdSettings /><span>Settings</span></Link>
            </div>
        </div>
        
    )
}

export { Navigation }