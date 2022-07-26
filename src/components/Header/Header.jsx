import React from "react";
import "./Header.css"

function Header(){
    return(
        <header>
            <h1 onClick={() => window.scroll(0,0)}>⚡MOVIE-MANIA✨</h1>
        </header>
    )
}

export default Header;