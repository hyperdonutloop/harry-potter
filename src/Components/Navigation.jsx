import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {

    return (
        <div className="nav">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/characters">Characters</Link>
            </div>
        </div>
    )
}

export default Navigation;