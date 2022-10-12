import React from "react";
import { AiFillHome } from "react-icons/ai"
import { GoFlame } from "react-icons/go"
import { BsFillBookmarkFill } from "react-icons/bs"
import { IoMdSettings } from "react-icons/io"
import { Link } from "react-router-dom";


const Navigation = () => {
    return(
        <div className="navigation">
            <div className="navigation-cell">
                <Link to="/"><AiFillHome /> <span>Home</span></Link>
            </div>
            <div className="navigation-cell">
                <Link to=""><GoFlame /> <span>Trends</span></Link>
            </div>
            <div className="navigation-cell">
                <Link to=""><BsFillBookmarkFill /> <span>Favourites</span></Link>
            </div>
            <div className="navigation-cell">
                <Link to=""><IoMdSettings /><span>Settings</span></Link>
            </div>
        </div>
    )
}

export { Navigation }