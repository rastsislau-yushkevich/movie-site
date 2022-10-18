import React from "react";
import { Link } from "react-router-dom";
import { SignIn } from "./SignIn";

const BurgerUser = () => {
    const isAuthorised = !!localStorage.getItem("jwtAccess");

    const handleLogout = () => {
        localStorage.removeItem("jwtAccess");
        localStorage.removeItem("jwtRefresh");
        window.location.href = "/signin";
    }
    return(
        <div className="burger-user">
            <div className="burger-cell">
                {!isAuthorised ? <Link to="/signin">Login</Link> : <button onClick={handleLogout}>Logout</button>}
            </div>
        </div>
    )
}

export { BurgerUser }