import React from "react";
import "./Header.css"

function Header(){
    return(
        <header>
            <h1 onClick={() => window.scroll(0,0)}>⚡MOVIE-MANIA✨</h1>
            {/* <a href="https://accodes21.github.io/Profile/" target="blank">&copy; <span>Aarya</span></a> */}
        </header>
    )
}

export default Header;