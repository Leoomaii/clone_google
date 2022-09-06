import React from "react";
import "../pages/Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import Search from "../components/Search";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="header__left">
          <Link to=""><span className="no-cursor">About</span></Link>
          <Link to=""><span className="no-cursor">Gmail</span></Link>
        </div>
        <div className="header__right">
          <Link to=""><span className="no-cursor">Gmail</span></Link>
          <Link to=""><span className="no-cursor">Images</span></Link>
          <AppsIcon className="no-cursor"/>
          <Avatar className="no-cursor"/>
        </div>
      </div>
      <div className="home__body">
      <img
        className="home__body--img"
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        alt="Google Logo"
      />
      <div className="home__body--input--container">
        <Search />
      </div>
      </div>
    </div>
  );
};

export default Home;
