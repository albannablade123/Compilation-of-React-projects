import React from 'react';
import "../App.css"
import twitter_icon from '../images/twitter_icon.png';
import facebook_icon from '../images/facebook_icon.png';
import instagram_icon from '../images/instagram_icon.png';
import github_icon from '../images/github_icon.png'

const FooterBottom = () => {
    return(
        <div className='footer-container'>
            <img src={twitter_icon} alt="" />
            <img src={facebook_icon} alt="" />
            <img src={instagram_icon} alt="" />
            <img src={github_icon} />
        </div>
           
       
        
    )
};

export default FooterBottom;