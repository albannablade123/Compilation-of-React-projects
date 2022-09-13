import React, { Fragment } from "react";
import BackgroundImage from "../../assets/background_image_desert.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import WebsiteLogo from '../../assets/website_logo.png'

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <img src={WebsiteLogo} alt="" />
        <h1>NVMC Service</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={BackgroundImage} alt="" />
      </div>
    </Fragment>
  );
};

export default Header;
