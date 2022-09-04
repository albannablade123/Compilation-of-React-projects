import React from 'react';
import "../App.css"
import twitter_icon from '../images/twitter_icon.png';
import facebook_icon from '../images/facebook_icon.png';
import instagram_icon from '../images/instagram_icon.png';
import github_icon from '../images/github_icon.png'
import profile from '../images/profile.png'

const ImageProfile = () => {
    return(
        <img className='image-profile' src={profile} alt="" />
    )
};

export default ImageProfile;