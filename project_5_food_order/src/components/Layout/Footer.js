import React from "react";
import classes from "./Footer.module.css";
import WebsiteLogo from '../../assets/website_logo.png'
import NCRLogo from '../../assets/friendly.png'
import SunsetLogo from '../../assets/sunset_logo.jpg'

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.text}>
          <h2>Legal</h2>
          <div>
          <a href="https://github.com/albannablade123/Compilation-of-React-projects">Privacy Policy</a>
          </div>
          
        </div>
        <div className={classes.text}>
          <h2>Made By</h2>
          <a href="https://github.com/albannablade123/Compilation-of-React-projects">Albannablade123</a>
        </div>
        <div className={classes.text}>
          <h2>Support</h2>
          <a href="https://github.com/albannablade123/Compilation-of-React-projects">Github</a>
        </div>
      </div>

      <div className={classes.image}>
        <img src={WebsiteLogo} alt="" />
        <img src={SunsetLogo} alt="" />
        <img src={NCRLogo} alt="" />
      </div>

      <h1>@2022 A Service of Crimson Caravan</h1>
    </div>
  );
};

export default Footer;
