import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import ForumIcon from "@material-ui/icons/Forum";
import AddBoxIcon from "@material-ui/icons/AddBox";
import ExploreIcon from "@material-ui/icons/Explore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { IconButton } from "@material-ui/core";
import "./Header.css";

const Header = () => {
  return (
    <div id="textbox">
      <p className="alignleft">
        <h2>Instagram</h2>
      </p>

      <p className="aligncenter">
      {/* <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form> */}
      </p>
     
      <p className="alignright">
        <IconButton>
          <HomeIcon fontSize="large" className="header_icon" />
        </IconButton>

        <IconButton>
          <ForumIcon fontSize="large" className="header_icon" />
        </IconButton>

        <IconButton>
          <AddBoxIcon fontSize="large" className="header_icon" />
        </IconButton>

        <IconButton>
          <ExploreIcon fontSize="large" className="header_icon" />
        </IconButton>

        <IconButton>
          <FavoriteIcon fontSize="large" className="header_icon" />
        </IconButton>
      </p>
    </div>
  );
};

export default Header;
