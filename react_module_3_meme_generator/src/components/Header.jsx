import React from "react"
import "../App.css"
import trollFace from "../images/troll_face.png"

/**
 * Challenge: Build the Header component
 */
export default function Header() {
    return (
    <nav className="navbar-container">
            <img src={trollFace} className="logo-icon" alt="" />
                <h4 className="website-title">Meme Generator</h4>
                <h5 className="secondary-title">
                    React-Course Project 3
                </h5>
    </nav>)
    
}
