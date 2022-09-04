import React from 'react';
import "../App.css"
import Footer from './Footer'

const Card = () => {
    return(
        <div className='container'>
            <h2 className='main-title'>Dr.Fauci</h2>
            <h4 className='job-title'>immunologist</h4>
            <a className='website-title' href="https://www.cdc.gov">cdc.gov</a>
            <div className='button-container'>
                <button className='button-email'>Email</button>
                <button className='button-linkedin'>Linkedin</button>
            </div>
            <div className='about-page'>
                <h2>about</h2>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h2>interest</h2>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </div>
    )
};

export default Card