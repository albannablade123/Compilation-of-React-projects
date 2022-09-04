import React from 'react';
import reactLogo from "../assets/react.svg";
import reactLogoLarge from "../images/reactjs-icon_2.png"
import "../App.css";


function Main (){
    return (
        <main>
            <h1 className='main-title'>Fun facts about React</h1>
            <ul className='list-items'>
                <li>
                    Was first released in 2013
                </li>
                <li>
                    Was originally created by Jordan Walke
                </li>
                <li>
                    Has well over 100k on Github
                </li>
                <li>
                    Power over thousands of enterprise, including mobile apps
                </li>
            </ul>
            
        </main>
    )
}

export default Main;